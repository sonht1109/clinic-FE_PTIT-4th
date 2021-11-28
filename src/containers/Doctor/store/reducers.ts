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
  data: [],
  selectedRow: null,
  shouldRefetch: false,
  search: {
    name: ''
  },
  total: 0,
  paginate: {
    page: 1,
    size: PAGE_SIZE
  }
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

    case types.REFETCH: {
      return {
        ...state,
        shouldRefetch: !state.shouldRefetch
      }
    }

    default:
      return { ...state };
  }
};

export default reducersDoctor;
