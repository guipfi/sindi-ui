import { setupWorker } from "msw";
import { handlers } from "mocks/config/handlers";

export const worker = setupWorker(...handlers);