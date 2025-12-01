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
import { gitHubRequest, pinnedRepos } from '../utils/fetch';
import { type TechDetail, type GitHubData, type GitHubProfile, type GitHubRepoItem } from './types';
import { filterList } from '@/utils/filterList';
import { createContext, useEffect, useState } from 'react';

// Context provides repository data to all child components
export const GitHubDataContext = createContext<Partial<GitHubData>>({});

// GitHub username to fetch data for (configurable)
const GITHUB_USERNAME = 'mjgargani';

// Default profile data to show while loading
const DEFAULT_PROFILE: GitHubProfile = {
  name: 'Rodrigo Gargani Oliveira',
  avatar_url: 'https://avatars.githubusercontent.com/u/46717827?v=4',
  bio: '',
};

// Internal cache format stored in localStorage
type CachedRepositoryData = {
  updated?: boolean; // Flag to track if data has been fetched
  etagRepos: string; // ETag for repository list caching
  etagProfile: string; // ETag for profile caching
  repos: GitHubRepoItem[]; // Cached repository list
  profile: GitHubProfile; // Cached profile data
};

/**
 * Hook that fetches and manages GitHub repository data
 * 
 * Flow:
 * 1. Initialize with default/cached data
 * 2. Load from localStorage if available
 * 3. Fetch from GitHub API using ETags for cache validation
 * 4. Extract technology tags from repository names
 * 5. Update cache and return data to context consumers
 * 
 * @returns GitHubData containing profile, repos, techs, and loading state
 */
export const useGitHubDataValues = (): GitHubData => {
  const [loading, setLoading] = useState<boolean>(true);
  const [techs, setTechs] = useState<TechDetail[]>([]);
  
  // Initialize with default data structure
  const [data, setData] = useState<CachedRepositoryData>({
    etagRepos: '',
    etagProfile: '',
    repos: [],
    profile: DEFAULT_PROFILE,
  });

  // Load cached data from localStorage
  const cachedData = useLocalStorage<CachedRepositoryData>();

  // Restore cached data on mount (only once)
  useEffect(() => {
    // useLocalStorage returns false when localStorage is empty
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
          callback: pinnedRepos, // Enrich with pinned status
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

          // Handle special case: rename main portfolio repo for display
          const processedRepos = repos.map((repo) =>
            repo.name === 'mjgargani'
              ? { ...repo, name: 'nodejs-typescript-vite-vitest-reactjs-styledcomp-docker_2023-portfolio' }
              : repo,
          );

          // Update state with fetched data
          setData({
            updated: true,
            etagRepos,
            etagProfile,
            repos: processedRepos,
            profile,
          });

          // Extract technology tags from repository names for filtering
          const repoNames = processedRepos.map((repo) => repo.name);
          setTechs(filterList(repoNames));
        })
        .catch((err) => {
          console.error('Failed to fetch GitHub data:', err);
          // Keep using cached/default data on error
          setLoading(false);
        });
    }
  }, [data]);

  // Return data for context consumers
  return {
    loading,
    profile: data.profile,
    repos: data.repos,
    techs,
  };
};
