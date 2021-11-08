/*
 *
 * Dashboard types
 * make by phamthainb
 */
import { ICoreAdmin, ICoreEventCreator, ICoreUser } from 'configs/types';
import { EventStatusEnum } from 'enum';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreDashboard {
  events: ICoreEvent[];
  total: number;
  pageNumber: number;
  pageSize: number;
}

export type ActionsDashboard = ActionType<typeof actions>;

export interface ICoreEvent {
  name: string;
  id: string;
  startTime: string;
  endTime: string;
  kyc: boolean;
  public: boolean;
  status: EventStatusEnum;
  admin: ICoreAdmin;
  creator: ICoreEventCreator;
  user: ICoreUser;
}
