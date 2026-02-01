export type GitHubProfile = {
  name: string;
  avatar_url: string;
  bio: string;
};

export type GitHubRepoItem = {
  id: number;
  created_at: string;
  name: string;
  stargazers_count: number;
  watchers_count: number;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[]; // for filters
};

export type Topic = {
  recurrence: number;
  name: string;
};

export type GitHubData = {
  loading: boolean;
  profile: GitHubProfile;
  repos: GitHubRepoItem[];
  topics: Topic[];
};
