import { faCalendarDays, faComments, faDollarSign, faMessage, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import { Header } from 'components/shared/Header';
import { Shortcut } from 'components/shared/Buttons/Shortcut';

import styles from './styles.module.scss';
import { Typography } from 'components/shared/Typography';

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <Header />
      <section>
        <Typography variant='h2'>Atalhos</Typography>
        <nav className={styles.shortcuts}>
          <Shortcut icon={<FontAwesomeIcon icon={faComments} />}>Contato</Shortcut>
          <Shortcut icon={<FontAwesomeIcon icon={faMoneyCheckDollar} />} color='pink'>Contas</Shortcut>
          <Shortcut icon={<FontAwesomeIcon icon={faDollarSign} />}>Transparência</Shortcut>
          <Shortcut icon={<FontAwesomeIcon icon={faCalendarDays} />} color='pink'>Agendamentos</Shortcut>
        </nav>
      </section>
      <section>
        <Typography variant='h2'>Comunicados</Typography>
        <ul className={styles.comunications}>
          <li>Example</li>
          <li>Example</li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
