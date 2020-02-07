import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { secondsToDHMS } from '../../../../utilities/helpers';
import Styles from './StyleUpCommingClass';
import { IResourcesContainer } from '../../interfaces/components/upcommingClass';

export default  ({ duration, jumlah, type }: IResourcesContainer): JSX.Element => {

  const durationConverted = secondsToDHMS(duration);
  const { days, hours, minutes, seconds } = durationConverted;
  let durations = seconds + 's';
  
  if(minutes) durations = `${minutes > 9 ? minutes : `0${minutes}`} m`;
  if(hours) durations = `${hours}h ${minutes > 9 ? minutes : `0${minutes}`}m`;
  if(days) durations = `${days}d ${hours > 9 ? hours : `0${hours}` }h`;
  
  return (
    <View style={Styles.taskItemWrapper}>
      <Text style={Styles.taskItemTextBold}>
        {jumlah}
      </Text>
      <Text style={Styles.taskItemText}>
        {type}
      </Text>
      <View 
        style={Styles.dot}
      />
      <Text style={Styles.taskItemText}>
        {durations}
      </Text>
    </View>
  )
}