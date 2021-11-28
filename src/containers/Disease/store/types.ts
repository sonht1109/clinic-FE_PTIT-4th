/*
*
* Disease types
* make by phamthainb
*/
import { TDrug } from 'containers/Drug/store/types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreDisease {
  data: TDisease[];
  total: number;
  selectedRow: TDisease | null;
  shouldRefetch: boolean;
  search: {
    name: string;
  };
  paginate: {
    page: number;
    size: number;
  },
  drugs: TDrug[]
}

export type ActionsDisease = ActionType<typeof actions>;

export type TDisease = {
  description: string;
  drugs: TDrug[];
  id: number;
  name: string;
}