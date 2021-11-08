/*
*
* AdministrationManagement types
* make by phamthainb
*/
import { ICoreAdmin, ICoreEventCreator, ISelect } from 'configs/types';
import { IUser } from 'containers/App/store/types';
import { EventStatusEnum } from 'enum';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreAdministrationManagement {
  data: any[];
  pageNumber: number;
  pageSize: number;
  total: number;
  status: string;
  keyword: string;
  selectedRow: IUser | null;
  shouldRefetch: boolean;
}

export interface ISearchData {
  keyword: string;
}

export type ActionsAdministrationManagement = ActionType<typeof actions>;

export type DataSubmit = {
  name: string;
  password: string;
  confirmPassword: string;
  phone: string;
  groupPermission: ISelect;
}