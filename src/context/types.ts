export type GitHubProfile = {
  name: string
  avatar_url: string
  bio: string
}

export type GitHubRepoItem = {
  name: string
  description: string
  html_url: string
}

export type GitHubData = {
  loading: boolean
  fetch: () => void
  profile: Partial<GitHubProfile>
  repos: Partial<GitHubRepoItem[]>
}
