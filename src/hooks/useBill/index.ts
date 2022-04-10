import { useQuery, UseQueryResult } from 'react-query';
import { BillService, IBill } from 'services/BillService';

export function useBill(userId: string): UseQueryResult<IBill> {
  return useQuery(['bill', userId], () => BillService.getBill(userId), { enabled: !!userId });
}
