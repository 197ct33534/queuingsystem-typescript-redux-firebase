import { createSelector } from 'reselect';
import { Iaccount } from '../firebase/Account';
import { IEquip } from '../firebase/equip';
interface IUser {
  user: {
    isLogginSucc: boolean;
    idAcount: string;
    isLogginErr: boolean;
    forgotPass: boolean;
    IDemailAccount: string;
  };
}
interface Equip {
  equipment: {
    dataEquip: [];
    dataEquipAdded: IEquip;
    dataEquipUpdated: IEquip;
    idDataEquipRemoved: string;
    selectedActive: string;
    selectedConnect: string;
  };
}

interface Pagination {
  pagination: {
    pageNumberLimit: number;
    maxPageNumberLimit: number;
    minPageNumberLimit: number;
    numRowInPage: number;
    currentPerPage: number;
  };
}
interface IAccount {
  account: {
    dataAccount: Iaccount[];
    dataAccountAdded: Iaccount;
    dataAccountUpdated: Iaccount;
    active: string;
  };
}
export const userSelector = (state: IUser) => state.user;
export const EquipSelector = (state: Equip) => state.equipment;
export const PaginationSelector = (state: Pagination) => state.pagination;
export const AccountSelector = (state: IAccount) => state.account;
