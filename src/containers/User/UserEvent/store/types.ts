/*
 *
 * UserEvent types
 * make by phamthainb
 */
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreUserEvent {
  creating: any;
//   contestant: ContestantReducer;
  currentEvent: any; // sự kiện đang chỉnh sửa
}

export type ActionsUserEvent = ActionType<typeof actions>;
// export interface ContestantReducer {
//     data: any;
//     total: number;
//     pagination: { pageNumber: number; pageSize: number };
//     search: {
//       type: string;
//       name: string;
//     };
//     reload: boolean; // trigger get list Contestant
//   }
