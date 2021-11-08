/*
*
* Demo types
* make by phamthainb
*/
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreDemo {}

export type ActionsDemo = ActionType<typeof actions>;