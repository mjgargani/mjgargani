const request = async (url: RequestInfo | URL, method?: RequestInit['method'], text?: boolean) =>
  fetch(url, { method: method || 'GET' }).then((response) =>
    text ? response.text() : response.json(),
  )

// Source: https://github.com/egoist/gh-pinned-repos
export interface PinnedRepos {
  repo: string
}
export const pinnedRepos = async (): Promise<PinnedRepos[]> =>
  request('https://gh-pinned-repos.egoist.dev/?username=mjgargani').catch(
    (err) => [{ repo: 'mjgargani' }] as PinnedRepos[],
  )

export default request
