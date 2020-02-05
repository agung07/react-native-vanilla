import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { IHeader } from './interfaces';
import Styles from './StyleHeader';
import CircleIcon from '../circle_icon';
import Colors from '../../styles/Colors';
import Avatar from '../avatar';
import markerGrayIcon from '../../assets/images/marker-gray.png';
import searchGrayIcon from '../../assets/images/search-gray.png';

const Header = ({ isHome, role, pictureUrl }: IHeader): JSX.Element => {
  let backgroundColor = Colors.white;
  let textColor = Colors.black;
  if(role === 'lecturer') {
    backgroundColor = Colors.orange;
    textColor = Colors.white;
  }
  return (
    <View style={Styles.container}>
    <View>
      <View style={[Styles.LabelContainer, { backgroundColor: backgroundColor }]}>
        <Avatar
          size={45}
          source={pictureUrl}
        />
        <Text style={[Styles.Label, { color: textColor }]}>
          {role}
        </Text>
      </View>
    </View>
    <View style={Styles.iconGroupContainer}>
      {
        isHome && 
       <TouchableOpacity>
        <CircleIcon 
          icon={markerGrayIcon}
          stylesContainer={{
            backgroundColor: Colors.white,
            marginRight: 10
          }}
          stylesIcon={{
            width: 20,
            height: 20,
          }}
        />
       </TouchableOpacity> 
      }
      <TouchableOpacity>
        <CircleIcon 
          icon={searchGrayIcon}
          stylesContainer={{
            backgroundColor: Colors.white
          }}
          stylesIcon={{
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default Header;