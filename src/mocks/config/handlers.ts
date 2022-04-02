import { rest } from "msw";
import { comunicationHandlers } from "../ComunicationAPI";


export const handlers = [
  ...comunicationHandlers,
];