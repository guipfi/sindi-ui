import { Loader, Typography, WhatsApp } from 'components/shared';
import { SectionHeader } from 'components/shared/SectionHeader';
import { useFaq } from 'hooks/useFaq';
import type { NextPage } from 'next';
import Link from 'next/link';

import styles from './styles.module.scss';

const Contato: NextPage = () => {

  const {
    data: faqQuestions,
    isLoading: isLoadingFaq,
    isError: isErrorFaq,
  } = useFaq();

  return (
    <section className={styles.container}>
      <SectionHeader title='Como podemos ajudar?' />
      <Typography asComponent='h3' variant={400} className={styles.title}>
        Perguntas frequentes
      </Typography>
      {isLoadingFaq && <Loader />}
      {isErrorFaq && <Typography>Erro ao carregar as perguntas.</Typography>}
      <ul className={styles.faq}>
        {faqQuestions?.map(({question, key}) => (
          <li key={key}>
            <Link href={`contato/${key}`}>
              <a>
                <Typography 
                  color='pink' 
                  variant={300} 
                  style={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))', cursor: 'pointer'}}
                >
                  {question}
                </Typography>
              </a>
            </Link>
          </li>
        ))}
        <WhatsApp />
      </ul>
    </section>
  );
};

export default Contato;
