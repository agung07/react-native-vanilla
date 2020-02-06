import {
  call, 
  put, 
  takeLatest, 
  takeEvery,
  select
} from 'redux-saga/effects';
import {
  CLASSFETCH,
  UPCOMINGCLASSFETCH,
  PROFILEFETCH
} from './ConfigHome';
import {
  classSuccess,
  classFailed,
  upcommingClassSuccess,
  upcommingClassFailed,
  profileSuccess
} from './ActionHome';
import { APISINTONG, APIHENDRA, BASE_URL } from '../../config/Api';
import { request } from '../../utilities/StoreApi';

const getTokenState = (state) => state.auth.res;

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
    console.log("response: ", response)
    yield put(upcommingClassSuccess(response));

  } catch (error) {
    yield put.resolve(upcommingClassFailed(error.message));
  }
}

function* workerSagaProfileFetch(): any {
  console.log("workerSagaupProfileFetch");
  try {
    const Token = yield select(getTokenState);
    
    // const response = yield call(request, `${BASE_URL}/Profile`, 'GET', null, Token);
    // console.log("response: ", response)

    const dummy = {
      userId: '2sKkmsd8239',
      fullName: 'Agung Perdana Gumelar',
      userPictureUrl: 'https://placeimg.com/640/480/people',
      roleTypes: ["student", "instructor"],
    }
    yield put.resolve(profileSuccess(dummy));

  } catch (err) {

  }
}

export const watcherHome = [
  takeLatest(CLASSFETCH, workerSagaClassFetch),
  takeEvery(UPCOMINGCLASSFETCH, workerSagaupcomingClassFetch),
  takeEvery(PROFILEFETCH, workerSagaProfileFetch),
];
