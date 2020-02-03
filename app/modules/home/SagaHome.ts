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
    // const response = yield call(request, `${APISINTONG}/classes`, 'GET');
    
    const response = yield call(request, `${APIHENDRA}/course/class/upcomingclass/student`, 'GET');
    
    let dummy: Object = response;

    if(role === 'lecturer') {
      dummy = {
        id: '123',
        classCode: 'H21JS06',
        courseName: 'Dasar Pemrograman',
        lecturerPictureUrl: 'https://placeimg.com/640/480/people',
        lecturerName: 'Dimas Nugraha S.Pd',
        classRoom: '204',
        classCampus: 'Angrek',
        DateStart: new Date(Date.now() + (15 * 1000)),
        DateEnd: new Date(Date.now() + (2 * 60 * 60 * 1000)),
        sessionProgress: {
          not_attampted: 8,
          on_progress: 29,
          Completed: 26,
        }
      }
    }
    
    yield put(upcommingClassSuccess(dummy));
    // if (response.success) {
      // callback(dummy, UPCOMINGCLASSSUCCESS)

    // } else {
    //   yield put.resolve(upcommingClassFailed(dummy));
    // }
  } catch (error) {
    yield put.resolve(upcommingClassFailed(error.message));
  }
}

export const watcherHome = [
  takeLatest(CLASSFETCH, workerSagaClassFetch),
  takeEvery(UPCOMINGCLASSFETCH, workerSagaupcomingClassFetch),
];
