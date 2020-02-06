import React from 'react';
import NotificationView from './view';
import { createStackNavigator } from 'react-navigation-stack';
import { NotificationIcon } from '../../assets/images';
import Colors from '../../styles/Colors';
 
export const NotificationLecturerStackNav = createStackNavigator(
  {
    Home:  NotificationView
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

export const NotificationStudentStackNav = createStackNavigator(
  {
    Home:  NotificationView,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

export const NotificationNavConfig = {
  navigationOptions: ({ navigation }) => {
    const { index } = navigation.state;
    const isActive =  navigation.isFocused();
    let istabBarVisible = true;

    if(index && (index > 0)) istabBarVisible = false;
    
    return {
      tabBarVisible: istabBarVisible,
      tabBarIcon: () => (
        <NotificationIcon 
          height={20}
          width={20}
          color={ isActive ? '#018dd5' : Colors.gray }
        />
      )
    }
  }
}