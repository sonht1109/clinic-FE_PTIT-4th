/*
 *
 * AdminKycManagement reducers
 * make by phamthainb
 */
import { PAGE_SIZE } from 'configs';
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsAdminKycManagement, StoreAdminKycManagement } from './types';

const initState: StoreAdminKycManagement = {
  pageNumber: 1,
  pageSize: PAGE_SIZE,
  total: 0,
  data: [],
  status: '',
  keyword: '',
  selectedRow: null,
  shouldRefetch: false,
};

const reducersAdminKycManagement: Reducer<
  StoreAdminKycManagement,
  ActionsAdminKycManagement
> = (state = initState, actions: ActionsAdminKycManagement) => {

  switch (actions.type) {

    case types.SET_DATA:
      return {
        ...state,
        data: [...actions.payload.data],
        total: actions.payload.total,
      };

    case types.CHANGE_PAGE:
      return {
        ...state,
        pageNumber: actions.payload,
      };

    case types.CHANGE_PAGE_SIZE:
      return {
        ...state,
        pageSize: actions.payload,
      };

    case types.SEARCH:
      return {
        ...state,
        status: actions.payload.status,
        keyword: actions.payload.keyword,
      };

    case types.SELECT_ROW:
      return {
        ...state,
        selectedRow: actions.payload !== null ? { ...actions.payload } : null,
      };

    case types.REFETCH:
      return {
        ...state,
        shouldRefetch: !state.shouldRefetch,
      };

    default:
      return { ...state };
  }
};

export default reducersAdminKycManagement;
