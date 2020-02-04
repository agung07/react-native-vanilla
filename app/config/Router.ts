/**
 * @author: dwi.setiyadi@gmail.com
*/
import RouterBinusAuth from '../modules/auth_binus/RouterAuth';
import { ClassLecturerStackNav, ClassNavConfig, ClassStudentStackNav } from '../modules/courses/RouterClass';
import { HomeLecturerStackNav, HomeNavConfig, HomeStudentStackNav } from '../modules/home/RouterHome';

const auth = {
  ...RouterBinusAuth,
};

const settings = {
  initialRouteName: 'Login',
  headerMode: 'none',
};

const mainModulesSettings  = {
  initialRouteName: 'Home',
  tabBarOptions: {
    showLabel: false
  }
}

const exitAppWhiteListScreen = [
  'Login',
];

export default {
  HomeLecturerStackNav,
  HomeStudentStackNav,
  HomeNavConfig,
  ClassLecturerStackNav, 
  ClassNavConfig, 
  ClassStudentStackNav,
  auth,
  settings,
  exitAppWhiteListScreen,
  mainModulesSettings
};
