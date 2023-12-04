export interface IUser {
    id?: number;
    name?: string;
    phone?: number;
    email?: string;
    username?: string;
    password?: string;
}


export interface IUserRegister {
    id?: number;
    name?: string;
    phone?: string;
    email?: string;
    username?: string;
    password?: string;
  }

export interface IUserLogin {
    id?: number;
    username?: string;
    password?: string;
  }
