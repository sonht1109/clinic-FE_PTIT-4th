/*
 *
 * AdminPermission types
 * make by phamthainb
 */
import { PermOptionEnum } from 'enum';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreAdminPermission {
  data: IGroupPermission[];
  pageNumber: number;
  pageSize: number;
  total: number;
  selectedRow: IGroupPermission | null;
  shouldRefetch: boolean;
  permissions: IAvailablePermission[];
}

export type ActionsAdminPermission = ActionType<typeof actions>;

export interface IGroupPermission {
  id: string;
  description?: string;
  for: string;
  status: 0 | 1;
  name: string;
  permissions: IPermission[];
}

export interface IPermission extends IAvailablePermission {
  id: string;
  code: string;
  description?: string;
  name: string;
  options: IPermissionOption[];
}

export interface IAvailablePermission {
  id: string;
  code: string;
  description?: string;
  name: string;
}

interface IPermissionOption extends PermissionOption {
  id: string;
}

// type is unique, but interface is not
export type PermissionOption = {
  [key in PermOptionEnum]: boolean;
}
