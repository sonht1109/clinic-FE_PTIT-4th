/*
*
* Doctor selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectDoctorStore = ((state: ReturnType<typeof rootReducer>) => state.Doctor)