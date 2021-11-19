/*
*
* Patient selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectPatientStore = ((state: ReturnType<typeof rootReducer>) => state.Patient)