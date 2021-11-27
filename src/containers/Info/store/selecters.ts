/*
*
* Info selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectInfoStore = ((state: ReturnType<typeof rootReducer>) => state.Info)