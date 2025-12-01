/**
 * GitHub API Fetch Utilities
 * 
 * Implements efficient HTTP caching using ETags:
 * - ETags are unique identifiers for resource versions
 * - GitHub API returns ETags in response headers
 * - We send ETags back with "If-None-Match" header
 * - If unchanged, API returns 304 (Not Modified) - saves bandwidth
 * - If changed, API returns 200 with new data
 */

import { type GitHubRepoItem } from '../context/types';
import { StatusCodes } from 'http-status-codes';

type GitHubRequest<T> = {
  endPoint: string; // GitHub API endpoint (e.g., 'users/username/repos')
  etag: {
    name: string; // Key for storing in localStorage
    data?: string; // Previous ETag value for cache validation
  };
  content?: T; // Cached content to return if not modified
  callback?: (response: T) => T | Promise<T>; // Optional transform function
};

/**
 * Fetches data from GitHub API with ETag-based caching
 * 
 * Cache flow:
 * 1. Send request with "If-None-Match: <etag>" header
 * 2. If 304 Not Modified: Use cached content
 * 3. If 200 OK: Store new data and ETag in localStorage
 * 4. If 403 Forbidden: Rate limit reached, use cache
 * 
 * @param endPoint - GitHub API endpoint path
 * @param etag - ETag info for cache validation
 * @param content - Existing cached content
 * @param callback - Optional function to process response
 * @returns Promise with new ETag and/or body data
 */
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
      // Always store the new ETag for next request
      const newEtag = res.headers.get('etag') ?? '';
      localStorage.setItem(`etag-${etag.name}`, newEtag);

      // Return early if data not modified or rate limited
      if ([StatusCodes.NOT_MODIFIED, StatusCodes.FORBIDDEN].includes(res.status)) {
        return { newEtag };
      }

      // Parse and process response
      const response = (await res.json()) as T;
      if (!response) return { newEtag };

      // Apply optional transformation (e.g., enrich with pinned status)
      const body = callback ? await callback(response) : response;
      
      // Cache the processed data
      localStorage.setItem(etag.name, JSON.stringify(body));

      return { newEtag, body };
    })
    .catch(() => {
      // On error, return empty object (caller will use cached data)
      return {};
    });
}

/**
 * Repository pinning and enrichment
 * 
 * Fetches pinned repository list from external service and enriches
 * repository data with additional metadata:
 * - Pinned status (shown prominently in UI)
 * - New flag (repositories created within last 6 months)
 * - Thumbnail image URL
 */

// Source: https://github.com/egoist/gh-pinned-repos
export type PinnedRepos = {
  repo: string;
};

// 6 months in milliseconds (used to determine "new" repositories)
const SIX_MONTHS_MS = 15778800000;

/**
 * Enriches repository data with pinned status and metadata
 * 
 * @param repos - Repository list from GitHub API
 * @returns Enriched repository list with pinned and new flags
 */
export const pinnedRepos = async (repos: GitHubRepoItem[]): Promise<GitHubRepoItem[]> =>
  fetch('https://gh-pinned-repos.egoist.dev/?username=mjgargani')
    .then(async (response) => response.json() as Promise<PinnedRepos[]>)
    .then((pinnedRepos): string[] => 
      (pinnedRepos.length ? pinnedRepos : [{ repo: 'mjgargani' }])
        .map((el) => el.repo)
    )
    .then((pinnedNames) =>
      repos.map((repo) => ({
        ...repo,
        // Mark as "new" if created within last 6 months
        new: Date.now() - new Date(repo.created_at).getTime() <= SIX_MONTHS_MS,
        // Check if this repo is in the pinned list
        pinned: pinnedNames.includes(repo.name),
        // Construct thumbnail URL from repo
        thumbnail: `https://raw.githubusercontent.com/mjgargani/${repo.name}/main/thumbnail.webp`,
      })),
    );
