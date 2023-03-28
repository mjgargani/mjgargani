import { createContext, useEffect, useState } from 'react'

import useLocalStorage from '../hooks/useLocalStorage'
import { gitHubRequest, pinnedRepos } from '../utils/fetch'
import { type GitHubData, type GitHubProfile, type GitHubRepoItem } from './types'

export const GitHubDataContext = createContext<Partial<GitHubData>>({})

interface LocalStorageData {
  updated: boolean
  etagRepos: string
  etagProfile: string
  repos: GitHubRepoItem[]
  profile: GitHubProfile
}

export const useGitHubDataValues = (): Partial<GitHubData> => {
  const [loading, setLoading] = useState<boolean>(true)

  const [data, setData] = useState<Partial<LocalStorageData>>()

  const localStorageHook = useLocalStorage<Partial<LocalStorageData>>()

  useEffect(() => {
    if (!!localStorageHook && !!!data) {
      setData({
        updated: false,
        ...localStorageHook,
      })
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
      ]).then((responses) => {
        setData({
          updated: true,
          etagRepos: responses[0].newETag || data?.etagRepos,
          etagProfile: responses[1].newETag || data?.etagProfile,
          repos: responses[0].body || data?.repos,
          profile: responses[1].body || data?.profile,
        })
      })
    }

    if (data?.updated === true) {
      setLoading(false)
    }
  }, [data, localStorageHook])

  return {
    loading,
    profile: data?.profile,
    repos: data?.repos,
  }
}
