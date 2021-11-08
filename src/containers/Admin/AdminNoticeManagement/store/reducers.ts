/*
 *
 * AdminNoticeManagement reducers
 * make by phamthainb
 */
import { pageSize } from 'configs/types';
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import {
  ActionsAdminNoticeManagement,
  StoreAdminNoticeManagement,
} from './types';

const initState: StoreAdminNoticeManagement = {
  data: [],
  total: 0,
  search: {
    status: '',
    keyword: '',
  },
  pagination: { pageSize: pageSize, pageNumber: 1 },
};

const reducersAdminNoticeManagement: Reducer<
  StoreAdminNoticeManagement,
  ActionsAdminNoticeManagement
> = (
  state = initState,
  actions: ActionsAdminNoticeManagement | { type: string; payload: any },
) => {
  switch (actions.type) {
    case types.GET: {
      const { data, total } = actions.payload;
      return { ...state, data: data, total: total };
    }
    case types.SEARCH: {
      return {
        ...state,
        search: { ...state.search, keyword: actions.payload },
      };
    }
    case types.PAGINATION: {
      return {
        ...state,
        pagination: {
          pageNumber: actions.payload.pageNumber,
          pageSize: actions.payload.pageSize,
        },
      };
    }
    case types.CHANGE_PAGE_SIZE:
      return {
        ...state,
        pageSize: actions.payload,
      };
    case types.CHANGE_PAGE:
      return {
        ...state,
        pageNumber: actions.payload,
      };
    default:
      return { ...state };
  }
};

export default reducersAdminNoticeManagement;
