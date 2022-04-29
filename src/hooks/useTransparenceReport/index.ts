import { useQuery, UseQueryResult } from 'react-query';
import {
  ITransparenceReport,
  TransparenceService,
} from 'services/TransparenceService';

export function useTransparenceReport(): UseQueryResult<ITransparenceReport> {
  return useQuery('transparenceReport', TransparenceService.getReport);
}
