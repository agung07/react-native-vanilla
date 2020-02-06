/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  UPCOMINGCLASSFETCH,
  UPCOMINGCLASSSUCCESS,
  UPCOMINGCLASSFAILURE,
} from '../ConfigHome';
import { IReducerHomeState } from '../interfaces/reducers';

const initialState: IReducerHomeState = {
  fetch: false,
  send: null,
  res: null,
  err: null,
  action: ''
};

export function ReducerHome(state = initialState, action): IReducerHomeState {
  switch (action.type) {
      case UPCOMINGCLASSFETCH:
        return {
          ...state,
          fetch: true,
          res: null,
          action: action.type,
        };
  
      case UPCOMINGCLASSSUCCESS:
        return {
          ...state,
          fetch: false,
          res: action.res,
          action: action.type,
        };
  
      case UPCOMINGCLASSFAILURE:
        return {
          ...state,
          fetch: false,
          res: null,
          err: action.err,
          action: action.type,
        };

    default:
      return state;
  }
}
