import { COMUNICATION_API } from "services/api";

interface IComunication {
  id: number;
  title: string;
  category: string;
  date: Date;
}

export class ComunicationService {
  static async getComunications(): Promise<IComunication[]> {
    try {
      const response = await fetch(`${COMUNICATION_API}/comunications`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
