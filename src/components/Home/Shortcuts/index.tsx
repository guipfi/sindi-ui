import { faCalendarDays, faComments, faDollarSign, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Shortcut } from 'components/Home/Shortcut';
import styles from './styles.module.scss';

export const Shortcuts: React.FC = () => (
  <nav className={styles.shortcuts}>
    <Shortcut icon={<FontAwesomeIcon icon={faComments} />}>Contato</Shortcut>
    <Shortcut icon={<FontAwesomeIcon icon={faMoneyCheckDollar} />} color='pink'>Contas</Shortcut>
    <Shortcut icon={<FontAwesomeIcon icon={faDollarSign} />}>Transparência</Shortcut>
    <Shortcut icon={<FontAwesomeIcon icon={faCalendarDays} />} color='pink'>Agendamentos</Shortcut>
</nav>
);