/*
 *
 * App types
 *
 */
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { IAvailablePermission, PermissionOption } from 'containers/Admin/AdminPermission/store/types';

export type AppStore = {
  loading: boolean;
  lang: AppLanguage;
  isSidebarOpen: boolean;
  info: IUser | null;
};

export type ActionsApp = ActionType<typeof actions>;

export type AppLanguage = 'vi' | 'en';

export type TCoreUser = {
  id: string;
  avatar: string;
  name: string;
  phone: string;
  type: 'admin' | 'user';
  isSuperAdmin: boolean;
  isKyc: boolean;
  isLocked: boolean;
  isTwoFa: boolean;
  secret: string;
};

interface IOptionInUserPermission extends PermissionOption {
  id: string;
  permission: IAvailablePermission;
}

export interface IUser extends TCoreUser {
  groupPermission: {
    id: string;
    name: string;
    status: 0 | 1;
    description: string;
    options: IOptionInUserPermission[];
  };
}
