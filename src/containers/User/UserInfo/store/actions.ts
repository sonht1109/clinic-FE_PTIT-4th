/*
 *
 * Admin actions
 *
 */
import { requestToken } from "api/axios";
import API_URL from "api/url";
import * as types from "./constants";

export const getInformations = () => (dispatch: any) => {
  requestToken({
    method: "GET",
    url: API_URL.INFORMATIONS.SINGLE_ACCOUNT,
    data: null,
  })
    .then((res) => {
      console.log("res data events created", res);
      dispatch({
        type: types.GET_INFORMATION,
        value: res?.data,
      });
    })
    .catch((err) => {});
};
// export
/// dispatch into Store
