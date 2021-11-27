/*
*
* Info types
* make by phamthainb
*/
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreInfo {}

export type ActionsInfo = ActionType<typeof actions>;