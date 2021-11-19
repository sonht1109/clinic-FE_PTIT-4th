/*
 *
 * App types
 *
 */
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AppStore = {
  loading: boolean;
  lang: AppLanguage;
  isSidebarOpen: boolean;
  info: TCoreUser | null;
};

export type ActionsApp = ActionType<typeof actions>;

export type AppLanguage = 'vi' | 'en';

export type TCoreUser = {
  avatarUrl: string;
  createdAt: string;
  email: string;
  id: number;
  role: Role;
};

export type Role = {
  id: number;
  name: string;
  value: string;
}
