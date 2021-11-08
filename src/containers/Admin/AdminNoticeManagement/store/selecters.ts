/*
 *
 * AdminNoticeManagement selecters
 * make by phamthainb
 */
import rootReducer from 'redux/root-reducers';

export const selectAdminNoticeManagementStore = (
  state: ReturnType<typeof rootReducer>,
) => state.AdminNoticeManagement;
