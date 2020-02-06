import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import StylesGlobal from '../../../styles';

class NotificationView extends Component<any, any> {
  /**
   *
   */
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={StylesGlobal.Main.statusBar}>
        <Text>Notification</Text>
      </View>
    )
  }
}

export default NotificationView;