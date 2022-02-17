import { createSelector } from 'reselect';
interface IUser {
  user: {
    isLogginSucc: boolean;
    idAcount: string;
    isLogginErr: boolean;
    forgotPass: boolean;
    IDemailAccount: string;
  };
}
export const userSelector = (state: IUser) => state.user;
