import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '../Typography';
import { useRouter } from 'next/router';

interface ISectionTitle extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'white' | 'black';
  size?: 'default' | 'small';
  backUrl?: string;
}

export const SectionTitle: React.FC<ISectionTitle> = ({
  children,
  color = 'black',
  size = 'default',
  backUrl = '/',
}) => {
  const router = useRouter();

  return (
    <nav
      className={`${styles.title} ${styles[size]}`}
      onClick={() => router.push(backUrl)}
    >
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={`${styles.icon} ${styles[color]}`}
      />
      <Typography
        variant={size === 'default' ? 700 : 600}
        asComponent="h1"
        color={color}
      >
        {children}
      </Typography>
    </nav>
  );
};
