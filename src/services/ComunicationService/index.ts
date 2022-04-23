import { COMUNICATION_API } from "services/api";

export interface IComunication {
  key: number;
  title: string;
  type: 'general' | 'rules' | 'maintenance';
  content: string;
  date: Date;
}

export interface IFaq {
  key: string;
  question: string;
}

export interface IFaqQuestion {
  key: string;
  question: string;
  answer: string;
}

export class ComunicationService {
  static async getComunications(): Promise<IComunication[]> {
    try {
      const response = await fetch(`${COMUNICATION_API}/news`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data?.map((comunication: IComunication) => {
        return {
          ...comunication,
          date: new Date(comunication?.date)
        }
      });
    } catch (error) {
      throw error;
    }
  }

  static async getComunication(id: string): Promise<IComunication> {
    try {
      const response = await fetch(`${COMUNICATION_API}/news/${id}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return {
        ...data,
        date: new Date(data?.date) 
      }  
    } catch (error) {
      throw error;
    }
  }

  static async getFaq(): Promise<IFaq[]> {
    try {
      const response = await fetch(`${COMUNICATION_API}/faq`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getFaqQuestion(id: string): Promise<IFaqQuestion> {
    try {
      const response = await fetch(`${COMUNICATION_API}/faq/${id}`);
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
