import { Typography } from 'components/shared';
import React from 'react';
import { formatMoney } from 'utils';
import styles from './styles.module.scss';

interface IDetailCard extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  type: string;
  amount: number;
  color: string;
}

export const DetailCard: React.FC<IDetailCard> = ({ name, type, amount, color }) => (
  <li key={name} className={styles.content}>
    <div className={styles.infos}>
      <i className={styles.marker} style={{background: color}} />
      <div className={styles.texts}>
        <Typography variant={400}>{name}</Typography>
        <Typography variant={100}>{type}</Typography>
      </div>
    </div>
    <Typography variant={400}>{amount > 0 ? '+' : ''}{formatMoney(amount)}</Typography>
  </li>
);
