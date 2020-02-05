/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { post, request } from '../../utilities/StoreApi';
import {
  LOGINREQUEST, 
  GETPROFILEREQUEST
} from './ConfigAuth';
import {
  loginSuccess,
  loginFailed,
} from './ActionAuth';
import  { IWorkerSagaLogin } from './interfaces/sagas';
import { FakeLogin } from './HelpersAuth';
import { APISINTONG, BASE_URL } from '../../config/Api';
import { takeEvery } from 'redux-saga';


function* workerSagaLogin({type, send, callback}: IWorkerSagaLogin) {
  try {
    const response = yield call(request, `${BASE_URL}/SignInByEmail`, 'POST', send, 'application/json');

    // const dummy = {
    //   token: 'initokenlogin',
    //   roles: ["student", "lecturer"]
    // }
    setTimeout(
      () => {
        callback(response);
      },
      1000
    )
    // if (response.success) {
    //   callback(response.data);
    //   yield put.resolve(loginSuccess(response.data));
    // } else {
    //   callback(false);
    //   yield put.resolve(loginFailed(response.data.error));
    // }
  } catch (error) {
    callback(false);
    yield put.resolve(loginFailed(error.message));
  }
}

function* workerSagaGetProfile({type, callback}: any) {
  console.log("workerSagaGetProfile")
  try {

  } catch(err) {

  }
}

export const watcherBinusAuth = [
  takeLatest(LOGINREQUEST, workerSagaLogin),
  takeEvery(GETPROFILEREQUEST, workerSagaGetProfile)
];
