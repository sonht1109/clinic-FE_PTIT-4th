/*
 *
 * AdminPermission actions
 * make by phamthainb
 */
import * as types from './constants';
import { action } from 'typesafe-actions';
import { requestInterToken } from 'api/axios';
import API_URL from 'api/url';
import { handleError } from 'helpers';

export const getData =
  ({ pageNumber, pageSize }: { pageNumber: number; pageSize: number }) =>
  (dispatch: any) => {
    requestInterToken({
      method: 'GET',
      url: API_URL.PERMISSION.GET_GROUP,
      params: {
        pageNumber,
        pageSize,
      },
    })
      .then(res => {
        if (res?.data) {
          dispatch(setData(res?.data?.data, res?.data?.total));
        }
      })
      .catch(err => {
        handleError(err);
      });
  };

export const getPermissions = () => (dispatch: any) => {
  requestInterToken({
    method: 'GET',
    url: API_URL.PERMISSION.GET_PERMISSION,
  })
    .then(res => {
      if (res?.data) {
        dispatch(setPermissions(res?.data));
      }
    })
    .catch(err => {
      handleError(err);
    });
};

export const setData = (data: [], total: number) =>
  action(types.SET_DATA, { data, total });

export const setPermissions = (data: []) =>
  action(types.SET_PERMISSIONS, data);

export const handleChangePage = (page: number) =>
  action(types.CHANGE_PAGE, page);

export const handleChangePageSize = (size: number) =>
  action(types.CHANGE_PAGE_SIZE, size);

export const handleSearch = (status: string, keyword: string) =>
  action(types.SEARCH, { status, keyword });

export const handleSelectRow = (selected: any | null) =>
  action(types.SELECT_ROW, selected);

export const handleRefetch = () => action(types.REFETCH);
