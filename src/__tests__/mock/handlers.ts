import { rest } from 'msw'
import profile from './profile.json'
import repos from './repos.json'

export const handlers = [
  rest.get('https://api.github.com/users/mjgargani', async (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(profile)),
  ),
  rest.get('https://api.github.com/users/mjgargani/repos', async (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(repos)),
  ),
]
