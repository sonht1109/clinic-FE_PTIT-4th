// /*
// *
// * UserKyc actions
// * make by phamthainb
// */
import { requestToken } from "api/axios";
import API_URL from "api/url";
import * as types from "./constants";

export const getStatusAccount = () => (dispatch: any) => {
    requestToken({ method: "GET", url: API_URL.USER.USER_INFO, data: null })
    .then((res) => {
      dispatch({
        type: types.GET_KYC_STATUS_ACCOUNT,
        payload: {
          data: res?.data,
        },
      });
    })
    .catch((err) => {});
};
 // export
/// dispatch into Store