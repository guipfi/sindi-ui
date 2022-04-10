import React from 'react';
import { Detail, IDetail } from 'components/shared/Detail';

import { chartColors } from '../../Transparence/Details/BalanceDistribuitionChart';

import styles from './styles.module.scss';

type IDetailsList = DefaultDetails | DetailsWithMarker;

type DetailsWithMarker = {
  details: IDetail[] | undefined;
  types: string[];
  hasMarker: boolean;
}

type DefaultDetails = {
  details: IDetail[] | undefined;
  types?: never;
  hasMarker?: never;
}

export const DetailsList: React.FC<IDetailsList> = ({ details, types, hasMarker = false }) => (
  <ul className={styles.comunications}>
    {details?.map(({name ,type, amount}, index) => 
      <Detail
        name={name}
        type={type}
        amount={amount}
        color={hasMarker ? chartColors[types?.findIndex(value => value === type) ?? 0] : undefined}
      />
    )}
  </ul>
);
