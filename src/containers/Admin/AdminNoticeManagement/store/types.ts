/*
 *
 * AdminNoticeManagement types
 * make by phamthainb
 */
import { Pagination } from 'configs/types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreAdminNoticeManagement {
  data: any;
  total: number;
  pagination: Pagination;
  search: {
    status: string;
    keyword: string;
  };
}

export type ActionsAdminNoticeManagement = ActionType<typeof actions>;
