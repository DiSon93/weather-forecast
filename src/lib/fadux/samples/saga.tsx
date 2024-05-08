import { getAction, getActionName } from '..';
import { call, put } from 'redux-saga/effects';
import { takeLatest, all } from 'redux-saga/effects';

// const FULL_EQUIPED_API_SAGA = (uniqueKey, api, apiRequest) => {
//   const saga = function* request(api, action) {
//     const {payload} = action;
//     // make the call to the api
//     try {
//       const response = yield call(apiRequest, payload);
//       console.log(response);
//       if (response.status === 200) {
//         // do data conversion here if needed
//         yield put(getAction(uniqueKey, 'succeed')({response: response.data}));
//       } else {
//         yield put(getAction(uniqueKey, 'failed')({error: response.data}));
//       }
//     } catch (error) {
//       switch (error.message) {
//         case 'Network Error':
//           yield put(getAction(uniqueKey, 'networkError')({}));
//           break;
//         default:
//           yield put(getAction(uniqueKey, 'failed')({error: error}));
//       }
//     }
//   };
//   return [takeLatest(getActionName(uniqueKey), saga, api)];
// };

// export {FULL_EQUIPED_API_SAGA};
