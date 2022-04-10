import { Header, Loader, SectionTitle, Typography } from 'components/shared';
import { DetailsList } from 'components/Transparence/Details';
import { BalanceDistribuitionChart } from 'components/Transparence/Details/BalanceDistribuitionChart';
import { useTransparenceReportDetails } from 'hooks/useTransparenceReportDetails';
import type { NextPage } from 'next';
import { formatMoney, months } from 'utils';

import styles from './styles.module.scss';

const Detalhes: NextPage = () => {

  const { 
    data: transparenceDetails, 
    isLoading: isLoadingTransparenceDetails, 
    isError: isErrorTransparenceDetails 
  } = useTransparenceReportDetails();

  const {
    current_month,
    monthly_balance,
    monthly_income,
    monthly_outcome,
    spendings,
    relative_spendings_per_type,
  } = transparenceDetails || {};

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.title}>
        <SectionTitle backUrl='/transparencia'>Detalhes</SectionTitle>
        <Typography variant={100} asComponent='small'>{months[current_month?.getMonth() ?? 0]}, {current_month?.getFullYear()}</Typography>
      </div>
      {isErrorTransparenceDetails && <Typography>Erro ao carregar as informações</Typography>}
      {isLoadingTransparenceDetails ? <Loader /> : (
        <>
          <div className={styles.balanceInfos}>
            <div className={styles.monthBalance}>
              <Typography>
                Balanço do mês:
              </Typography>
              <Typography 
                variant={500} 
                color={(monthly_balance ?? 0) > 0 ? 'green' : 'red'}
              >
                {(monthly_balance ?? 0) > 0 ? '+' : ''}{formatMoney(monthly_balance ?? 0)}
              </Typography>
            </div>
            <div className={styles.monthIncomeAndOutcome}>
              <div className={styles.monthInfo}>
                <Typography variant={100}>
                  Arrecadado no mês
                </Typography>
                <Typography variant={400}>
                  +{formatMoney(monthly_income ?? 0)}
                </Typography>
              </div>
              <div className={styles.monthInfo}>
                <Typography variant={100}>
                  Gasto no mês
                </Typography>
                <Typography variant={400}>
                  {formatMoney(monthly_outcome ?? 0)}
                </Typography>
              </div>
            </div>
          </div>
          <div className={styles.selector}>
            <Typography className={styles.selected} variant={400} color='white'>Gastos</Typography>
          </div>
          <div className={styles.incomeDetails}>
            <div className={styles.chart}>
              <BalanceDistribuitionChart data={relative_spendings_per_type ?? []} />
            </div>
            <DetailsList details={spendings} types={relative_spendings_per_type?.map(item => item.type) ?? []} />
          </div>
        </>
      )}
    </div>
  );
};

export default Detalhes;
