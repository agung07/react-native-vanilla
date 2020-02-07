/**
 * @author: dwi.setiyadi@gmail.com
*/

import { SETSCREEN } from '../../config/Constants';
import { SWITCHUSERROLE } from '../../modules/other/ConfigOther';
interface IContainerReducerState {
  action: string,
  prevScreen?: any,
  thisScreen?: any,
  role: string;
}
const initialState: IContainerReducerState = {
  action: null,
  prevScreen: null,
  thisScreen: null,
  role: null
};

export function ReducerContainer(state = initialState, action): IContainerReducerState {
  switch (action.type) {
    case SETSCREEN:
      return {
        ...state,
        action: action.screen.action,
        prevScreen: action.screen.prevScreen,
        thisScreen: action.screen.thisScreen,
      };
    case SWITCHUSERROLE: 
      console.log("SWITCHUSERROLE: ", action.role)
      return {
        ...state,
        role: action.role
      }

    default:
      return state;
  }
}
