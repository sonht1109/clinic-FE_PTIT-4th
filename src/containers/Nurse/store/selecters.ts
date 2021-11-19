/*
*
* Nurse selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectNurseStore = ((state: ReturnType<typeof rootReducer>) => state.Nurse)