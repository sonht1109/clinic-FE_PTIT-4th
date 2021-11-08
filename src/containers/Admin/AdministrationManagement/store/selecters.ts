/*
*
* AdministrationManagement selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectAdministrationManagementStore = ((state: ReturnType<typeof rootReducer>) => state.AdministrationManagement)