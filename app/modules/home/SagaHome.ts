/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  call, 
  put, 
  takeLatest, 
  takeEvery
} from 'redux-saga/effects';
import {
  CLASSFETCH,
  UPCOMINGCLASSFETCH,
} from './ConfigHome';
import {
  classSuccess,
  classFailed,
  upcommingClassSuccess,
  upcommingClassFailed
} from './ActionHome';
import { APISINTONG, APIHENDRA } from '../../config/Api';
import { request } from '../../utilities/StoreApi';


function* workerSagaClassFetch() {
  try {
    const response = yield call(request, `${APISINTONG}/classes`, 'GET');
    if (response.success) {
      yield put.resolve(classSuccess(response));
    } else {
      yield put.resolve(classFailed(response));
    }
  } catch (error) {
    yield put.resolve(classFailed(error.message));
  }
}

function* workerSagaupcomingClassFetch({ role, type }: any) {
  console.log("workerSagaupcomingClassFetch has called");
  try {
        
    const response = yield call(request, `${APIHENDRA}/course/class/upcomingclass/${role}`, 'GET');
    
    yield put(upcommingClassSuccess(response));

  } catch (error) {
    yield put.resolve(upcommingClassFailed(error.message));
  }
}

export const watcherHome = [
  takeLatest(CLASSFETCH, workerSagaClassFetch),
  takeEvery(UPCOMINGCLASSFETCH, workerSagaupcomingClassFetch),
];
