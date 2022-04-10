import { Typography } from 'components/shared';
import React from 'react';
import { formatMoney } from 'utils';
import styles from './styles.module.scss';

export interface IDetail extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  type: string;
  amount: number;
  markerColor?: string;
}

export const Detail: React.FC<IDetail> = ({ name, type, amount, markerColor }) => (
  <li key={name} className={styles.content}>
    <div className={styles.infos}>
      {markerColor && <i className={styles.marker} style={{background: markerColor}} />}
      <div className={styles.texts}>
        <Typography variant={400}>{name}</Typography>
        <Typography variant={100}>{type}</Typography>
      </div>
    </div>
    <Typography variant={400}>{amount > 0 ? '+' : ''}{formatMoney(amount)}</Typography>
  </li>
);
