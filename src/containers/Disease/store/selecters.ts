/*
*
* Disease selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectDiseaseStore = ((state: ReturnType<typeof rootReducer>) => state.Disease)