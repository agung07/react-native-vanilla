import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../ActionOther';
import StylesGlobal from '../../../styles';

class ScheduleView extends Component<any, any> {
  /**
   *
   */
  constructor(props: any) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  async logout() {
    await this.props.logout();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={StylesGlobal.Main.statusBar}>
      <Text>Other</Text>
        <TouchableOpacity onPress={this.logout} style={{ padding: 15, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontSize: 18, color: '#fff' }}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(logout()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleView);