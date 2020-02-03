import React from 'react';
import Colors from '../../styles/Colors';
import LecturerHome from './views/lecturer';
import StudentHome from './views/student';
import HomeIcon from '../../assets/images/home';
import { createStackNavigator } from 'react-navigation-stack';

export const HomeLecturerStackNav = createStackNavigator(
  {
    Home:  LecturerHome.Main
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

export const HomeStudentStackNav = createStackNavigator(
  {
    Home:  StudentHome.Main,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

export const HomeNavConfig = {
  navigationOptions: ({ navigation }) => {
    const { index } = navigation.state;
    const isActive =  navigation.isFocused();
    let istabBarVisible = true;

    if(index && (index > 0)) istabBarVisible = false;
    
    return {
      tabBarVisible: istabBarVisible,
      tabBarIcon: () => (
        <HomeIcon 
          height={25}
          width={25}
          color={ isActive ? '#018dd5' : Colors.gray }
        />
      )
    }
  }
}