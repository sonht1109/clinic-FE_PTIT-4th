/*
*
* UserAccountManagement types
* make by phamthainb
*/
import { ICoreAdmin, ICoreEventCreator } from 'configs/types';
import { EventStatusEnum } from 'enum';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreUserAccountManagement {
  data: any[];
  pageNumber: number;
  pageSize: number;
  total: number;
  status: string;
  keyword: string;
  selectedRow: IEvent | null;
  shouldRefetch: boolean;
}

export interface ISearchData {
  keyword: string;
}

export interface ICore {
  name: string;
  id: string;
  startTime: string;
  endTime: string;
  kyc: boolean;
  public: boolean;
  status: EventStatusEnum;
  admin: ICoreAdmin;
  creator: ICoreEventCreator;
}
export interface IEvent extends ICore {
  code: string;
  blockchainPublished: boolean;
  email: string;
  isKyc: number;
  isLocked: number;
  phone: string;
  totalEventCreated: string;
  totalEventJoined: string;
}

export type ActionsUserAccountManagement = ActionType<typeof actions>;
