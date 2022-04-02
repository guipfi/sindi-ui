import { rest } from "msw";
import { COMUNICATION_API } from "services/api";

export const comunicationHandlers = [
  rest.get(`${COMUNICATION_API}/comunications`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        totalPages: 3,
        rows: [{ id: 0, title: "Novo jardineiro", date: new Date(2022, 4, 1) }],
      })
    );
  }),
];
