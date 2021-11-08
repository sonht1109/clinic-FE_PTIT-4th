/*
*
* SystemSetup selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectSystemSetupStore = ((state: ReturnType<typeof rootReducer>) => state.SystemSetup)