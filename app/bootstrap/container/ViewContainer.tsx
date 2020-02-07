/**
 * @author: dwi.setiyadi@gmail.com
*/

import React, { Component } from 'react';
import {
  BackHandler, View, Alert, Platform, StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { RouterStudent, RouterLecturer } from '../Router';
import RouterConfig from '../../config/Router';
import NavigationService from '../NavigationService';
import { setScreen } from './ActionContainer';
import { SWITCHUSERROLE } from '../../modules/other/ConfigOther'
import _ from '../../lang';

import Styles from '../../styles';

class ViewContainer extends Component<any, any> {
  state = {
    action: this.props.action,
    prevScreen: this.props.prevScreen,
    thisScreen: this.props.thisScreen,
    role: ''
  }

  constructor(props: any) {
    super(props)
    this.Router = this.Router.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    let profileRes = nextProps.profileRes || {};
    if (nextProps.action === 'Navigation/NAVIGATE' || nextProps.action === 'Navigation/BACK' || nextProps.profileAction === SWITCHUSERROLE) {
      return {
        action: nextProps.action,
        prevScreen: nextProps.prevScreen,
        thisScreen: nextProps.thisScreen,
        role: profileRes.role
      };
    }

    return null;
  }

  componentDidUpdate() {
    if (this.state.action === 'Navigation/BACK') {
      const exitAppWhiteListScreen = RouterConfig.exitAppWhiteListScreen.indexOf(this.state.thisScreen);
      if (exitAppWhiteListScreen >= 0) {
        if (Platform.OS === 'ios') {
          NavigationService.navigate(this.state.prevScreen);
        } else if (Platform.OS === 'android') {
          Alert.alert(
            '',
            _('Anda yakin ingin keluar aplikasi?'),
            [
              {
                text: _('Tidak'),
                onPress: () => {
                  NavigationService.navigate(this.state.prevScreen);
                },
              },
              {
                text: _('Ya'),
                onPress: () => {
                  BackHandler.exitApp();
                },
              },
            ],
          );
        }
      }
    }
  }

  Router = (): JSX.Element => {
    const profile = this.props.profileRes || {};
    if(profile.role === 'Instructor') {
      return (
        <RouterLecturer
          ref={(ref) => {
            NavigationService.setTopLevelNavigator(ref);
          }}
          onNavigationStateChange={(prevState, currentState, action) => {
            if (action.type === 'Navigation/NAVIGATE' || action.type === 'Navigation/BACK') {
              this.props.setScreen({
                action: action.type,
                prevScreen: NavigationService.getRouteName(prevState),
                thisScreen: NavigationService.getRouteName(currentState),
              });
            }
          }}
        />
      )
    } else if(profile.role === 'Student') {
      return (
        <RouterStudent
          ref={(ref) => {
            NavigationService.setTopLevelNavigator(ref);
          }}
          onNavigationStateChange={(prevState, currentState, action) => {
            if (action.type === 'Navigation/NAVIGATE' || action.type === 'Navigation/BACK') {
              this.props.setScreen({
                action: action.type,
                prevScreen: NavigationService.getRouteName(prevState),
                thisScreen: NavigationService.getRouteName(currentState),
              });
            }
          }}
        />
      )
    }

    return (
      <RouterStudent
        ref={(ref) => {
          NavigationService.setTopLevelNavigator(ref);
        }}
        onNavigationStateChange={(prevState, currentState, action) => {
          if (action.type === 'Navigation/NAVIGATE' || action.type === 'Navigation/BACK') {
            this.props.setScreen({
              action: action.type,
              prevScreen: NavigationService.getRouteName(prevState),
              thisScreen: NavigationService.getRouteName(currentState),
            });
          }
        }}
      />
    )
    
  }

  render() {
    return (
      <View style={Styles.Main.container}>
        <StatusBar translucent={true} barStyle='light-content' backgroundColor={'transparent'} />
        {this.Router()}
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  action: state.bootstrap.action,
  prevScreen: state.bootstrap.prevScreen,
  thisScreen: state.bootstrap.thisScreen,
  profileRes: state.home.profile.res,
  profileAction: state.home.profile.action
});
const mapDispatchToProps = (dispatch: any) => ({
  setScreen: value => dispatch(setScreen(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);
