/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  CLASSFETCH,
  CLASSSUCCESS,
  CLASSFAILURE,
  UPCOMINGCLASSFETCH,
  UPCOMINGCLASSSUCCESS,
  UPCOMINGCLASSFAILURE,
  PROFILEFETCH,
  PROFILESUCCESS,
  PROFILEFAILED
} from './ConfigHome';

export const classFetch = () => { return { type: CLASSFETCH } };
export const classSuccess = value => ({ type: CLASSSUCCESS, res: value });
export const classFailed = value => ({ type: CLASSFAILURE, err: value });

export const upcommingClassFetch = (role) => ({ type: UPCOMINGCLASSFETCH, role });
export const upcommingClassSuccess = value => ({ type: UPCOMINGCLASSSUCCESS, res: value });
export const upcommingClassFailed = value => ({ type: UPCOMINGCLASSFAILURE, res: value });

export const profileFetch = () => ({ type: PROFILEFETCH });
export const profileSuccess = (value) => ({ type: PROFILESUCCESS, res: value });
export const profileFailed = (value) => ({ type: PROFILEFAILED, err: value });


