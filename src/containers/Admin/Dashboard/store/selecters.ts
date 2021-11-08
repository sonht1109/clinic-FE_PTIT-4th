/*
 *
 * Dashboard selecters
 * make by phamthainb
 */
import rootReducer from 'redux/root-reducers';

export const selectDashboardStore = (state: ReturnType<typeof rootReducer>) =>
  state.Dashboard;
