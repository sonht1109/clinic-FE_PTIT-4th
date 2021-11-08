/*
*
* AdminPermission selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectAdminPermissionStore = ((state: ReturnType<typeof rootReducer>) => state.AdminPermission)