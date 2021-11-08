/*
*
* AdminRankReport reducers
* make by phamthainb
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsAdminRankReport, StoreAdminRankReport } from "./types";

const initState : StoreAdminRankReport = { };

const reducersAdminRankReport : Reducer<StoreAdminRankReport, ActionsAdminRankReport> = (state = initState, actions: ActionsAdminRankReport) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersAdminRankReport;