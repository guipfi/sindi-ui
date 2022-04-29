import { rest } from 'msw';
import { TRANSPARENCE_API } from 'services/api';

export const transparenceHandlers = [
  rest.get(`${TRANSPARENCE_API}/transparency_report`, (req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json({
        current_month: Date.now(),
        total_balance: 123.0213,
        monthly_balance: 33.999,
        previous_month_diff: 0.9,
        previous_year_diff: -0.3,
        historical_balance: [
          {
            month: Date.now(),
            value: -0.021,
          },
          {
            month: Date.now() - 32 * 24 * 60 * 60 * 1000,
            value: 0.04,
          },
          {
            month: Date.now() - 62 * 24 * 60 * 60 * 1000,
            value: 0.1,
          },
          {
            month: Date.now() - 93 * 24 * 60 * 60 * 1000,
            value: -0.08,
          },
          {
            month: Date.now() - 124 * 24 * 60 * 60 * 1000,
            value: -0.074,
          },
          {
            month: Date.now() - 155 * 24 * 60 * 60 * 1000,
            value: -0.088,
          },
        ],
      })
    );
  }),

  rest.get(
    `${TRANSPARENCE_API}/transparency_report/details`,
    (req, res, ctx) => {
      return res(
        ctx.delay(),
        ctx.status(200),
        ctx.json({
          current_month: Date.now(),
          monthly_balance: 33.999,
          monthly_income: 260000,
          monthly_outcome: 250000,
          spendings: [
            {
              name: 'Porteiros',
              type: 'Serviços',
              amount: 40000,
            },
            {
              name: 'Jardinagem',
              type: 'Serviços',
              amount: 3200,
            },
            {
              name: 'Pintura do bloco B',
              type: 'Manutenção',
              amount: 40000,
            },
            {
              name: 'Pintura do bloco B',
              type: 'Manutenção',
              amount: 5000,
            },
            {
              name: 'Conta de luz',
              type: 'Contas',
              amount: 2150,
            },
            {
              name: 'Câmeras de vigilância',
              type: 'Aquisição',
              amount: 10000,
            },
          ],
          relative_spendings_per_type: [
            {
              type: 'Serviços',
              value: 0.27,
            },
            {
              type: 'Manutenção',
              value: 0.23,
            },
            {
              type: 'Contas',
              value: 0.12,
            },
            {
              type: 'Aquisição',
              value: 0.58,
            },
          ],
        })
      );
    }
  ),
];
