/*
 *
 * Admin actions
 *
 */
import { requestToken } from "api/axios";
import API_URL from "api/url";
import * as types from "./constants";

export const getEventsCreated = () => (dispatch: any) => {
  requestToken({ method: "GET", url: API_URL.EVENTS.CREATED, data: null })
    .then((res) => {
      dispatch({
        type: types.GET_DASHBOARD_EVENT_CREATED,
        payload: {
          data: res?.data,
        },
      });
    })
    .catch((err) => {});
};
export const getStatusAccount = () => (dispatch: any) => {
  requestToken({ method: "GET", url: API_URL.USER.USER_INFO })
    .then((res) => {
      dispatch({
        type: types.GET_DASHBOARD_STATUS_ACCOUNT,
        payload: {
          data: res?.data,
        },
      });
    })
    .catch((err) => {});
};
// export 
/// dispatch into Store
