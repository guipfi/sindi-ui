import { faCalendarDays, faComments, faDollarSign, faMessage, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import { Button } from 'components/shared/Buttons/Button';
import { Shortcut } from 'components/shared/Buttons/Shortcut';

import styles from './styles.module.scss';
import { Typography } from 'components/shared/Typography';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Typography variant='h1'>Atalhos</Typography>
      <ul className={styles.shortcuts}>
        <Shortcut icon={<FontAwesomeIcon icon={faComments} />}>Contato</Shortcut>
        <Shortcut icon={<FontAwesomeIcon icon={faMoneyCheckDollar} />} color='pink'>Contas</Shortcut>
        <Shortcut icon={<FontAwesomeIcon icon={faDollarSign} />}>Transparência</Shortcut>
        <Shortcut icon={<FontAwesomeIcon icon={faCalendarDays} />} color='pink'>Agendamentos</Shortcut>
      </ul>
      <Typography variant='h1'>Comunicados</Typography>
      <Button>Button</Button>
    </div>
  );
};

export default Home;
