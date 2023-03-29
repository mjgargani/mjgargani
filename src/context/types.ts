export type GitHubProfile = {
  name: string;
  avatar_url: string;
  bio: string;
};

export type GitHubRepoItem = {
  id: number;
  created_at: string;
  name: string;
  new: boolean;
  pinned: boolean;
  stargazers_count: number;
  watchers_count: number;
  description: string;
  html_url: string;
  thumbnail: string;
};

export type GitHubData = {
  loading: boolean;
  profile: Partial<GitHubProfile>;
  repos: Partial<GitHubRepoItem[]>;
};
