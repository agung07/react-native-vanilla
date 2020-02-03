import React from 'react';
import {
  Image
} from 'react-native';
import { IAvatar } from './interfaces';

const Avatar = ({ source, size }: IAvatar): JSX.Element => (
  <Image 
    source={{uri: source}}
    style={{
      width: size ? size : 35,
      height: size ? size : 35,
      borderRadius: size ? size : 35
    }}
  />
);

export default Avatar;