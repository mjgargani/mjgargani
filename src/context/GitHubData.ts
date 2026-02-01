import useLocalStorage from '../hooks/useLocalStorage';
import { gitHubRequest } from '../utils/fetch';
import { type Topic, type GitHubData, type GitHubProfile, type GitHubRepoItem } from './types';
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
  updated?: boolean;
  etagRepos: string;
  etagProfile: string;
  repos: GitHubRepoItem[];
  profile: GitHubProfile;
};

export const useGitHubDataValues = (): GitHubData => {
  const [loading, setLoading] = useState<boolean>(true);
  const [topics, setTopics] = useState<Topic[]>([]);
  
  const [data, setData] = useState<CachedRepositoryData>({
    etagRepos: '',
    etagProfile: '',
    repos: [],
    profile: DEFAULT_PROFILE,
  });

  const cachedData = useLocalStorage<CachedRepositoryData>();

  useEffect(() => {
    if (cachedData !== false && typeof cachedData === 'object') {
      setData({ updated: false, ...cachedData });
    }
  }, [cachedData]);

  useEffect(() => {
    if (data?.updated === true) {
      setLoading(false);
      const newTopicList = filterList(data.repos);
      setTopics(newTopicList);
      return;
    }

    Promise.all([
      gitHubRequest<GitHubRepoItem[]>({
        endPoint: `users/${GITHUB_USERNAME}/repos`,
        etag: { name: 'repos', data: data.etagRepos },
        content: data?.repos,
      }),
      gitHubRequest<GitHubProfile>({
        endPoint: `users/${GITHUB_USERNAME}`,
        etag: { name: 'profile', data: data.etagProfile },
        content: data?.profile,
      }),
    ])
      .then((responses) => {
        const etagRepos = responses[0]?.newEtag?.trim() || data.etagRepos;
        const etagProfile = responses[1]?.newEtag?.trim() || data.etagProfile;
        
        const repos = responses[0].body?.length ? responses[0].body : data.repos;
        const profile = responses[1].body?.name?.trim() ? responses[1].body : data.profile;

        setData({
          updated: true,
          etagRepos,
          etagProfile,
          repos,
          profile,
        });

        const newTopicList = filterList(repos);
        setTopics(newTopicList);
      })
      .catch((err) => {
        console.error('Failed to fetch GitHub data:', err);
        setLoading(false);
      });
  }, [data]);

  const contextData = {
    loading,
    profile: data.profile,
    repos: data.repos,
    topics,
  };

  return contextData;
};
