import React from 'react';
import ScheduleView from './view';
import { createStackNavigator } from 'react-navigation-stack';
import CalendarIcon from '../../assets/images/calendar';
import Colors from '../../styles/Colors';
 
export const ScheduleLecturerStackNav = createStackNavigator(
  {
    Home:  ScheduleView
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

export const ScheduleStudentStackNav = createStackNavigator(
  {
    Home:  ScheduleView,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

export const ScheduleNavConfig = {
  navigationOptions: ({ navigation }) => {
    const { index } = navigation.state;
    const isActive =  navigation.isFocused();
    let istabBarVisible = true;

    if(index && (index > 0)) istabBarVisible = false;
    
    return {
      tabBarVisible: istabBarVisible,
      tabBarIcon: () => (
        <CalendarIcon 
          height={20}
          width={20}
          color={ isActive ? '#018dd5' : Colors.gray }
        />
      )
    }
  }
}