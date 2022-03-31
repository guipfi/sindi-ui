interface IUser {
  name: string;
}

export class UserService {
  static async getUser(): Promise<IUser> {
    await new Promise(r => setTimeout(r, 2000));
    return {
      name: "João Gomez"
    };
  }
}