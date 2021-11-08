/*
*
* Demo selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectDemoStore = ((state: ReturnType<typeof rootReducer>) => state.Demo)