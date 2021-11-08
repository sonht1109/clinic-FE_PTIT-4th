/*
 *
 * AdministrationManagement actions
 * make by phamthainb
 */
import * as types from './constants';
import { action } from 'typesafe-actions';
import { requestInterToken } from 'api/axios';
import API_URL from 'api/url';
import { handleError } from 'helpers';
import { IUser } from 'containers/App/store/types';
import { DataSubmit } from './types';
import { UserActionEnum, UserTypeEnum } from 'enum';

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
      url: API_URL.ADMIN_ACCOUNT.GET,
      params: {
        pageNumber,
        pageSize,
        status,
        keyword,
      },
    })
      .then(res => {
        if (res?.data) {
          dispatch(setData(res?.data?.data, res?.data?.total));
          // console.log("res: ", res);
        }
      })
      .catch(err => {
        handleError(err);
      });
  };

export const setData = (data: any[], total: number) =>
  action(types.SET_DATA, { data, total });

export const handleAction =
  ({
    actionType,
    userType,
    id,
  }: {
    actionType: UserActionEnum;
    userType: UserTypeEnum;
    id: string;
  }) =>
  (dispatch: any) => {
    requestInterToken({
      method: 'POST',
      url: API_URL.USER.USER_ACTION(id),
      data: {
        actionType,
        userType,
      },
    })
      .then(res => {
        if (res.data) {
          dispatch(handleRefetch());
          dispatch(handleSelectRow(null));
        }
      })
      .catch(err => handleError(err));
  };

export const handleChangePage = (page: number) =>
  action(types.CHANGE_PAGE, page);

export const handleChangePageSize = (size: number) =>
  action(types.CHANGE_PAGE_SIZE, size);

export const handleSearch = (keyword: string) =>
  action(types.SEARCH, { keyword });

export const handleSelectRow = (selected: IUser | null) =>
  action(types.SELECT_ROW, selected);

export const handleRefetch = () => action(types.REFETCH);

export const handleRegister =
  (data: DataSubmit, handleSuccess: () => void) => (dispatch: any) => {
    requestInterToken({
      method: 'POST',
      url: API_URL.AUTH.REGISTER,
      data: {
        ...data,
        type: UserTypeEnum['ADMIN'],
        groupPermission: data.groupPermission.value,
      },
    })
      .then(res => {
        if (res.data) {
          dispatch(handleRefetch());
          handleSuccess();
        }
      })
      .catch(err => {
        handleError(err);
      });
  };
