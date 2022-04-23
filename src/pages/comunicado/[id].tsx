import { Loader, Typography, WhatsApp } from 'components/shared';
import { SectionHeader } from 'components/shared/SectionHeader';
import { useComunication } from 'hooks/useComunication';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

const Comunicado: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: comunication,
    isLoading: isLoadingComunication,
    isError: isErrorComunication,
  } = useComunication(id as string);

  const {
    title,
    content,
  } = comunication || {};

  return (
    <section className={styles.container}>
      <SectionHeader title={title || ''} />
      <div style={{marginTop: '1rem'}}>
        {isLoadingComunication && <Loader />}
        {isErrorComunication && <Typography>Erro ao carregar o comunicado.</Typography>}
      </div>
      {content &&  
        <section className={styles.comunication}>
          <Typography>
            {content}
          </Typography>
        </section>
      }
    </section>
  );
};

export default Comunicado;
