import { requestToken } from 'api/axios';
/*
*
* SystemSetup actions
* make by phamthainb
*/
import * as types from './constants'; 
import API_URL from 'api/url';

export const getInformations = () => (dispatch: any) => {
    requestToken({
      method: "GET",
      url: API_URL.INFORMATIONS.SINGLE_ACCOUNT,
      data: null,
    })
      .then((res) => {
        localStorage.setItem("infor", JSON.stringify(res?.data));
        dispatch({
          type: types.GET_INFORMATION,
          value: res?.data,
        });
      })
      .catch((err) => {});
  };