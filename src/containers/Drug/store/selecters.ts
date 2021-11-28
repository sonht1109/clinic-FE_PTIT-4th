/*
*
* Drug selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectDrugStore = ((state: ReturnType<typeof rootReducer>) => state.Drug)