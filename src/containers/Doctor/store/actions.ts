/*
 *
 * Doctor actions
 * make by phamthainb
 */
import * as types from './constants';
import { action } from 'typesafe-actions';
import { requestInterToken } from 'api/axios';
import API_URL from 'api/url';
import { handleError } from 'helpers';
import { TDoctor } from './types';
import { Alert } from 'components/Alert';

export const setData = (data: [], total: number) =>
  action(types.SET_DATA, { data, total });

export const handleChangePage = (page: number) =>
  action(types.CHANGE_PAGE, page);

export const handleChangePageSize = (size: number) =>
  action(types.CHANGE_PAGE_SIZE, size);

export const getData = () => (dispatch: any) => {
  requestInterToken({ method: 'GET', url: API_URL.DOCTOR.DEFAULT })
    .then(res => {
      dispatch(setData(res.data, res.data?.length || 0));
    })
    .catch(handleError);
};

export const onSelectRow = (data: TDoctor | null) => action(types.SELECT_ROW, data);

export const onDelete = (id: number) => (dispatch: any) => {
  requestInterToken({
    method: 'DELETE',
    params: { id },
    url: API_URL.DOCTOR.DEFAULT,
  })
    .then(() => {
      dispatch(getData());
      Alert({ name: 'Thực hiện xóa thành công' });
    })
    .catch(handleError);
};

export const onCreate =
  (data: any, handleSuccess?: () => void) => (dispatch: any) => {
    requestInterToken({
      method: 'POST',
      data,
      url: API_URL.DOCTOR.DEFAULT,
    })
      .then(() => {
        dispatch(getData());
        dispatch(onSelectRow(null));
        handleSuccess && handleSuccess();
      })
      .catch(handleError);
  };

export const onUpdate =
  (data: any, handleSuccess?: () => void) => (dispatch: any) => {
    requestInterToken({
      method: 'PUT',
      data,
      url: API_URL.DOCTOR.DEFAULT,
    })
      .then(() => {
        dispatch(getData());
        dispatch(onSelectRow(null));
        handleSuccess && handleSuccess();
      })
      .catch(handleError);
  };
