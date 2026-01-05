import { GitHubRepoItem, type TechDetail } from '@/context/types';

// This function will runs through a list of repository names and extract technology tags
export function filterList(repos: GitHubRepoItem[]): TechDetail[] {
  const list: TechDetail[] = [];

  for (const repo of repos) {
    const stack = repo.metaData?.stack || [];
    for (const tech of stack) {
      const existingTech = list.find((item) => item.name === tech);
      if (existingTech) {
        existingTech.recurrence += 1;
      } else {
        list.push({ name: tech, recurrence: 1 });
      }
    }
  }

  return list.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }

    return 0;
  });
}
