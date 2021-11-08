/*
 *
 * AdminEventManagement types
 * make by phamthainb
 */
import { ISelect } from 'configs/types';
import { ICoreEvent } from 'containers/Admin/Dashboard/store/types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreAdminEventManagement {
  data: IEvent[];
  pageNumber: number;
  pageSize: number;
  total: number;
  status: string;
  keyword: string;
  selectedRow: IEvent | null;
  shouldRefetch: boolean;
}

export type ActionsAdminEventManagement = ActionType<typeof actions>;

export interface ISearchData {
  keyword: string;
  status: ISelect;
}

export interface IEvent extends ICoreEvent {
  code: string;
  blockchainPublished: boolean;
}

export interface IPublishEventInput {
  event: string;
  publishEvent: boolean;
  publishContestant: boolean;
}
