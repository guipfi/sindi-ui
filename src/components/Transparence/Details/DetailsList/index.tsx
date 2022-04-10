import React from 'react';
import { ISpending } from 'services/TransparenceService';
import { DetailCard } from 'components/Transparence/Details';

import styles from './styles.module.scss';
import { chartColors } from '../BalanceDistribuitionChart';

interface IDetailsList {
  details: ISpending[] | undefined;
  types: string[];
}

export const DetailsList: React.FC<IDetailsList> = ({ details, types }) => (
  <ul className={styles.comunications}>
    {details?.map(({name ,type, amount}, index) => 
      <DetailCard 
        name={name}
        type={type}
        amount={amount}
        color={chartColors[types.findIndex(value => value === type)]}
      />
    )}
  </ul>
);
