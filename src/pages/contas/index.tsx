import { faBarcode, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, DetailsList, Loader, SectionTitle, Typography } from 'components/shared';
import { useBill } from 'hooks/useBill';
import type { NextPage } from 'next';
import { formatMoney, getLocalStorageValue, months } from 'utils';

import styles from './styles.module.scss';

const Contas: NextPage = () => {

  const userId = getLocalStorageValue('userId');

  const { data: bill, isLoading: isBillLoading, isError: isBillError } = useBill(userId);

  const {
    bill_amount,
    status,
    due_date,
    details,
    bar_code,
    pdf_url
  } = bill || {};

  function getStatusText() {
    switch(status) {
      case 'open':
        return 'Fatura aberta';
      case 'closed':
        return 'Fatura fechada';
      case 'closed':
        return 'Fatura em atraso';
      case 'paid':
        return 'Fatura paga';
    }
  }

  return (
    <section className={styles.container}>
      <SectionTitle>Minhas contas</SectionTitle>
      {isBillLoading ? <Loader /> : isBillError || !bill ? <Typography>Sem fatura para exibir</Typography> : (
        <>
          <div className={styles.billInfos}>
            <div className={styles.billStatus}>
              <i className={`${styles.marker} ${styles[status === 'open' || 'paid' ? 'green' : 'red']}`} />
              <Typography variant={100}>
                {getStatusText()}
              </Typography>
            </div>
            <Typography variant={800}>{formatMoney(bill_amount ?? 0)}</Typography>
            <Typography variant={400}>Vence em {due_date?.getDate()} de {months[due_date?.getMonth() ?? 0]}</Typography>
          </div>
          <i className={styles.separator} />
          <DetailsList details={details} />
          <div className={styles.billInfos}>
            <Button 
              icon={<FontAwesomeIcon icon={faFileInvoiceDollar}/>} 
              fullWidth={true}
              onClick={() => open(pdf_url, "_blank")}
            >
              Abrir fatura em PDF
            </Button>
            <Button 
              variant='outlined' 
              icon={<FontAwesomeIcon icon={faBarcode}/>}
              onClick={() => {
                navigator.clipboard.writeText(bar_code || '');
                alert('Código de barras copiado com sucesso');
              }}
              fullWidth={true}
            >
              Copiar código de barras
            </Button>
          </div>
          <div className={styles.billInfos}>
            <Typography variant={200}>Código de barras</Typography>
            <Typography variant={100}>{bar_code}</Typography>
          </div>
        </>
      )}
    </section>
  );
};

export default Contas;
