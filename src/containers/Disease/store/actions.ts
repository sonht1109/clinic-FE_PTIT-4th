/*
 *
 * .DISEASE actions
 * make by phamthainb
 */
import * as types from './constants';
import { action } from 'typesafe-actions';
import { requestInterToken, requestToken } from 'api/axios';
import API_URL from 'api/url';
import { handleError } from 'helpers';
import { TDisease } from './types';
import { Alert } from 'components/Alert';
import { Pagination } from 'configs/types';
import { PAGE_SIZE } from 'configs';
import { TDrug } from 'containers/Drug/store/types';

export const onRefetch = () => action(types.REFETCH);

export const setData = (data: [], total: number) =>
  action(types.SET_DATA, { data, total });

export const onPaginate = (paginate: Pagination) =>
  action(types.PAGINATE, paginate);

export const getData =
  ({ page, size, name }: { page: number; size: number; name: string }) =>
  (dispatch: any) => {
    requestInterToken({
      method: 'GET',
      url: API_URL.DISEASE.DEFAULT,
      params: {
        page: page - 1,
        size,
        name,
      },
    })
      .then(res => {
        dispatch(setData(res.data || [], res.data?.totalElements || 0));
      })
      .catch(handleError);
  };

export const onSelectRow = (data: TDisease | null) =>
  action(types.SELECT_ROW, data);

export const onDelete = (id: number) => (dispatch: any) => {
  requestInterToken({
    method: 'DELETE',
    params: { id },
    url: API_URL.DISEASE.DEFAULT,
  })
    .then(() => {
      dispatch(onRefetch());
      Alert({ name: 'Thực hiện xóa thành công' });
    })
    .catch(handleError);
};

export const onCreate =
  (data: any, handleSuccess?: () => void) => (dispatch: any) => {
    requestInterToken({
      method: 'POST',
      data,
      url: API_URL.DISEASE.DEFAULT,
    })
      .then(() => {
        dispatch(onRefetch());
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
      url: API_URL.DISEASE.DEFAULT,
    })
      .then(() => {
        dispatch(onRefetch());
        dispatch(onSelectRow(null));
        handleSuccess && handleSuccess();
      })
      .catch(handleError);
  };

export const getDrugs = ({
  name,
  onSuccess,
}: {
  name: string;
  onSuccess: (args: any) => void;
}) => {
  requestToken({
    method: 'GET',
    url: API_URL.DRUG.DEFAULT,
    params: { name, page: 0, size: PAGE_SIZE },
  })
    .then(res => {
      if (res.data?.length > 0) {
        const mappedData = res.data.map((d: TDrug) => ({
          label: d.name,
          value: d.id,
        }));
        onSuccess(mappedData);
      }
    })
    .catch(handleError);
};
