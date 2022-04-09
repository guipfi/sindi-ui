import { faExclamationTriangle, faScaleBalanced, faScrewdriverWrench, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Loader, Typography } from 'components/shared';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { formatFullDate } from 'utils';
import styles from './styles.module.scss';

interface IComunicationCard extends React.HTMLAttributes<HTMLDivElement> {
  identifier: number;
  title: string;
  date: Date;
  type: 'general' | 'rules' | 'maintenance';
}

export const ComunicationCard: React.FC<IComunicationCard> = ({ identifier, title, date, type }) => {
  const [isLoadingRoute, setIsLoadingRoute] = useState<boolean>(false);
  const router = useRouter();

  let icon: IconDefinition;

  switch(type) {
    case 'general':
      icon = faExclamationTriangle;
      break;
    case 'maintenance':
      icon = faScrewdriverWrench;
      break;
    default:
      icon = faScaleBalanced;
  }

  return (
    <li key={identifier} className={styles.content} onClick={() => router.push(`comunicados/${identifier}`)}>
      <div className={styles.texts}>
        <Typography variant={400} asComponent='h1' color='white' className={styles.title}>{title}</Typography>
        <Typography variant={200} color='white' fontWeight={300} className={styles.title}>{formatFullDate(date)}</Typography>
      </div>
      {isLoadingRoute ? <Loader /> : <Button variant='text' color='white'>LER</Button>}
      <i className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </i>
    </li>
  );
};
