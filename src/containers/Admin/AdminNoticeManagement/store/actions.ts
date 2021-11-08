/*
 *
 * AdminNoticeManagement actions
 * make by phamthainb
 */
import { action } from 'typesafe-actions';
import * as types from './constants';

export const getNotify = (data: any, total: number) => {
  return {
    type: types.GET,
    payload: {
      data: data,
      total: total,
    },
  };
};

export const setSearch = (keyword: string) => {
  return {
    type: types.SEARCH,
    payload: keyword,
  };
};
export const handleChangePageSize = (size: number) =>
  action(types.CHANGE_PAGE_SIZE, size);
export const handleChangePage = (page: number) =>
  action(types.CHANGE_PAGE, page);
