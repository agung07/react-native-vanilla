import React from 'react';
import ViewClass from './views/index';
import GraduationHat from '../../assets/images/graduation-hat';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../../styles/Colors';

export const ClassLecturerStackNav = createStackNavigator(
  {
    Class: ViewClass.UpcomingClass
  },
  {
    initialRouteName: 'Class',
    headerMode: 'none',
  }
);

export const ClassStudentStackNav = createStackNavigator(
  {
    Class: ViewClass.UpcomingClass
  },
  {
    initialRouteName: 'Class',
    headerMode: 'none',
  }
);

export const ClassNavConfig = {
  navigationOptions: ({ navigation }) => {
    const { index } = navigation.state;
    const isActive =  navigation.isFocused();
    let istabBarVisible = true;

    if(index && (index > 0)) istabBarVisible = false;
    
    return {
      tabBarVisible: istabBarVisible,
      tabBarIcon: () => (
        <GraduationHat 
          height={25}
          width={25}
          color={ isActive ? '#018dd5' : Colors.gray }
        />
      )
    }
  }
}