/*
 *
 * Admin reducers
 *
 */
import * as types from "./constants";

const initState = {
  eventsCreated: [],
  statusAccount: {},
};

const reducersUserDashboard = (state = initState, actions: any) => {
  switch (actions.type) {
    case types.GET_DASHBOARD_EVENT_CREATED: {
      return {
        ...state,
        eventsCreated: actions.payload.data,
      };
    }
    case types.GET_DASHBOARD_STATUS_ACCOUNT: {
      return {
        ...state,
        statusAccount: actions.payload.data,
      };
    }
    default:
      return { ...state };
  }
};

export default reducersUserDashboard;
