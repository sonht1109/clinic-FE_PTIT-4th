/*
*
* UserKyc selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const userKyc = ((state: ReturnType<typeof rootReducer>) => state.UserKyc)
