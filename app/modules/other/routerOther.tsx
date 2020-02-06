import React from 'react';
import OtherView from './view';
import { createStackNavigator } from 'react-navigation-stack';
import {OtherIcon} from '../../assets/images';
import Colors from '../../styles/Colors';
 
export const OtherLecturerStackNav = createStackNavigator(
  {
    Home:  OtherView
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

export const OtherStudentStackNav = createStackNavigator(
  {
    Home:  OtherView,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

export const OtherNavConfig = {
  navigationOptions: ({ navigation }) => {
    const { index } = navigation.state;
    const isActive =  navigation.isFocused();
    let istabBarVisible = true;

    if(index && (index > 0)) istabBarVisible = false;
    
    return {
      tabBarVisible: istabBarVisible,
      tabBarIcon: () => (
        <OtherIcon 
          height={20}
          width={20}
          color={ isActive ? '#018dd5' : Colors.gray }
        />
      )
    }
  }
}