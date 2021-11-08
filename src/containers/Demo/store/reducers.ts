/*
*
* Demo reducers
* make by phamthainb
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsDemo, StoreDemo } from "./types";

const initState : StoreDemo = { };

const reducersDemo : Reducer<StoreDemo, ActionsDemo> = (state = initState, actions: ActionsDemo) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersDemo;