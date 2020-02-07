import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Picker
} from 'react-native';
import { connect } from 'react-redux';
import { logout, switchUserRole } from '../ActionOther';
import StylesGlobal from '../../../styles';

class ScheduleView extends Component<any, any> {
  /**
   *
   */
  constructor(props: any) {
    super(props);
    this.logout = this.logout.bind(this);
    this.switchUserRole = this.switchUserRole.bind(this);
  }

  async logout() {
    await this.props.logout();
    this.props.navigation.navigate('Auth');
  }

  switchUserRole = (role) => {
    this.props.switchUserRole(role);
  }

  render() {
    const profile = this.props.profile || {};
    return (
      <View style={StylesGlobal.Main.statusBar}>
        <Text>Other</Text>
        <View style={{
          marginVertical: 80
        }}>
          <Picker
            selectedValue={profile.role}
            style={{height: 50, width: '100%'}}
            onValueChange={(itemValue, itemIndex) =>  this.switchUserRole(itemValue) }
            >
              {
                (profile.roleTypes || []).map((role, index) => <Picker.Item key={index} label={role} value={role} /> )
              }
          </Picker>
        </View>
        <TouchableOpacity onPress={this.logout} style={{ padding: 15, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontSize: 18, color: '#fff' }}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state: any) => ({
  profile: state.home.profile.res
});

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(logout()),
  switchUserRole: (role: string) => dispatch(switchUserRole(role))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleView);