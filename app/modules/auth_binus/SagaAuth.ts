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


function* workerSagaLogin({type, send, callback}: IWorkerSagaLogin) {
  let cbValue = {
    data: null,
    success: true
  }
  try {
    const response = yield call(request, `${BASE_URL}/SignInByEmail`, 'POST', send, 'application/json');
    cbValue.data = response.data;
    if(response.status === 200) {
        yield put.resolve(loginSuccess(response.data));
        callback(cbValue);
    } else {
      throw new Error(response.data)
    }
    
  } catch (error) {
    cbValue = {
      data: error.message,
      success: false
    }
    callback(cbValue);
    yield put.resolve(loginFailed(error.message));
  }
}

export const watcherBinusAuth = [
  takeLatest(LOGINREQUEST, workerSagaLogin)
];
