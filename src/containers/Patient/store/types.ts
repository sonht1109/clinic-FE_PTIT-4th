/*
*
* Patient types
* make by phamthainb
*/
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StorePatient {}

export type ActionsPatient = ActionType<typeof actions>;