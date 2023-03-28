import { setupServer } from 'msw/node'

import { handlers } from './handlers'

export const server = (statusCode: 200 | 304 | 403) => setupServer(...handlers(statusCode))
