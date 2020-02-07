import {
  call, 
  put, 
  takeLatest, 
  takeEvery,
  select
} from 'redux-saga/effects';
import {
  UPCOMINGCLASSFETCH,
  PROFILEFETCH
} from './ConfigHome';
import {
  upcommingClassSuccess,
  upcommingClassFailed,
  profileSuccess,
  profileFailed
} from './ActionHome';
import { APISINTONG, APIHENDRA, BASE_URL, PROFILE_SERVICE, COURSE_SERVICE } from '../../config/Api';
import { request } from '../../utilities/StoreApi';

const getTokenState = (state) => state.auth.res;

function* workerSagaupcomingClassFetch({ role, type }: any) {
  try {
    const Token = yield select(getTokenState);
    
    const response = yield call(request, `${COURSE_SERVICE}/ClassSession/Upcoming/${role}`, 'GET', null, Token);

    if(response.status === 200){
      yield put(upcommingClassSuccess(response.data));
    }else{
      throw new Error(response.data)
    }
  } catch (error) {
    yield put.resolve(upcommingClassFailed(error.message));
  }
}

function* workerSagaProfileFetch(): any {
  try {
    const Token = yield select(getTokenState);
    
    const response = yield call(request, `${PROFILE_SERVICE}/Profile`, 'GET', null, Token);
    if(response.status === 200) {
      const res = {
        ...response.data,
        role: response.data.roleTypes[0]
      }
      yield put.resolve(profileSuccess(res));
    } else {
      throw new Error(response.data)
    }

  } catch (error) {
    yield put.resolve(profileFailed(error.message));
  }
}

export const watcherHome = [
  takeEvery(UPCOMINGCLASSFETCH, workerSagaupcomingClassFetch),
  takeEvery(PROFILEFETCH, workerSagaProfileFetch),
];
