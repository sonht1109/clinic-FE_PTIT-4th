/*
 *
 * Notifications actions
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
      url: API_URL.VIEW_NOTIFICATION.GET,
      params: {
        page: pageNumber,
        sizePerPage: pageSize,
      },
    })
      .then(res => {
        if (res?.data) {
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

export const setData = (data: [], total: number, unread: number) =>
  action(types.SET_DATA, { data, total, unread });

export const handleChangePage = (page: number) =>
  action(types.CHANGE_PAGE, page);

export const handleChangePageSize = (size: number) =>
  action(types.CHANGE_PAGE_SIZE, size);

export const handleRefetch = () => action(types.REFETCH);

export const handleMarkAsRead = (id: string) => (dispatch: any) => {
  requestInterToken({method: "POST", url: API_URL.VIEW_NOTIFICATION.CONFIRM_READ(id)})
  .then(res => {
    console.log(res.data);
    if(res.data) {
      dispatch(handleRefetch());
    }
  })
  .catch(err => {
    handleError(err);
  })
}