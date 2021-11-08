/*
 *
 * App reducers
 *
 */
import { PAGE_SIZE } from 'configs';
import { Reducer } from 'redux';
import * as types from './constants';
import { ActionsBell, BellStore } from './types';

const initState: BellStore = {
  data: [],
  pageSize: PAGE_SIZE,
  pageNumber: 1,
  total: 0,
  unread: 0
};

const reducersBell: Reducer<BellStore, ActionsBell> = (
  state = initState,
  actions: ActionsBell,
) => {
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

    default:
      return { ...state };
  }
};

export default reducersBell;
