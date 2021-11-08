/*
 *
 * AdminEventManagement selecters
 * make by phamthainb
 */
import rootReducer from 'redux/root-reducers';

export const selectAdminEventManagementStore = (
  state: ReturnType<typeof rootReducer>,
) => state.AdminEventManagement;
