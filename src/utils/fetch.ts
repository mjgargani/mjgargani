// Source: https://github.com/egoist/gh-pinned-repos

export interface PinnedRepos {
  repo: string
}

export const pinnedRepos = async (): Promise<PinnedRepos[]> =>
  fetch('https://gh-pinned-repos.egoist.dev/?username=mjgargani')
    .then(response => response.json())
    .then(data => data.length ? data : [{ repo: 'mjgargani' }])