/*
*
* Notifications types
* make by phamthainb
*/
import { INotification } from 'containers/Layout/LoggedInLayout/Header/Bell/store/types';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreNotifications {
  data: INotification[];
  pageNumber: number;
  pageSize: number;
  total: number;
  shouldRefetch: boolean;
  unread: number;
}

export type ActionsNotifications = ActionType<typeof actions>;