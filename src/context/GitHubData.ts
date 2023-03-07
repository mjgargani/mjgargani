import { createContext, useState } from 'react';
import { GitHubData, GitHubProfile, GitHubRepoItem } from './types';
import request from '../utils/fetch';

export const GitHubDataContext = createContext<Partial<GitHubData>>({});

let loadTrigger = false;

export const useGitHubDataValues = (): GitHubData => {
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<Partial<GitHubProfile>>({});
  const [repos, setRepos] = useState<Partial<GitHubRepoItem[]>>([]);

  const fetch = () => {
    if(!loadTrigger && !repos.length && !!!profile?.name){
      loadTrigger = true;
      
      setLoading(true);

      request("https://api.github.com/users/mjgargani/repos", "GET")
        .then((data: GitHubRepoItem[]) => {
          const newRepos: GitHubRepoItem[] = data.map(el => (
            { 
              name: el.name,
              description: el.description,
              html_url: el.html_url
            }
          ));
          setRepos(newRepos);

          request("https://api.github.com/users/mjgargani", "GET")
            .then((data: GitHubProfile) => {
              const newProfile: GitHubProfile = { 
                name: data.name,
                avatar_url: data.avatar_url,
                bio: data.bio
              }
              setProfile(newProfile);

              setLoading(false);
            });
        });
    }
  };

  return {
    loading,
    fetch,
    profile,
    repos
  }
}