import { setupServer } from 'msw/node';
import { handlers } from 'mocks/config/handlers';

export const server = setupServer(...handlers);
