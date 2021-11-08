/*
 *
 * UserEvent reducers
 * make by phamthainb
 */
import { Reducer } from 'redux';
// import { ActionType } from 'typesafe-actions';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsUserEvent, StoreUserEvent } from './types';
// import * as actions from './actions';

const initState: StoreUserEvent = {
  creating: {
    data: [],
    total: 0,
    pagination: { pageNumber: 1, pageSize: 10 },
    search: {
      type: '',
      name: '',
    },
    reload: false,
  },
//   contestant: {
//     data: [],
//     total: 0,
//     pagination: { pageNumber: 1, pageSize: 10 },
//     search: {
//       type: '',
//       name: '',
//     },
//     reload: false,
//   },
  currentEvent: null,
};

const reducersUserEvent: Reducer<StoreUserEvent, ActionsUserEvent> = (
  state = initState,
  actions: ActionsUserEvent,
) => {
    switch (actions.type) {
        case types.CREATING: {
          return {
            ...state,
            creating: { ...state.creating, data: actions.payload },
          };
        }
        //CONTESTANT of current Event
        // case types.CONTESTANT.SET: {
        //   return {
        //     ...state,
        //     contestant: { ...state.contestant, ...actions.payload },
        //   };
        // }
        // case types.CONTESTANT.SEARCH: {
        //   return {
        //     ...state,
        //     contestant: {
        //       ...state.contestant,
        //       search: actions.payload,
        //       // reset pageNumber to 1 when search
        //       pagination: { ...state.contestant.pagination, pageNumber: 1 },
        //     },
        //   };
        // }
        // case types.CONTESTANT.PAGINATION: {
        //   return {
        //     ...state,
        //     contestant: { ...state.contestant, pagination: actions.payload },
        //   };
        // }
        // case types.CONTESTANT.RELOAD: {
        //   return {
        //     ...state,
        //     contestant: { ...state.contestant, reload: actions.payload },
        //   };
        // }
        // //currentEvent information
        // case types.CURRENT_EVENT.SET: {
        //   return {
        //     ...state,
        //     currentEvent: actions.payload,
        //   };
        // }
        
        default:
          return { ...state };
      }
};

export default reducersUserEvent; 
