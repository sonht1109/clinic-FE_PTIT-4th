/*
 *
 * App selecters
 *
 */
import rootReducer from "redux/root-reducers";

export const selectBellStore = (state: ReturnType<typeof rootReducer>) =>
  state.Bell;
