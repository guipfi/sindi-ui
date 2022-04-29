import { Loader, Typography, WhatsApp } from 'components/shared';
import { SectionHeader } from 'components/shared/SectionHeader';
import { useFaqQuestion } from 'hooks/useFaqQuestion';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

const Pergunta: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: faqQuestion,
    isLoading: isLoadingFaq,
    isError: isErrorFaq,
  } = useFaqQuestion(id as string);

  const { question, answer } = faqQuestion || {};

  return (
    <section className={styles.container}>
      <SectionHeader title={question ?? ''} />
      {isLoadingFaq && <Loader />}
      {isErrorFaq && <Typography>Erro ao carregar a pergunta.</Typography>}
      <section className={styles.answer}>
        <Typography style={{ whiteSpace: 'pre-wrap' }}>{answer}</Typography>
      </section>
      <WhatsApp />
    </section>
  );
};

export default Pergunta;
