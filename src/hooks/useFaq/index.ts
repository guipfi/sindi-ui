import { useQuery, UseQueryResult } from 'react-query';
import {
  ComunicationService,
  IFaq,
} from 'services/ComunicationService';

export function useFaq(): UseQueryResult<IFaq[]> {
  return useQuery('faq', ComunicationService.getFaq);
}
