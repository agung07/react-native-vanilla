import React from 'react';
import { Text } from 'react-native';
import Styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { IGradientLabel } from './interfaces';

const GradientLabel = ({ colors, start, end, styleContainer, styleText, label }: IGradientLabel): JSX.Element => (
    <LinearGradient 
    colors={
      colors 
      ? colors 
      : ['#3A28B0', '#CB94D9']
    } 
    start={
      start 
      ? start
      : { x: 0, y: 0}
    } 
    end={
      end
      ? end
      : { x: 1, y: 0}}
    style={[Styles.container, styleContainer]}
  >
    <Text style={[Styles.label, styleText]}>{label}</Text>
  </LinearGradient>
)

export default GradientLabel;