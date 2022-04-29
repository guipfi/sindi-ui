import { useQuery, UseQueryResult } from 'react-query';
import {
  ComunicationService,
  IFaqQuestion,
} from 'services/ComunicationService';

export function useFaqQuestion(id: string): UseQueryResult<IFaqQuestion> {
  return useQuery(['faq', id], () => ComunicationService.getFaqQuestion(id), {
    enabled: !!id,
  });
}
