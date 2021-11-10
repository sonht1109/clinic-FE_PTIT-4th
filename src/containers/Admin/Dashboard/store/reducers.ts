/*
 *
 * Dashboard reducers
 * make by phamthainb
 */
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ActionsDashboard, StoreDashboard } from './types';

const initState: StoreDashboard = {};

const reducersDashboard: Reducer<StoreDashboard, ActionsDashboard> = (
  state = initState,
  actions: ActionsDashboard,
) => {
  switch (actions.type) {
    default:
      return { ...state };
  }
};

export default reducersDashboard;
