/*
 *
 * Nurse reducers
 * make by phamthainb
 */
import { PAGE_SIZE } from 'configs';
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsNurse, StoreNurse } from './types';

const initState: StoreNurse = {
  pageNumber: 1,
  pageSize: PAGE_SIZE,
  total: 0,
  data: [],
  status: '',
  keyword: '',
  selectedRow: null,
  shouldRefetch: false,
};

const reducersNurse: Reducer<StoreNurse, ActionsNurse> = (
  state = initState,
  actions: ActionsNurse,
) => {
  switch (actions.type) {
    default:
      return { ...state };
  }
};

export default reducersNurse;
