import { GitHubRepoItem, RepoMetadata } from '../context/types';
import { StatusCodes } from 'http-status-codes';

type GitHubRequest<T> = {
  endPoint: string; // GitHub API endpoint (e.g., 'users/username/repos' or 'users/username')
  etag: {
    name: string; // Key for storing in localStorage
    data?: string; // Previous ETag value for cache validation
  };
  content?: T; // Cached content to return if not modified
  callback?: (response: T) => T | Promise<T>; // Optional transform function
};

export async function gitHubRequest<T>({ 
  endPoint, 
  etag, 
  content, 
  callback 
}: GitHubRequest<T>): Promise<Partial<{
  newEtag: string;
  body: T;
}>> {
  const isInLocalStorage = Boolean(etag.data) && Boolean(content);
  
  return fetch(`https://api.github.com/${endPoint}`, {
    headers: { 
      'If-None-Match': isInLocalStorage ? etag.data! : '' 
    },
  })
    .then(async (res) => {
      const newEtag = res.headers.get('etag') ?? '';
      localStorage.setItem(`etag-${etag.name}`, newEtag);

      if ([StatusCodes.NOT_MODIFIED, StatusCodes.FORBIDDEN].includes(res.status)) {
        return { newEtag };
      }

      const response = (await res.json()) as T;
      if (!response) return { newEtag };

      const body = callback ? await callback(response) : response;
      
      localStorage.setItem(etag.name, JSON.stringify(body));

      return { newEtag, body };
    })
    .catch(() => {
      return {};
    });
}

/**
 * Return repository metadata from .lab.json
 */

// 6 months in milliseconds (used to determine "new" repositories)
const SIX_MONTHS_MS = 15778800000;

const rawMetadataRequest = async (username: string, repo: GitHubRepoItem): Promise<RepoMetadata> => {
  const rawBaseUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/refs/heads/main/`;

  return Promise.all([
    fetch(`${rawBaseUrl}.lab.json`),
    fetch(`${rawBaseUrl}lab.md`),
  ])
    .then(async (responses) => {
      let data: Partial<RepoMetadata> | null = null;
      let fullDescription: string | null = null;

      for (const res of responses) {
        if (res.ok) {  
          if (res.url.endsWith('.json')) {
            data = (await res.json()) as Partial<RepoMetadata>;
          } else if (res.url.endsWith('lab.md')) {
            fullDescription = await res.text();
          }
        }
      }

      data = {
        ...data,
        gallery: ['thumbnail.webp', ...(data?.gallery || [])]
      }
      
      const galleryRawListURL = data.gallery!.map((img) => `${rawBaseUrl}${img}`) || [];

      const newMetadata: RepoMetadata = {
        new: new Date(repo.created_at).getTime() > (Date.now() - SIX_MONTHS_MS),
        pinned: data?.pinned || false,
        title: data?.title || repo.name,
        description: data?.description || repo.description || '',
        homepage: data?.homepage || repo.homepage || '',
        stack: data?.stack || [],
        gallery: galleryRawListURL,
        fullDescription: fullDescription || data?.fullDescription || '',
      };

      return newMetadata;
    })
    .catch(() => {
      return {} as RepoMetadata;
    });
  }
  
  

const rawMetadataHandle = async (username: string, repo: GitHubRepoItem): Promise<GitHubRepoItem> => {
  const metaData = await rawMetadataRequest(username, repo);
 
  const enrichedRepo: GitHubRepoItem = {
    ...repo,
    metaData,
  }; 
  return enrichedRepo;
}

export const gitHubRepoMetadata = async (username: string, repos: GitHubRepoItem[]): Promise<GitHubRepoItem[]> => {
  const promises = repos.map((repo) => rawMetadataHandle(username, repo));
  const results = await Promise.all(promises);
  return results;
}
