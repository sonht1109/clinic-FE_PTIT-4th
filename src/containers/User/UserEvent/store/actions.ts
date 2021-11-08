/*
 *
 * UserEvent actions
 * make by phamthainb
 */
import * as types from './constants';
import API_URL from 'api/url'; 
import { requestInterToken } from 'api/axios';

export const changeEventCreating = (val: any) => ({
  type: types.CREATING,
  payload: val,
});

// /**
//  * createEvent
//  * @param data
//  * @return eventId
//  */
// export const createEvent = async (data: any) => {
//   const res = await requestInterToken({
//     method: 'POST',
//     url: API_URL.EVENTS.CREATE,
//     data: data,
//   });
//   // console.log(res);
//   return res.data.id;
// };

/**
 * get list event is creating from api
 */
export const getEventCreating = () => (dispatch: any) => {
  requestInterToken({
    method: 'GET',
    url: API_URL.EVENTS.CREATING, 
  })
    .then(res => {
      // convert res.data to same data into state machine === api post create event
      const data = res.data.map((e: any) => {
        // console.log(e);
        return {
          eventId: e.id,
          eventInfo: {
            name: e.name,
            field: e.field,
            kyc: e.kyc,
            public: e.public,
            startTime: e.startTime,
            endTime: e.endTime,
          },
          contestantTypes: e.contestantTypes,
          eventContestant: {
            limit: e.limit,
            data_limit: e.data_limit,
          },
          voteInfo: {
            voteType: e.vote,
            configVote: e.configVote,
            configEvaluate: {
              evaluateCriteria: e.evaluateCriteria,
              evaluateTitles: e.evaluateTitles,
            },
          },
        };
      });
      // console.log("get data", data);

      dispatch(changeEventCreating(data));
    })
    .catch(err => {});
};

/**
 * Update Information of Event into Machine Store client
 * @param param0
 */
// export const syncEventInfo = (eventId: string) => (dispatch: any) => {
//   requestToken({
//     method: 'GET',
//     url: API_URL.EVENTS.GET_ONE(eventId),
//   })
//     .then(res => {
//       const data = formatEventInfo(res.data);
//       dispatch(setCurrentEvent(data));
//     })
//     .catch(err => {});
// };

/**
 * create an Contestant for an Event, by hand :)
 * @param eventId
 * @param data
 */
// export const createContestant = (data: FormData) => {
//   return requestInterToken({
//     method: 'POST',
//     url: API_URL.CONTESTANT.CREATE.ONE,
//     data: data,
//   });
// };

/**
 * create Contestant for an Event by upload file Excel
 * @param data
 */
// export const createContestantExcel = (data: FormData) => {
//   return requestInterToken({
//     method: 'POST',
//     url: API_URL.CONTESTANT.CREATE.EXCEL,
//     data: data,
//   });
// };

/**
 * get list Contestant of Event by ID
 * @param evenId
 */
// export const getContestant =
//   (
//     eventId: string,
//     pagination: { pageNumber: number; pageSize: number },
//     search: { type: string; name: string },
//   ) =>
//   (dispatch: any) => {
//     // console.log(eventId, pagination, search);

//     requestToken({
//       method: 'GET',
//       url: `api/event/${eventId}/contestant?page=${pagination.pageNumber}&sizePerPage=${pagination.pageSize}&name=${search.name}&type=${search.type}`,
//     })
//       .then(res => {
//         // console.log("getContestant res", res);
//         dispatch(
//           setContestant({
//             data: res.data.data,
//             total: res.data.total,
//             reload: false,
//           }),
//         );
//       })
//       .catch(err => {});
//   };

// export const setContestant = (payload: {
//   total: number;
//   data: any;
//   reload: boolean;
// }) => ({
//   type: types.CONTESTANT.SET,
//   payload: payload,
// });

/**
 *  Trigger get list Contestant Event
 * @param should
 */
// export const triggerGetContestant = (should: boolean) => ({
//   type: types.CONTESTANT.RELOAD,
//   payload: should,
// });

// export const setSearchContestant = (search: {
//   type: string;
//   name: string;
// }) => ({
//   type: types.CONTESTANT.SEARCH,
//   payload: search,
// });

//currentEvent
// export const setCurrentEvent = (val: any) =>
//   action(types.CURRENT_EVENT.SET, val);


//   -----------

// export const formatEventInfo = (e: { [key: string]: any }) => ({
//   // 1
//   eventId: e?.id,
//   eventInfo: {
//     name: e?.name,
//     code: e?.code,
//     field: e?.field,
//     kyc: e?.kyc,
//     public: e?.public,
//     startTime: e?.startTime,
//     endTime: e?.endTime,
//   },
//   // 2
//   contestantTypes: e?.contestantTypes,
//   eventContestant: {
//     limit: e?.limit,
//     data_limit: e?.data_limit,
//   },
//   // 3
//   voteInfo: {
//     voteType: e?.vote,
//     configVote: e?.configVote,
//     configEvaluate: e?.configEvaluate,
//   },
//   // 4
//   configTheme: e?.configTheme,
// });
