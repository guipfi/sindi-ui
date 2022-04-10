import styles from './styles.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

interface IHeader extends React.HTMLAttributes<HTMLDivElement> {
  background?: 'white' | 'black' | 'pink';
}

export const Header: React.FC<IHeader> = ({ background = 'white', ...rest }) => {

  const router = useRouter();

  let logoUrl = '/images/logo-';

  switch(background) {
    case 'black':
      logoUrl += 'wp.svg';
      break;
    case 'pink':
      logoUrl += 'wb.svg';
      break;
    default:
      logoUrl += 'pb.svg';
  }

  return (
    <header className={`${styles.header} ${styles[background]}`}>
      <Image 
        src={logoUrl} 
        width={84} 
        height={53}
        onClick={() => router.push('/')}
        style={{cursor: 'pointer'}}
      />
      <FontAwesomeIcon className={styles.icon} icon={faBell} onClick={() => alert('Funcionalidade em desenvolvimento')} />
    </header>
  );
}
