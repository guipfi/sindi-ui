import { useQuery, UseQueryResult } from 'react-query';
import {
  ComunicationService,
  IComunication,
} from 'services/ComunicationService';

export function useComunicationsList(): UseQueryResult<IComunication[]> {
  return useQuery('comunications', ComunicationService.getComunications);
}
