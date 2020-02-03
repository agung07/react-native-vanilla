import React from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Home from './views/Home';
import HomeIconInActive from '../../../../assets/images/home-gray.png';
import HomeIconActive from '../../../../assets/images/home-blue.png';
import Styles from '../../../../styles';

export default {
  Home: { 
    screen: Home,
    navigationOptions: ({ navigation }) => {
      const isActive =  navigation.isFocused();
      let HomeIcon = HomeIconInActive;
      if(isActive) {
        HomeIcon = HomeIconActive;
      }
      return {
        tabBarIcon: ({ focused, horizontal, tintColor}) => (
          <Image
            source={HomeIcon}
            style={Styles.Main.navBottomIcon}
          />
        )
      }
    }
  }
};
