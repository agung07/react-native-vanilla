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
    const dummy = {
      id: '12',
      classCode: 'D23SW',
      courseName: "English for Computer II",
      classCampus: 'Anggrek Campus',
      classRoom: "204",
      lecturers: [
        {
          id: 20,
          lectureName: 'Ratna Dwi Paramita, MA.',
          lecturePictureUrl: 'https://placeimg.com/640/480/people'
        }
      ],
      dateStart: new Date(Date.now() + 60 * 60 * 1000),
      dateEnd: new Date(Date.now() + 3 * 60 * 60 * 1000),
      resources: [
        {
          category: 'Video',
          jumlah: 2,
          duration: 60
        },
        {
          category: 'Document',
          jumlah: 4,
          duration: 240
        }
      ],
      sessionProgress: 50,
    }
    if(Object.keys(dummy || {}).includes("classCode")) {
      yield put(upcommingClassSuccess(dummy));
    } else {
      throw new Error("error")
    }

  } catch (error) {
    console.log("masuk error")
    yield put.resolve(upcommingClassFailed(error.message));
  }
}

export const watcherHome = [
  takeLatest(CLASSFETCH, workerSagaClassFetch),
  takeEvery(UPCOMINGCLASSFETCH, workerSagaupcomingClassFetch),
];
