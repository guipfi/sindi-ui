import React from 'react';
import { Header, Loader, Typography } from 'components/shared';
import type { NextPage } from 'next';
import { useComunicationsList } from 'hooks/useComunicationsList';
import { Shortcuts } from 'components/Home/Shortcuts';
import { ComunicationList } from 'components/Home/ComunicationList';

import styles from './styles.module.scss';

const Home: NextPage = () => {
  const {
    data: comunications,
    isLoading: isComunicationsLoading,
    isError: isComunicationsError,
  } = useComunicationsList();

  return (
    <section className={styles.container}>
      <Header />
      <div>
        <Typography variant={700} asComponent="h2">
          Atalhos
        </Typography>
        <Shortcuts />
      </div>
      <div>
        <Typography variant={700} asComponent="h2">
          Comunicados
        </Typography>
        {isComunicationsLoading ? (
          <Loader />
        ) : (
          <ComunicationList comunications={comunications} />
        )}
        {isComunicationsError && (
          <Typography>Erro ao carregar as comunicações</Typography>
        )}
      </div>
    </section>
  );
};

export default Home;
