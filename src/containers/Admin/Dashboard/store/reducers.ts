/*
 *
 * Dashboard reducers
 * make by phamthainb
 */
import { PAGE_SIZE } from 'configs';
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsDashboard, StoreDashboard } from './types';

const initState: StoreDashboard = {
  events: [],
  total: 0,
  pageNumber: 1,
  pageSize: PAGE_SIZE,
};

const reducersDashboard: Reducer<StoreDashboard, ActionsDashboard> = (
  state = initState,
  actions: ActionsDashboard,
) => {
  switch (actions.type) {
    case types.SET_EVENTS:
      return {
        ...state,
        events: [...actions.payload.events],
        total: actions.payload.total,
      };

    case types.CHANGE_PAGE:

      return {
        ...state,
        pageNumber: actions.payload,
      };

    case types.CHANGE_PAGE_SIZE:
    console.log(actions)
      return {
        ...state,
        pageSize: actions.payload,
      };

    default:
      return { ...state };
  }
};

export default reducersDashboard;
