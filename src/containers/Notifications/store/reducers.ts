/*
 *
 * Notifications reducers
 * make by phamthainb
 */
import { PAGE_SIZE } from 'configs';
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsNotifications, StoreNotifications } from './types';

const initState: StoreNotifications = {
  pageNumber: 1,
  pageSize: PAGE_SIZE,
  total: 0,
  data: [],
  shouldRefetch: false,
  unread: 0
};

const reducersNotifications: Reducer<StoreNotifications, ActionsNotifications> =
  (state = initState, actions: ActionsNotifications) => {
    switch (actions.type) {
      case types.SET_DATA:
        return {
          ...state,
          data: [...actions.payload.data],
          total: actions.payload.total,
          unread: actions.payload.unread,
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

      case types.REFETCH:
        return {
          ...state,
          shouldRefetch: !state.shouldRefetch,
        };

      default:
        return { ...state };
    }
  };

export default reducersNotifications;
