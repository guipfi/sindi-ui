import { faPieChart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Header, Loader, SectionTitle, Typography } from 'components/shared';
import { BalanceChart } from 'components/Transparence/BalanceChart';
import { useTransparenceReport } from 'hooks/useTransparenceReport';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { formatMoney, formatPercentage, months } from 'utils';

import styles from './styles.module.scss';

const Transparencia: NextPage = () => {

  const { 
    data: transparenceInfos, 
    isLoading: isLoadingTransparenceInfos, 
    isError: isErrorTransparenceInfos 
  } = useTransparenceReport();

  const {
    current_month,
    total_balance,
    monthly_balance,
    previous_month_diff,
    previous_year_diff,
    historical_balance,
  } = transparenceInfos || {};

  const router = useRouter();

  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.title}>
        <SectionTitle>Transparência</SectionTitle>
        <Typography variant={100} asComponent='small'>{months[current_month?.getMonth() ?? 0]}, {current_month?.getFullYear()}</Typography>
      </div>
      {isErrorTransparenceInfos && <Typography>Erro ao carregar as informações</Typography>}
      {isLoadingTransparenceInfos ? <Loader /> : (
        <>
          <div className={styles.balance}>
            <Typography variant={500} asComponent='h3'>Balanço total</Typography>
            <Typography variant={800}>{formatMoney(total_balance ?? 0)}</Typography>
          </div>
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
            <div className={styles.monthDiff}>
              <Typography variant={100}>
                {(previous_month_diff ?? 0) > 0 ? '+' : ''}{formatPercentage(previous_month_diff ?? 0)} 
                {' '}
                em relação ao mês anterior
              </Typography>
              <Typography variant={100}>
                {(previous_year_diff ?? 0) > 0 ? '+' : ''}{formatPercentage(previous_year_diff ?? 0)}
                {' '}
                em relação ao mesmo período no ano anterior
              </Typography>
            </div>
          </div>
          <div className={styles.historicalBalance}>
            <Typography>Balanço histórico</Typography>
            <div className={styles.chart}>
              <BalanceChart data={historical_balance ?? []} />
            </div>
          </div>
          <Button 
            variant='text' 
            icon={<FontAwesomeIcon icon={faPieChart} />} 
            style={{margin: '1rem auto'}}
            onClick={() => router.push('/transparencia/detalhes')}
          >
            Ver detalhamento
          </Button>
        </>
      )}
    </section>
  );
};

export default Transparencia;
