/**
 * @author: dwi.setiyadi@gmail.com
*/
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RouterConfig from '../config/Router';

const AppLecturer = createBottomTabNavigator(
  {
    Home: {
      screen: RouterConfig.HomeLecturerStackNav,
      ...RouterConfig.HomeNavConfig
    },
    Class: {
      screen: RouterConfig.ClassLecturerStackNav,
      ...RouterConfig.ClassNavConfig
    }
  },
  RouterConfig.mainModulesSettings
)

const AppStudent = createBottomTabNavigator(
  {
    Home: {
      screen: RouterConfig.HomeStudentStackNav,
      ...RouterConfig.HomeNavConfig
    },
    Class: {
      screen: RouterConfig.ClassStudentStackNav,
      ...RouterConfig.ClassNavConfig
    }
  },
  RouterConfig.mainModulesSettings
)

const Auth = createStackNavigator(RouterConfig.auth, RouterConfig.settings);

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: Auth,
      App: AppStudent
   }
  )
);
