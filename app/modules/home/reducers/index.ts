import { combineReducers } from 'redux';
import { ReducerProfile } from './ReducerProfile';
import { ReducerHome } from './ReducerHome';

export default combineReducers({
  main: ReducerHome,
  profile: ReducerProfile,
})
