/*
*
* Info reducers
* make by phamthainb
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsInfo, StoreInfo } from "./types";

const initState : StoreInfo = { };

const reducersInfo : Reducer<StoreInfo, ActionsInfo> = (state = initState, actions: ActionsInfo) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersInfo;