import {
  faExclamationTriangle,
  faScaleBalanced,
  faScrewdriverWrench,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Typography } from 'components/shared';
import { useRouter } from 'next/router';
import React from 'react';
import { formatFullDate } from 'utils';
import styles from './styles.module.scss';

interface IComunicationCard extends React.HTMLAttributes<HTMLDivElement> {
  identifier: number;
  title: string;
  date: Date;
  type: 'general' | 'rules' | 'maintenance';
}

export const ComunicationCard: React.FC<IComunicationCard> = ({
  identifier,
  title,
  date,
  type,
}) => {
  const router = useRouter();

  let icon: IconDefinition;

  switch (type) {
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
    <li
      key={identifier}
      className={styles.content}
      onClick={() => router.push(`comunicado/${identifier}`)}
    >
      <div className={styles.texts}>
        <Typography
          variant={400}
          asComponent="h1"
          color="white"
          className={styles.title}
        >
          {title}
        </Typography>
        <Typography
          variant={200}
          color="white"
          fontWeight={300}
          className={styles.title}
        >
          {formatFullDate(date)}
        </Typography>
      </div>
      <Button variant="text" color="white">
        LER
      </Button>
      <i className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </i>
    </li>
  );
};
