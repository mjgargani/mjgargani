import { rest } from 'msw'
import profile from './profile.json'
import repos from './repos.json'
import pinned from './pinned.json'

export const handlers = [
  rest.get('https://api.github.com/users/mjgargani', async (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(profile)),
  ),
  rest.get('https://api.github.com/users/mjgargani/repos', async (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(repos)),
  ),
  rest.get('https://gh-pinned-repos.egoist.dev', async (req, res, ctx) =>{
    const username =  req.url.searchParams.get('username');
    return username === "mjgargani" ? 
      res(ctx.status(200), ctx.json(pinned)) :
      res(ctx.status(404))
  }),
]
