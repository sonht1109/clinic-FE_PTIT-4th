/*
 *
 * Patient types
 * make by phamthainb
 */
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StorePatient {
  data: TPatient[];
  total: number;
  selectedRow: TPatient | null;
  shouldRefetch: boolean;
  search: {
    name: string;
  };
  paginate: {
    page: number;
    size: number;
  }
}

export type ActionsPatient = ActionType<typeof actions>;

export type TPatient = {
  address: string;
  birthDate: string;
  createdAt: string;
  id: number;
  name: string;
  nationalId: string;
  phone: string;
  updatedAt: string;
};
