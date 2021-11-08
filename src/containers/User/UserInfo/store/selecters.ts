/*
 *
 * ManagerEvents selecters
 *
 */
import rootReducer from "redux/root-reducers";

export const userInformations = (state: ReturnType<typeof rootReducer>) =>
  state.UserInformations;
