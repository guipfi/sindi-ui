import { faExclamationTriangle, faScaleBalanced, faScrewdriverWrench, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Typography } from 'components/shared';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.scss';

interface IComunicationCard extends React.HTMLAttributes<HTMLDivElement> {
  identifier: number;
  title: string;
  date: Date;
  type: 'general' | 'rules' | 'maintenance';
}

export const ComunicationCard: React.FC<IComunicationCard> = ({ identifier, title, date, type }) => {
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

  function formatDate(date: Date) {
    const dayTexts = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    return `${dayTexts[date.getDay()]}, ${date.getDate().toString().padStart(2, '0')} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
  }

  return (
    <li key={identifier} className={styles.content} onClick={() => router.push(`comunicados/${identifier}`)}>
      <div className={styles.texts}>
        <Typography variant='h3' color='white' className={styles.title}>{title}</Typography>
        <Typography variant='small' color='white' fontWeight={300} className={styles.title}>{formatDate(date)}</Typography>
      </div>
      <Button variant='text' color='white'>LER</Button>
      <i className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </i>
    </li>
  );
};
