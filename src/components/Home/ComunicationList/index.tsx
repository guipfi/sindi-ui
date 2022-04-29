import React from 'react';
import { IComunication } from 'services/ComunicationService';
import { ComunicationCard } from 'components/Home/ComunicationCard';
import styles from './styles.module.scss';

interface IComunicationList {
  comunications: IComunication[] | undefined;
}

export const ComunicationList: React.FC<IComunicationList> = ({
  comunications,
}) => (
  <ul className={styles.comunications}>
    {comunications?.map(({ key, title, type, date }) => (
      <ComunicationCard
        key={key}
        identifier={key}
        title={title}
        type={type}
        date={date}
      />
    ))}
  </ul>
);
