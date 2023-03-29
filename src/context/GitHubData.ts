/* eslint-disable @typescript-eslint/naming-convention */
import useLocalStorage from '../hooks/useLocalStorage';
import { gitHubRequest, pinnedRepos } from '../utils/fetch';
import { type GitHubData, type GitHubProfile, type GitHubRepoItem } from './types';
import { createContext, useEffect, useState } from 'react';

export const GitHubDataContext = createContext<Partial<GitHubData>>({});

type LocalStorageData = {
  updated: boolean;
  etagRepos: string;
  etagProfile: string;
  repos: GitHubRepoItem[];
  profile: GitHubProfile;
};

export const useGitHubDataValues = (): Partial<GitHubData> => {
  const [loading, setLoading] = useState<boolean>(true);

  const [data, setData] = useState<Partial<LocalStorageData>>();

  const localStorageHook = useLocalStorage<Partial<LocalStorageData>>();

  useEffect(() => {
    if (Boolean(localStorageHook) && !data) {
      setData({
        updated: false,
        ...localStorageHook,
      });
    }

    if (data?.updated === false) {
      Promise.all([
        gitHubRequest<GitHubRepoItem[]>({
          endPoint: 'users/mjgargani/repos',
          etag: { name: 'repos', data: data?.etagRepos },
          content: data?.repos,
          callback: pinnedRepos,
        }),
        gitHubRequest<GitHubProfile>({
          endPoint: 'users/mjgargani',
          etag: { name: 'profile', data: data?.etagProfile },
          content: data?.profile,
        }),
      ])
        .then((responses) => {
          setData({
            updated: true,
            etagRepos: responses[0].newEtag ?? data?.etagRepos,
            etagProfile: responses[1].newEtag ?? data?.etagProfile,
            repos: responses[0].body ?? data?.repos,
            profile: responses[1].body ?? data?.profile,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }

    if (data?.updated === true) {
      setLoading(false);
    }
  }, [data, localStorageHook]);

  return {
    loading,
    profile: data?.profile,
    repos: data?.repos,
  };
};
