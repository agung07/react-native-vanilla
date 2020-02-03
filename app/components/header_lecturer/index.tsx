import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { IHeaderLecturer } from './interfaces';
import Styles from './StyleHeaderStudent';
import CircleIcon from '../circle_icon';
import Colors from '../../styles/Colors';
import Avatar from '../avatar';
import markerGrayIcon from '../../assets/images/marker-gray.png';
import searchGrayIcon from '../../assets/images/search-gray.png';

const HeaderLecturer = ({ isHome }: IHeaderLecturer): JSX.Element => {
  return (
    <View style={Styles.container}>
    <View>
      <View style={Styles.LabelContainer}>
        <Avatar
          size={45}
          source={'https://placeimg.com/640/480/people'}
        />
        <Text style={Styles.Label}>
          Lecturer
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

export default HeaderLecturer;