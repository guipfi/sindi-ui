import { useQuery, UseQueryResult } from 'react-query';
import {
  ITransparenceReportDetails,
  TransparenceService,
} from 'services/TransparenceService';

export function useTransparenceReportDetails(): UseQueryResult<ITransparenceReportDetails> {
  return useQuery(
    'transparenceReportDetails',
    TransparenceService.getReportDetails
  );
}
