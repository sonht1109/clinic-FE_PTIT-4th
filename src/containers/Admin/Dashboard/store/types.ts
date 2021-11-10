/*
 *
 * Dashboard types
 * make by phamthainb
 */
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreDashboard {}

export type ActionsDashboard = ActionType<typeof actions>;
