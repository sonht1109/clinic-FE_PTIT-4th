/*
*
* UserAccountManagement selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectUserAccountManagementStore = ((state: ReturnType<typeof rootReducer>) => state.UserAccountManagement)