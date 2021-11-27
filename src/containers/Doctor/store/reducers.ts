/*
 *
 * Doctor reducers
 * make by phamthainb
 */
import { PAGE_SIZE } from 'configs';
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsDoctor, StoreDoctor } from './types';

const initState: StoreDoctor = {
  pageNumber: 1,
  pageSize: PAGE_SIZE,
  total: 0,
  data: [],
  status: '',
  keyword: '',
  selectedRow: null,
  shouldRefetch: false,
};

const reducersDoctor: Reducer<StoreDoctor, ActionsDoctor> = (
  state = initState,
  actions: ActionsDoctor,
) => {
  switch (actions.type) {
    case types.SET_DATA: {
      return {
        ...state,
        data: [...actions.payload.data],
        total: actions.payload.total,
      };
    }

    case types.SELECT_ROW: {
      return {
        ...state,
        selectedRow: actions.payload
          ? actions.payload?.id === state.selectedRow?.id
            ? null
            : { ...actions.payload }
          : null,
      };
    }

    default:
      return { ...state };
  }
};

export default reducersDoctor;
