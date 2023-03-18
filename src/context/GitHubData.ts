import { createContext, useEffect, useState } from 'react'
import { type GitHubData, type GitHubProfile, type GitHubRepoItem } from './types'
import request, { pinnedRepos } from '../utils/fetch'

export const GitHubDataContext = createContext<Partial<GitHubData>>({})

let loadTrigger = false

export const useGitHubDataValues = (): GitHubData => {
  const [loading, setLoading] = useState<boolean>(false)
  const [profile, setProfile] = useState<Partial<GitHubProfile>>({})
  const [repos, setRepos] = useState<Partial<GitHubRepoItem[]>>([])

  useEffect(() => {
    if(profile.name){
      setLoading(false);
    }
  }, [profile])

  const fetch = async () => {
    if (!loadTrigger && !repos.length && Boolean(!profile?.name)) {
      loadTrigger = true

      setLoading(true)

      const newRepos: GitHubRepoItem[] = await request(
        'https://api.github.com/users/mjgargani/repos',
        'GET',
      ).then(async (data: Partial<GitHubRepoItem>[]) => {
        const pinned = (await pinnedRepos()).map(el => el.repo);
        return data.map((el) => ({
          id: el.id!,
          created_at: el.created_at!,
          name: el.name!,
          new: ((Date.now() - new Date(el.created_at!).getTime()) <= 15778800000),
          pinned: pinned.includes(el.name!),
          "stargazers_count": el.stargazers_count!,
          "watchers_count": el.watchers_count!,
          description: el.description!,
          html_url: el.html_url!,
          thumbnail: `https://raw.githubusercontent.com/mjgargani/${el.name!}/main/thumbnail.gif`,
        }))
      })
      setRepos(newRepos)

      const newProfile: GitHubProfile = await request(
        'https://api.github.com/users/mjgargani',
        'GET',
      ).then((data: GitHubProfile) => ({
        name: data.name,
        avatar_url: data.avatar_url,
        bio: data.bio,
      }))
      setProfile(newProfile)
    }
  }

  return {
    loading,
    fetch,
    profile,
    repos,
  }
}
