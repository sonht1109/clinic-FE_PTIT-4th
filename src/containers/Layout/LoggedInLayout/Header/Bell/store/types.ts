/*
 *
 * App types
 *
 */
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type BellStore = {
  data: INotification[];
  pageSize: number;
  total: number;
  pageNumber: number;
  unread: number;
};

export type ActionsBell = ActionType<typeof actions>;

export interface INotification {
  content: string;
  id: string;
  isRead: boolean;
  receiver: string;
  status: number;
  title: string;
}
