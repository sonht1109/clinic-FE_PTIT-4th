/*
 *
 * SystemSetup reducers
 * make by phamthainb
 */
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsSystemSetup, StoreSystemSetup } from './types';

const initState: StoreSystemSetup = {
  info: {},
};

const reducersSystemSetup: Reducer<StoreSystemSetup, ActionsSystemSetup> = (
  state = initState,
  actions: ActionsSystemSetup,
) => {
  switch (actions.type) {
    case types.GET_INFORMATION: {
      return {
        ...state,
        info: actions.value,
      };
    }
    default:
      return { ...state };
  }
};

export default reducersSystemSetup;
