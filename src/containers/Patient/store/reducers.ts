/*
 *
 * Patient reducers
 * make by phamthainb
 */
import { PAGE_SIZE } from 'configs';
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsPatient, StorePatient } from './types';

const initState: StorePatient = {
  data: [],
  selectedRow: null,
  shouldRefetch: false,
  search: {
    name: 's',
  },
  total: 0,
  paginate: {
    page: 1,
    size: PAGE_SIZE,
  },
};

const reducersPatient: Reducer<StorePatient, ActionsPatient> = (
  state = initState,
  actions: ActionsPatient,
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
        shouldRefetch: !state.shouldRefetch,
      };
    }

    default:
      return { ...state };
  }
};

export default reducersPatient;
