/*
 *
 * App actions
 *
 */
import * as types from './constants';
import { AppLanguage } from './types';
import { action } from 'typesafe-actions';

export const changeLanguage = (val: AppLanguage) => action(types.LANGUAGE, val);

export const changeLoading = (val: boolean) => action(types.LOADING, val);

export const toggleSidebar = (val?: boolean) =>
  action(types.TOGGLE_SIDEBAR, val);

export const setInfo = (info: any) => action(types.SET_INFO, info);
