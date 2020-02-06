/**
 * @author: dwi.setiyadi@gmail.com
*/
import RouterBinusAuth from '../modules/auth_binus/RouterAuth';
import { 
  ClassLecturerStackNav, 
  ClassNavConfig, 
  ClassStudentStackNav 
} from '../modules/courses/RouterClass';
import { 
  HomeLecturerStackNav, 
  HomeNavConfig, 
  HomeStudentStackNav 
} from '../modules/home/RouterHome';
import { 
  ScheduleLecturerStackNav, 
  ScheduleNavConfig, 
  ScheduleStudentStackNav 
} from '../modules/schedule/routerSchedule';
import { 
  NotificationLecturerStackNav, 
  NotificationStudentStackNav, 
  NotificationNavConfig 
} from '../modules/notification/routerNotification';
import {
  OtherLecturerStackNav,
  OtherStudentStackNav,
  OtherNavConfig
} from '../modules/other/routerOther'

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
  ScheduleLecturerStackNav, 
  ScheduleNavConfig, 
  ScheduleStudentStackNav,
  NotificationLecturerStackNav, 
  NotificationStudentStackNav, 
  NotificationNavConfig,
  OtherLecturerStackNav,
  OtherStudentStackNav,
  OtherNavConfig,
  auth,
  settings,
  exitAppWhiteListScreen,
  mainModulesSettings,
};
