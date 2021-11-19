/*
 *
 * Doctor actions
 * make by phamthainb
 */
import * as types from './constants';
import { action } from 'typesafe-actions';
import { requestInterToken } from 'api/axios';
import API_URL from 'api/url';

export const setData = (data: [], total: number) =>
  action(types.SET_DATA, { data, total });

export const handleChangePage = (page: number) =>
  action(types.CHANGE_PAGE, page);

export const handleChangePageSize = (size: number) =>
  action(types.CHANGE_PAGE_SIZE, size);

export const getData = () => (dispatch: any) => {
  requestInterToken({method: "GET", url: API_URL.DOCTOR.DEFAULT})
}