/*
 *
 * App actions
 *
 */
import * as types from './constants';
import { action } from 'typesafe-actions';
import { requestToken } from 'api/axios';
import API_URL from 'api/url';
import { handleError } from 'helpers';

export const setData = (data: [], total: number, unread: number) =>
  action(types.SET_DATA, {
    data,
    total,
    unread,
  });

export const handleChangePage = (page: number) =>
  action(types.CHANGE_PAGE, page);

export const handleChangePageSize = (size: number) =>
  action(types.CHANGE_PAGE_SIZE, size);

export const getData =
  (pageSize: number, pageNumber: number) => (dispatch: any) => {
    requestToken({
      method: 'GET',
      url: API_URL.VIEW_NOTIFICATION.GET,
      params: {
        page: pageNumber,
        sizePerPage: pageSize,
      },
    })
      .then(res => {
        if (res?.data?.data && res?.data?.meta) {
          dispatch(
            setData(
              res?.data?.data,
              res?.data?.meta?.itemCount,
              res?.data?.totalUnread,
            ),
          );
        }
      })
      .catch(err => {
        handleError(err);
      });
  };
