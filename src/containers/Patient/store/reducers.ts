/*
*
* Patient reducers
* make by phamthainb
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsPatient, StorePatient } from "./types";

const initState : StorePatient = { };

const reducersPatient : Reducer<StorePatient, ActionsPatient> = (state = initState, actions: ActionsPatient) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersPatient;