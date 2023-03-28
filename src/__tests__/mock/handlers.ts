import { rest } from 'msw'

import pinned from './pinned.json'
import profile from './profile.json'
import repos from './repos.json'

export const handlers = (statusCode: 200 | 304 | 403) => [
  rest.get('https://api.github.com/users/mjgargani', async (_req, res, ctx) =>
    res(ctx.status(statusCode), ctx.json(profile)),
  ),
  rest.get('https://api.github.com/users/mjgargani/repos', async (_req, res, ctx) =>
    res(ctx.status(statusCode), ctx.json(repos)),
  ),
  rest.get('https://gh-pinned-repos.egoist.dev', async (req, res, ctx) => 
    res(ctx.status(200), ctx.json(pinned))
  ),
]
