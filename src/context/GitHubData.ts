/**
 * Repository Data Context
 * 
 * This context manages the application's repository and profile data by:
 * 1. Fetching data from GitHub API for a specific user
 * 2. Caching responses in localStorage to minimize API calls
 * 3. Using ETags for efficient cache validation (HTTP 304 Not Modified)
 * 4. Providing centralized state for all components
 * 
 * Cache Strategy:
 * - First load: Fetch from GitHub API and store in localStorage
 * - Subsequent loads: Load from localStorage and validate with ETags
 * - If data unchanged (304): Use cached version
 * - If data changed (200): Update cache with new data
 */

import useLocalStorage from '../hooks/useLocalStorage';
import { gitHubRepoMetadata, gitHubRequest } from '../utils/fetch';
import { type TechDetail, type GitHubData, type GitHubProfile, type GitHubRepoItem } from './types';
import { filterList } from '@/utils/filterList';
import { createContext, useEffect, useState } from 'react';

export const GitHubDataContext = createContext<Partial<GitHubData>>({});

const GITHUB_USERNAME = 'mjgargani';

const DEFAULT_PROFILE: GitHubProfile = {
  name: 'Rodrigo Gargani Oliveira',
  avatar_url: 'https://avatars.githubusercontent.com/u/46717827?v=4',
  bio: "If you can read this, GitHub API is not reachable :'(",
};

type CachedRepositoryData = {
  updated?: boolean; // Flag to track if data has been fetched
  etagRepos: string; // ETag for repository list caching
  etagProfile: string; // ETag for profile caching
  repos: GitHubRepoItem[]; // Cached repository list
  profile: GitHubProfile; // Cached profile data
};

export const useGitHubDataValues = (): GitHubData => {
  const [loading, setLoading] = useState<boolean>(true);
  const [techs, setTechs] = useState<TechDetail[]>([]);
  
  const [data, setData] = useState<CachedRepositoryData>({
    etagRepos: '',
    etagProfile: '',
    repos: [],
    profile: DEFAULT_PROFILE,
  });

  const cachedData = useLocalStorage<CachedRepositoryData>();

  // Restore cached data on mount (only once)
  useEffect(() => {
    if (cachedData !== false && typeof cachedData === 'object') {
      setData({ updated: false, ...cachedData });
    }
  }, [cachedData]);

  // Fetch data from GitHub API when not yet updated
  useEffect(() => {
    // Skip if data already fetched
    if (data?.updated === true) {
      setLoading(false);
      return;
    }

    if (data?.updated === false) {
      // Fetch both repositories and profile in parallel
      Promise.all([
        gitHubRequest<GitHubRepoItem[]>({
          endPoint: `users/${GITHUB_USERNAME}/repos`,
          etag: { name: 'repos', data: data.etagRepos },
          content: data?.repos,
          callback: (repos) => gitHubRepoMetadata(GITHUB_USERNAME, repos), // Enrich with metadata
        }),
        gitHubRequest<GitHubProfile>({
          endPoint: `users/${GITHUB_USERNAME}`,
          etag: { name: 'profile', data: data.etagProfile },
          content: data?.profile,
        }),
      ])
        .then((responses) => {
          // Extract ETags (use existing if not modified)
          const etagRepos = responses[0]?.newEtag?.trim() || data.etagRepos;
          const etagProfile = responses[1]?.newEtag?.trim() || data.etagProfile;
          
          // Extract bodies (use cached if not modified)
          const repos = responses[0].body?.length ? responses[0].body : data.repos;
          const profile = responses[1].body?.name?.trim() ? responses[1].body : data.profile;

          // Process repositories to ensure metadata fields are set
          setData({
            updated: true,
            etagRepos,
            etagProfile,
            repos,
            profile,
          });

          // Extract technology tags from repository names for filtering
          // New Data structure: repos[].metaData.stack[]
          const newTechList = filterList(repos);
          setTechs(newTechList);
        })
        .catch((err) => {
          console.error('Failed to fetch GitHub data:', err);
          setLoading(false);
        });
    }
  }, [data]);

  return {
    loading,
    profile: data.profile,
    repos: data.repos,
    techs,
  };
};
