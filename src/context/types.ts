export interface GitHubProfile {
  name: string,
  avatar_url: string,
  bio: string
}

export interface GitHubRepoItem {
  name: string,
  description: string,
  html_url: string
}

export interface GitHubData {
  loading: boolean,
  fetch: () => void,
  profile: Partial<GitHubProfile>,
  repos: Partial<GitHubRepoItem[]>
}