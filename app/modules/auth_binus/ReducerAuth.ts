/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  LOGINREQUEST,
  LOGINSUCCESS,
  LOGINFAILED,
  GETPROFILEREQUEST,
  GETPROFILESUCCESS,
  GETPROFILEFAILED,   
} from './ConfigAuth';
import { IReducerBinusAuthState } from './interfaces/reducers';

const initialState: IReducerBinusAuthState = {
  fetch: false,
  send: null,
  res: null,
  err: null,
  action: ''
};

export function ReducerAuth(state = initialState, action): IReducerBinusAuthState {
  switch (action.type) {
    case LOGINREQUEST:
      return {
        ...state,
        fetch: true,
        send: action.send,
        action: action.type,
      };

    case LOGINSUCCESS:
      return {
        ...state,
        fetch: false,
        res: action.res,
        action: action.type,
      };

    case LOGINFAILED:
      return {
        ...state,
        fetch: false,
        err: action.err,
        action: action.type,
      };
    case GETPROFILEREQUEST:
      return {
        ...state,
        fetch: true,
        send: action.send,
        action: action.type,
      };

    case GETPROFILESUCCESS:
      return {
        ...state,
        fetch: false,
        res: action.res,
        action: action.type,
      };

    case GETPROFILEFAILED:
      return {
        ...state,
        fetch: false,
        err: action.err,
        action: action.type,
      };

    default:
      return state;
  }
}
