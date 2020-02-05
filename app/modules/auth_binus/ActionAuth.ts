/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  LOGINREQUEST,
  LOGINSUCCESS,
  LOGINFAILED,
  GETPROFILEFAILED,
  GETPROFILEREQUEST,
  GETPROFILESUCCESS
} from './ConfigAuth';

export const loginRequest = (value: any, callback?: Function) => ({ type: LOGINREQUEST, send: value, callback });
export const loginSuccess = value => ({ type: LOGINSUCCESS, res: value });
export const loginFailed = value => ({ type: LOGINFAILED, err: value });

export const getProfileRequest = () => ({ type: GETPROFILEREQUEST });
export const getProfileSuccess = (value: Object) => ({ type: GETPROFILESUCCESS, value });
export const getProfileFailed = (value: any) => ({ type: GETPROFILEFAILED, value }); 
