// Mocking localStorage with FS, this will not be used in the final project
// Yes, I am a savage, and a f*cking cowboy in testing, sorry senpai

import * as fs from 'fs';
import * as path from 'path';

const storageFilePath = path.join(__dirname, 'localStorage.json');

function readData(): Record<string, string> {
  if (!fs.existsSync(storageFilePath)) return {};
  try {
    const content = fs.readFileSync(storageFilePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Erro ao ler o localStorage:', error);
    return {};
  }
}

function writeData(data: Record<string, string>) {
  try {
    fs.writeFileSync(storageFilePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Erro ao escrever no localStorage:', error);
  }
}

(global as any).localStorage = {
  _data: readData(),
  setItem(key: string, value: string) {
    this._data[key] = value;
    writeData(this._data);
  },
  getItem(key: string) {
    return this._data.hasOwnProperty(key) ? this._data[key] : null;
  },
  removeItem(key: string) {
    delete this._data[key];
    writeData(this._data);
  },
  clear() {
    this._data = {};
    writeData(this._data);
  },
};

// Real code (will be used in the final project)

import * as axios from 'axios';
import * as cheerio from 'cheerio';

const github = 'https://github.com/mjgargani';

async function getNewEtag(url: string): Promise<string | null> {
  try {
    const response = await axios.head(url);
    const etag = response.headers.etag || null;
    localStorage.setItem('etag', etag);
    return etag;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
}

async function getHtml(url: string): Promise<string | false> {
  try {
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

async function getEtagCache(url: string): Promise<boolean> {
  const localEtag = localStorage.getItem('etag');
  const remoteEtag = await getNewEtag(url);
  return localEtag === remoteEtag;
}

function getRepoCache(): any[] {
  const localCache = localStorage.getItem('repositories');
  if (!localCache) return [];
  return JSON.parse(localCache);
}

export async function getRepositories(): Promise<any[]> {
  if (await getEtagCache(github)) {
    return getRepoCache()
  }

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

  localStorage.setItem('repositories', JSON.stringify(repositories));

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


// Testing, ignore this block
// AAAAAAGUENTA COLCHÃO VÉIO

(async () => {
  const repositories = await getRepositoriesOrdered();
  console.log({
    repositories,
  });
})();