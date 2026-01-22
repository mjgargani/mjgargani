export type GitHubProfile = {
  name: string;
  avatar_url: string;
  bio: string;
};

export type RepoMetadata = {
  new: boolean; // Whether the repo is new (created within last 6 months)
  pinned: boolean; // Whether the repo is pinned
  title: string; // Override repo title
  description: string; // Override repo description
  homepage: string; // Override repo homepage URL
  stack: string[]; // Technology stack used in the repo
  fullDescription: string; // Whether to show full description (lab.md)
  gallery: string[]; // Image gallery URLs (logic's default is "['thumbnail.webp']")
}

export type GitHubRepoItem = {
  id: number;
  created_at: string;
  name: string;
  stargazers_count: number;
  watchers_count: number;
  description: string;
  html_url: string;
  homepage: string;
  metaData?: RepoMetadata;
};

export type TechDetail = {
  recurrence: number;
  name: string;
};

export type GitHubData = {
  loading: boolean;
  profile: GitHubProfile;
  repos: GitHubRepoItem[];
  techs: TechDetail[];
};
