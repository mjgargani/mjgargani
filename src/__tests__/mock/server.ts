import { handlers } from './handlers';
import { setupServer } from 'msw/node';

export const server = (statusCode: 200 | 304 | 403) => setupServer(...handlers(statusCode));
