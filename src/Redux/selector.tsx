import { createSelector } from 'reselect';
import { Iaccount } from '../firebase/Account';
import { IEquip } from '../firebase/equip';
import { IRole } from '../firebase/ManagerRole';
import { Iservice } from '../firebase/Service';
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
interface IService {
  service: {
    dataService: [];
    dataServiceAdded: Iservice;
    dataServiceUpdated: Iservice;
    active: string;
    selectedDetail: string;
  };
}
interface IRandom {
  random: {
    dataRandom: [];
    dataRandomAdded: {};
    dataRandomUpdated: {};
    nameService: string;
    selectedService: string;
    selectedStatus: string;
    selectedOrigin: string;
    mode: boolean;
  };
}
export interface IReport {
  report: {
    id: boolean;
    nameService: boolean;
    fromDate: boolean;
    status: boolean;
    origin: boolean;
    idValue: string;
    nameServiceValue: string;
    fromDateValue: string;
    statusValue: string;
    originValue: string;
  };
}
interface IManagerUser {
  managerUser: {
    dataManagerUser: [];
  };
}
interface IManagerRole {
  managerRole: {
    dataManagerRole: [];
    addManagerRole: IRole;
    updateManagerRole: IRole;
  };
}
export const userSelector = (state: IUser) => state.user;
export const EquipSelector = (state: Equip) => state.equipment;
export const PaginationSelector = (state: Pagination) => state.pagination;
export const AccountSelector = (state: IAccount) => state.account;
export const ServiceSelector = (state: IService) => state.service;
export const RandomSelector = (state: IRandom) => state.random;
export const ReportSelector = (state: IReport) => state.report;
export const ManagerUserSelector = (state: IManagerUser) => state.managerUser;
export const ManagerRoleSelector = (state: IManagerRole) => state.managerRole;
