/*
*
* Drug types
* make by phamthainb
*/
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreDrug {
  data: TDrug[];
  total: number;
  selectedRow: TDrug | null;
  shouldRefetch: boolean;
  search: {
    name: string;
  };
  paginate: {
    page: number;
    size: number;
  }
}

export type ActionsDrug = ActionType<typeof actions>;

export type TDrug = {
  id: number;
  name: string;
  price: number;
}