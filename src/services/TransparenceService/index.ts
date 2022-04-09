import { TRANSPARENCE_API } from "services/api";

export interface IMonthBalance {
  month: Date,
  value: number;
}

export interface ITransparenceReport {
  current_month: Date;
  total_balance: number;
  monthly_balance: number;
  previous_month_diff: number;
  previous_year_diff: number;
  historical_balance: IMonthBalance[];
}

export class TransparenceService {
  static async getReport(): Promise<ITransparenceReport> {
    try {
      const response = await fetch(`${TRANSPARENCE_API}/transparency_report`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const report: ITransparenceReport = await response.json();
      return {
        ...report,
        current_month: new Date(report?.current_month),
        historical_balance: report?.historical_balance.map((monthBalance: IMonthBalance) => { 
          return {
            ...monthBalance,
            month: new Date(monthBalance?.month)
          }
        })
      }
    } catch (error) {
      throw error;
    }
  }
}
