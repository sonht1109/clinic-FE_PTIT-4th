/*
 *
 * AdminEventManagement actions
 * make by phamthainb
 */
import * as types from './constants';
import { action } from 'typesafe-actions';
import { requestInterToken } from 'api/axios';
import API_URL from 'api/url';
import { handleError } from 'helpers';
import { IEvent, IPublishEventInput } from './types';
import { EventActionEnum } from 'enum/event.enum';
import { defaultOption } from 'configs';

export const getData =
  ({
    pageNumber,
    pageSize,
    status,
    keyword,
  }: {
    pageNumber: number;
    pageSize: number;
    status: string;
    keyword: string;
  }) =>
  (dispatch: any) => {
    requestInterToken({
      method: 'GET',
      url: API_URL.EVENTS.GET,
      params: {
        pageNumber,
        pageSize,
        status: status !== defaultOption.value ? status : '',
        keyword,
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

export const setData = (data: [], total: number) =>
  action(types.SET_DATA, { data, total });

export const handleChangePage = (page: number) =>
  action(types.CHANGE_PAGE, page);

export const handleChangePageSize = (size: number) =>
  action(types.CHANGE_PAGE_SIZE, size);

export const handleSearch = (status: string, keyword: string) =>
  action(types.SEARCH, { status, keyword });

export const handleSelectRow = (selected: IEvent | null) =>
  action(types.SELECT_ROW, selected);

export const handleRefetch = () => action(types.REFETCH);

export const handleEventAction =
  (type: EventActionEnum, id: string) => (dispatch: any) => {
    let apiUrl = '';
    switch (type) {
      case EventActionEnum['LOCK']:
        apiUrl = API_URL.EVENTS.LOCK(id);
        break;
      case EventActionEnum['UN_LOCK']:
        apiUrl = API_URL.EVENTS.UN_LOCK(id);
        break;
      case EventActionEnum['VERIFY']:
        apiUrl = API_URL.EVENTS.VERIFY(id);
        break;
      case EventActionEnum['DELETE']:
        apiUrl = API_URL.EVENTS.DETELE(id);
        break;
    }

    requestInterToken({
      method: type === EventActionEnum['DELETE'] ? 'DELETE' : 'POST',
      url: apiUrl,
    })
      .then(res => {
        if (res.data) {
          dispatch(handleRefetch());
          dispatch(handleSelectRow(null));
        }
      })
      .catch(err => handleError(err));
  };

export const handlePublish = (input: IPublishEventInput) => (dispatch: any) => {
  requestInterToken({
    method: 'POST',
    url: API_URL.EVENTS.PUSBLISH,
    data: {
      ...input,
    },
  })
    .then(res => {
      console.log(res);
      if (res.data) {
        dispatch(handleRefetch);
      }
    })
    .catch(err => {
      handleError(err);
    });
};
