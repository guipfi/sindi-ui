import { rest } from 'msw';
import { COMUNICATION_API } from 'services/api';

export const comunicationHandlers = [
  rest.get(`${COMUNICATION_API}/news`, (req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json([
        {
          key: 0,
          title: 'NOVO JARDINEIRO',
          type: 'general',
          date: Date.now(),
        },
        {
          key: 1,
          title: 'MANUTENÇÃO NA PRAÇA PRINCIPAL',
          type: 'maintenance',
          date: Date.now(),
        },
        {
          key: 2,
          title: 'REGRAS ATUALIZADAS 2022',
          type: 'rules',
          date: Date.now(),
        },
      ])
    );
  }),
  rest.get(`${COMUNICATION_API}/news/:id`, (req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json({
        key: 0,
        title: 'Novo jardineiro',
        date: Date.now(),
        content:
          'Hoje, dia 25 de março de 2022, é o começo da trajetória do novo colaborador do nosso condomínio, Lineu Silva, jardineiro de 62 anos. Ele possui mais de 20 anos de experiência na área, prometendo revolucionar o mindset relacionado a arborização do nosso lar.',
      })
    );
  }),
  rest.get(`${COMUNICATION_API}/faq`, (req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json([
        {
          key: 0,
          question: 'Como entrar em contato com o síndico?',
        },
        {
          key: 1,
          question: 'Como pagar as contas?',
        },
        {
          key: 2,
          question: 'Qual é o horário para realizar mudanças?',
        },
      ])
    );
  }),
  rest.get(`${COMUNICATION_API}/faq/:id`, (req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json({
        key: req.params['id'],
        question: 'Como entrar em contato com o síndico?',
        answer:
          'Para entrar em contato com o síndico, você pode utilizar o botão de WhatsApp, disponível na página de contato.\n Ao selecionar o botão de WhatsApp, você será  redirecionado a página do WhatsApp para conversa com o síndico.',
      })
    );
  }),
];
