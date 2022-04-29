import { useQuery, UseQueryResult } from 'react-query';
import {
  ComunicationService,
  IComunication,
} from 'services/ComunicationService';

export function useComunication(id: string): UseQueryResult<IComunication> {
  return useQuery(
    ['comunication', id],
    () => ComunicationService.getComunication(id),
    { enabled: !!id }
  );
}
