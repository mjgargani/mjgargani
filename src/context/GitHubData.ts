import { createContext, useCallback, useEffect, useState } from 'react'
import { type GitHubData, type GitHubProfile, type GitHubRepoItem } from './types'
import { pinnedRepos } from '../utils/fetch'

export const GitHubDataContext = createContext<Partial<GitHubData>>({})

export const useGitHubDataValues = (): Partial<GitHubData> => {
  const [loading, setLoading] = useState<boolean>(true)

  const [repos, setRepos] = useState<Partial<GitHubRepoItem[]>>()
  const [reposETag, setReposETag] = useState<string>()

  const [profile, setProfile] = useState<Partial<GitHubProfile>>()
  const [profileETag, setProfileETag] = useState<string>()
  
  const retrieveData = useCallback(async () => {
    if (!repos?.length && reposETag !== undefined){
      const newRepos: GitHubRepoItem[] = await fetch(
        'https://api.github.com/users/mjgargani/repos', {
          headers: {
            "If-None-Match": reposETag
          }
        }
      )
        .then(async response => {
          if(response.status === 304) {
            const localStorageRepos = localStorage.getItem("mjgargani-repos") || "";
            if(localStorageRepos !== ""){
              const restoreRepos = JSON.parse(localStorageRepos)
              if(restoreRepos.length){
                return restoreRepos
              }
            }
          }

          const repos = await response.json() as unknown;

          const newETag = response.headers.get("etag") || "";
          localStorage.setItem("mjgargani-etag-repos", newETag);
          
          const pinned = (await pinnedRepos()).map((el) => el.repo)

          return (repos as GitHubRepoItem[]).map((el) => ({
            id: el.id!,
            created_at: el.created_at!,
            name: el.name!,
            new: Date.now() - new Date(el.created_at!).getTime() <= 15778800000,
            pinned: pinned.includes(el.name!),
            stargazers_count: el.stargazers_count!,
            watchers_count: el.watchers_count!,
            description: el.description!,
            html_url: el.html_url!,
            thumbnail: `https://raw.githubusercontent.com/mjgargani/${el.name!}/main/thumbnail.gif`,
          }))
        })
      localStorage.setItem("mjgargani-repos", JSON.stringify(newRepos));
      setRepos(newRepos)
    }

    if (!profile?.name && profileETag !== undefined){
      const newProfile: GitHubProfile = await fetch(
        'https://api.github.com/users/mjgargani', {
          headers: {
            "If-None-Match": profileETag
          }
        }
      )
        .then(async response => {
          if(response.status === 304) {
            const localStorageProfile = localStorage.getItem("mjgargani-profile") || "";
            if(localStorageProfile !== ""){
              const restoreProfile = JSON.parse(localStorageProfile)
              if(!!restoreProfile.name){
                return restoreProfile;
              }
            }
          }

          const profile = await response.json() as unknown;

          const newETag = response.headers.get("etag") || "";
          localStorage.setItem("mjgargani-etag-profile", newETag);

          return {
            name: (profile as GitHubProfile).name,
            avatar_url: (profile as GitHubProfile).avatar_url,
            bio: (profile as GitHubProfile).bio,
          }
        })
      localStorage.setItem("mjgargani-profile", JSON.stringify(newProfile));
      setProfile(newProfile)
    }
  }, [repos, profile, reposETag, profileETag]);

  useEffect(() => {
    if(reposETag === undefined) {
      const localStorageETagRepos = localStorage.getItem("mjgargani-etag-repos") || "";
      setReposETag(localStorageETagRepos)
    }

    if(profileETag === undefined) {
      const localStorageETagProfile = localStorage.getItem("mjgargani-etag-profile") || "";
      setProfileETag(localStorageETagProfile)
    }

    if (
      (reposETag !== undefined && profileETag !== undefined) && 
      (!repos?.length && !profile?.name)
    ){
      setLoading(true)
      retrieveData()
    }

    if (reposETag !== undefined && profileETag !== undefined && repos?.length && profile?.name){
      setLoading(false)
    }
  }, [repos, profile, reposETag, profileETag, retrieveData])

  return {
    loading,
    retrieveData,
    profile,
    repos,
  }
}
