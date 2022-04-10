import { rest } from "msw";
import { BILL_API } from "services/api";

export const billHandlers = [
  rest.get(`${BILL_API}/billing/:user_id`, (req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json({
        current_month: Date.now(),
        due_date: Date.now(),
        bill_amount: 950,
        status: "open",
        bar_code: "00190.50095 40144.816069 06809.350314 3 37370000000100",
        pdf_url: "https://sindi.com/files/fatura.pdf",
        details: [{
          name: "Condomínio",
          type: "Mensalidade",
          amount: -850
        },
        {
          name: "Barulho",
          type: "Multa",
          amount: -100
        }]
      }),
    );
  })
];
