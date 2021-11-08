/*
 *
 * Admin reducers
 *
 */
import * as types from "./constants";

const initState = {
  info: {},
};

const reducersUserInformations = (state = initState, actions: any) => {
  switch (actions.type) {
    case types.GET_INFORMATION: {
      return {
        ...state,
        info: actions.value,
      };
    }
    default:
      return { ...state };
  }
};

export default reducersUserInformations;
