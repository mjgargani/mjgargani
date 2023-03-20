import { useMemo, useRef } from 'react'
import { GitHubRepoItem } from '../context/types'

function useRepos(repos?: (GitHubRepoItem | undefined)[]) {
  const ref = useRef<(GitHubRepoItem | undefined)[]>()

  const newOrdenedRepos: (GitHubRepoItem | undefined)[] = useMemo(() => {
    return repos?.length ? [
      ...repos
        .sort((a, b) => (a!.id < b!.id ? 1 : -1))
        .filter((el) => el?.pinned),
      ...repos
        .sort((a, b) => (a!.id < b!.id ? 1 : -1))
        .filter((el) => !el?.pinned)
    ] : []
  }, [repos]);

  ref.current = newOrdenedRepos;
  return ref.current
}

export default useRepos
