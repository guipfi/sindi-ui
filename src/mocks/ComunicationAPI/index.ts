import { rest } from "msw";
import { COMUNICATION_API } from "services/api";

export const comunicationHandlers = [
  rest.get(`${COMUNICATION_API}/news`, (req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json(
        [
          {
            key: 0,
            title: "NOVO JARDINEIRO",
            type: "general",
            date: Date.now(),
          },
          {
            key: 1,
            title: "MANUTENÇÃO NA PRAÇA PRINCIPAL",
            type: "maintenance",
            date: Date.now(),
          },
          {
            key: 2,
            title: "REGRAS ATUALIZADAS 2022",
            type: "rules",
            date: Date.now(),
          },
        ],
      )
    );
  }),
];
