/*
 *
 * AdminKycManagement actions
 * make by phamthainb
 */
import * as types from './constants';
import { action } from 'typesafe-actions';
import { requestInterToken } from 'api/axios';
import API_URL from 'api/url';
import { defaultOption } from 'configs';
import { handleError } from 'helpers';
import { KycActionEnum } from 'enum';

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
      url: API_URL.KYC.GET,
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

export const handleSelectRow = (selected: any | null) =>
  action(types.SELECT_ROW, selected);

export const handleRefetch = () => action(types.REFETCH);

export const handleVerify =
  ({
    id,
    actionType,
    note,
    handleSuccess,
  }: {
    id: string;
    actionType: KycActionEnum;
    note?: string;
    handleSuccess?: () => void;
  }) =>
  (dispatch: any) => {
    requestInterToken({
      method: 'POST',
      url: API_URL.KYC.POST_ACTION + '/' + id,
      data: {
        actionType,
        note,
      },
    })
      .then(res => {
        if (res.data) {
          dispatch(handleRefetch());
          dispatch(handleSelectRow(null));
          handleSuccess && handleSuccess();
        }
      })
      .catch(err => {
        handleError(err);
      });
  };
