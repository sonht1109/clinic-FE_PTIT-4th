/*
*
* Doctor types
* make by phamthainb
*/
import { TCoreUser } from 'containers/App/store/types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreDoctor {
  data: TDoctor[];
  pageNumber: number;
  pageSize: number;
  total: number;
  status: string;
  keyword: string;
  selectedRow: TDoctor | null;
  shouldRefetch: boolean;
}

export type ActionsDoctor = ActionType<typeof actions>;

export type TDoctor = {
  username: string;
  literacy: string;
  experience: string;
  level: string;
  nationalId: string;
  phone: string;
  user: TCoreUser;
}