import { BILL_API } from 'services/api';

export interface IBillDetail {
  name: string;
  type: string;
  amount: number;
}

export interface IBill {
  current_month: Date;
  due_date: Date;
  bill_amount: 950;
  status: 'open' | 'closed' | 'paid' | 'late';
  bar_code: string;
  pdf_url: string;
  details: IBillDetail[];
}

export class BillService {
  static async getBill(clientId: string): Promise<IBill> {
    try {
      const response = await fetch(`${BILL_API}/billing/${clientId}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const bill: IBill = await response.json();
      return {
        ...bill,
        current_month: new Date(bill?.current_month),
        due_date: new Date(bill?.due_date),
      };
    } catch (error) {
      throw error;
    }
  }
}
