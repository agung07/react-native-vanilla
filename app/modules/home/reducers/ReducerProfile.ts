/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  PROFILEFETCH,
  PROFILESUCCESS,
  PROFILEFAILED
} from '../ConfigHome';
import { SWITCHUSERROLE } from '../../other/ConfigOther';
import { IReducerProfileState } from '../interfaces/reducers';

const initialState: IReducerProfileState = {
  fetch: false,
  send: null,
  res: null,
  err: null,
  action: ''
};

export function ReducerProfile(state = initialState, action): IReducerProfileState {
  switch (action.type) {
      case PROFILEFETCH:
        return {
          ...state,
          fetch: true,
          res: null,
          action: action.type,
        };
  
      case PROFILESUCCESS:
        return {
          ...state,
          fetch: false,
          res: action.res,
          action: action.type,
        };
  
      case PROFILEFAILED:
        return {
          ...state,
          fetch: false,
          res: null,
          err: action.err,
          action: action.type,
        };
      case SWITCHUSERROLE : 
        let profile = state.res;
        console.log("profile: ", profile)
        profile.role = action.role;
        console.log("new profile: ", profile)
        return {
          ...state,
          action: action.type,
          res: profile,
        }

    default:
      return state;
  }
}