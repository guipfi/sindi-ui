import { COMUNICATION_API } from "services/api";

export interface IComunication {
  key: number;
  title: string;
  type: 'general' | 'rules' | 'maintenance';
  date: Date;
}

export class ComunicationService {
  static async getComunications(): Promise<IComunication[]> {
    try {
      const response = await fetch(`${COMUNICATION_API}/news`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data.map((comunication: IComunication) => {
        return {
          ...comunication,
          date: new Date(comunication.date)
        }
      });
    } catch (error) {
      throw error;
    }
  }
}
