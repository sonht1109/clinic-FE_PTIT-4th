/*
*
* UserEvent selecters
* make by phamthainb
*/
import rootReducer from "redux/root-reducers";

export const selectUserEventStore = ((state: ReturnType<typeof rootReducer>) => state.UserEvent)
// export const selectContestant = ((state: ReturnType<typeof rootReducer>) => state.UserEvent.contestant)