/*
*
* Nurse types
* make by phamthainb
*/
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreNurse {
  data: TNurse[];
  pageNumber: number;
  pageSize: number;
  total: number;
  status: string;
  keyword: string;
  selectedRow: TNurse | null;
  shouldRefetch: boolean;
}

export type ActionsNurse = ActionType<typeof actions>;

export type TNurse = any;