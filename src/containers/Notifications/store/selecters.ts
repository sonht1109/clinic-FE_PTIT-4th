/*
*
* Notifications selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectNotificationsStore = ((state: ReturnType<typeof rootReducer>) => state.Notifications)