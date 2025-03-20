import * as axios from 'axios';
import * as cheerio from 'cheerio';

const github = 'https://github.com/mjgargani';

async function getHtml(url: string): Promise<string | false> {
  try {
    const etag = await axios.head(url).then(response => response.headers['etag']);
    console.log(etag);
    return false; // continue here
    const response = await axios.get(url);
    const { data } = response;
    return data as string;
  } catch (error: any) {
    console.error('Erro ao buscar HTML:', error.message);
    return false;
  }
}

async function getPinned(): Promise<any[]> {
  const html = await getHtml(github);
  if (!html) return [];
  const $ = cheerio.load(html);
  const pinned: string[] = [];

  $('li.pinned-item-list-item').each((_i, el) => {
    const repoName = $(el).find('div.pinned-item-list-item-content span.repo').text().trim();
    pinned.push(repoName);
  });

  return pinned;
}

export async function getRepositories(): Promise<any[]> {
  const reposUrl = `${github}?tab=repositories`;
  const html = await getHtml(reposUrl);
  if (!html) return [];
  const $ = cheerio.load(html);
  const repositories: any[] = [];
  const pinned = await getPinned();

  $('li.public').each((_i, el) => {
    const item = $(el);
    const repoName = item.find('a[itemprop="name codeRepository"]').text().trim();
    const repoLink = item.find('a[itemprop="name codeRepository"]').attr('href');
    const description = item.find('p[itemprop="description"]').text().trim();
    const updated = item.find('relative-time').attr('datetime');
    repositories.push({
      name: repoName,
      pinned: pinned.includes(repoName), 
      link: repoLink ? `https://github.com${repoLink}` : null,
      readme: repoLink ? `https://github.com${repoLink}#readme` : null,
      thumbnail: `https://raw.githubusercontent.com/mjgargani/${repoName}/lab/refs/heads/main/thumbnail.webp`,
      description: description || null,
      updated: updated || null,
    });
  });

  return repositories;
}

export async function getRepositoriesOrdered(): Promise<any[]> {
  const repositories = await getRepositories();
  return repositories.sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    if (a.updated && b.updated) return b.updated.localeCompare(a.updated);
    return 0;
  });
}

(async () => {
  const repositories = await getRepositoriesOrdered();
  console.log(repositories);
})();