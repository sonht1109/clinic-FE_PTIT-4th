/*
 *
 * UserKyc reducers
 * make by phamthainb
 */ 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';  

const initState = {
    statusAccount: {},
  };
  
  const reducersUserKyc = (state = initState, actions: any) => {
    switch (actions.type) {
      case types.GET_KYC_STATUS_ACCOUNT: {
        return {
          ...state,
          statusAccount: actions.payload.data,
        };
      }
      default:
        return { ...state };
    }
  };
 
export default reducersUserKyc;
