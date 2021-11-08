/*
 *
 * Dashboard actions
 * make by phamthainb
 */
import * as types from './constants';
import { action } from 'typesafe-actions';
import { requestInterToken } from 'api/axios';
import API_URL from 'api/url';
import { handleError } from 'helpers';

export const getEvents =
  (pageNumber: number, pageSize: number) => (dispatch: any) => {
    requestInterToken({
      method: 'GET',
      url: API_URL.EVENTS.GET,
      params: {
        pageNumber,
        pageSize,
      },
    })
      .then(res => {
        if(res?.data) {
          dispatch(setEvents(res?.data?.data, res?.data?.total));
        }
      })
      .catch(err => {
        handleError(err);
      });
  };

export const setEvents = (events: [], total: number) =>
  action(types.SET_EVENTS, { events, total });

export const handleChangePage = (page: number) =>
  action(types.CHANGE_PAGE, page);

export const handleChangePageSize = (size: number) =>
  action(types.CHANGE_PAGE_SIZE, size);
