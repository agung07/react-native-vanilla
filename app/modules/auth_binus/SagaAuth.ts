/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { post, request } from '../../utilities/StoreApi';
import {
  LOGINREQUEST
} from './ConfigAuth';
import {
  loginSuccess,
  loginFailed,
} from './ActionAuth';
import  { IWorkerSagaLogin } from './interfaces/sagas';
import {  BASE_URL } from '../../config/Api';
import { takeEvery } from 'redux-saga';


function* workerSagaLogin({type, send, callback}: IWorkerSagaLogin) {
  try {
    const response = yield call(request, `${BASE_URL}/SignInByEmail`, 'POST', send, 'application/json');

    if(typeof response === 'string') {
        yield put.resolve(loginSuccess(response));
        callback(response);
    } else {
      throw new Error('Login Failed')
    }
    
  } catch (error) {
    callback(false);
    yield put.resolve(loginFailed(error.message));
  }
}

export const watcherBinusAuth = [
  takeLatest(LOGINREQUEST, workerSagaLogin)
];
