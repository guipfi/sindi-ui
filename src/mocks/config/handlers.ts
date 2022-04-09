import { transparenceHandlers } from "mocks/TransparenceAPI";
import { comunicationHandlers } from "../ComunicationAPI";


export const handlers = [
  ...comunicationHandlers,
  ...transparenceHandlers,
];