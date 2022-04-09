import React from 'react';
import { faCalendarDays, faComments, faDollarSign, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header, Loader, Typography } from 'components/shared';
import { Shortcut } from 'components/Home';
import type { NextPage } from 'next';

import styles from './styles.module.scss';
import { useComunicationsList } from 'hooks/useComunicationsList';
import { ComunicationCard } from 'components/Home/ComunicationCard';
import { Shortcuts } from 'components/Home/Shortcuts';
import { ComunicationList } from 'components/Home/ComunicationList';

const Home: NextPage = () => {
  const { data: comunications, isLoading: isComunicationsLoading, isError: isComunicationsError } = useComunicationsList();

  if(isComunicationsLoading) {
    <Loader />
  }

  if(isComunicationsError) {
    <Typography>Erro ao carregar as notícias</Typography>
  }

  return (
    <main className={styles.container}>
      <Header />
      <section>
        <Typography variant='h2'>Atalhos</Typography>
        <Shortcuts />
      </section>
      <section>
        <Typography variant='h2'>Comunicados</Typography>
        <ComunicationList comunications={comunications} />
      </section>
    </main>
  );
};

export default Home;
