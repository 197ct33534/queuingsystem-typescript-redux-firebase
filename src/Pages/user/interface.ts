export interface IUserLogin {
  forgot?: boolean;
  restpass?: boolean;
}

export interface IFormLogin {
  account?: boolean;
  password?: boolean;
  email?: boolean;
  resetpass?: boolean;
}

export interface IUserPicture {
  pic: string;
  tittle?: string;
}
export interface IAccount {
  name: string;
  pass: string;
  fullname: string;
  job: string;
  phone: string;
  email: string;
}
export interface ILogin extends IAccount {
  id: string;
}
