/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  LOGINREQUEST,
  LOGINSUCCESS,
  LOGINFAILED,
} from './ConfigAuth';

export const loginRequest = (value: any, callback?: Function) => ({ type: LOGINREQUEST, send: value, callback });
export const loginSuccess = value => ({ type: LOGINSUCCESS, res: value });
export const loginFailed = value => ({ type: LOGINFAILED, err: value });
