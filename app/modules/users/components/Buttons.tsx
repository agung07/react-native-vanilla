/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import StyleNews from '../StyleUsers';
import { ISearchButton } from '../interfaces/components';

export const SearchButton = ({
  onPress, label, containerStyle, labelStyle, ...props
}: ISearchButton): JSX.Element => (
  <TouchableOpacity
    style={[StyleNews.searchButtonContainer, containerStyle]}
    onPress={onPress}
    {...props}
  >
    <Text style={[StyleNews.searchButtonText, labelStyle]}>
      {label}
    </Text>
  </TouchableOpacity>
);
