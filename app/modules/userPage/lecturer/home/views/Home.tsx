import React, { Component } from 'react';
import {
  View, 
  Text,
  ScrollView,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { 
  ButtonWithIcon, 
  Post, 
  OnGoingClass, 
  UpCommingClass 
} from '../../../../home/components/';
import StyleHome from '../../../../home/StyleHome';
import LinearGradient from 'react-native-linear-gradient';
import HeaderStudent from '../../../../../components/header_student';
import ButtonNavigationGroup from '../../../../../components/button_navigation_group';
import _ from '../../../../../lang';
import {
  upcommingClassFetch
} from '../../../../home/ActionHome';
import {
  UPCOMINGCLASSSUCCESS,
  UPCOMINGCLASSFETCH,
} from '../../../../home/ConfigHome';


class LecturerHome extends Component<any, any> {

  constructor(props: any) {
    super(props)

    this.TemplateBody = this.TemplateBody.bind(this);
    this.fetchUpcomingClass = this.fetchUpcomingClass.bind(this);
    this.callbackRequest = this.callbackRequest.bind(this);

    this.state = {
      upcommingClass: null
    }
  }

  componentDidMount() {
    const { upcommingClassFetch } = this.props;
    if(typeof upcommingClassFetch == 'function') upcommingClassFetch(this.callbackRequest)
  }
  static getDerivedStateFromProps(props, state){
    if(props.homeAction === UPCOMINGCLASSSUCCESS || props.homeAction === UPCOMINGCLASSFETCH) {
      return {
        ...state,
        upcommingClass: props.homeRes
      }
    }
    return state;
  }

  callbackRequest = (response?: any, context?: string): void => {
    if(props.homeAction === UPCOMINGCLASSSUCCESS) {
      this.setState({
        ...this.state,
        upcommingClass: props.homeRes
      })
    }
    console.log(context);
    console.log(response);
  }

  TemplateHeader = (): JSX.Element => {
    return  <View style={StyleHome.headerWrapper}>
              <HeaderStudent 
                isHome
              />
              <View style={StyleHome.headerTextWrapper}>
                <Text style={StyleHome.headerTextGreeting}>{_('Good Morning')},</Text>
                <Text style={StyleHome.headerTextName}>{'No Name'}</Text>
              </View>
            </View>
  }

  TemplateBody = (): JSX.Element => {
    const {upcommingClass} = this.state;
    console.log("upcommingClass: ", upcommingClass)
    return (
      <>
        <ButtonNavigationGroup />
        {
          upcommingClass && 
          <UpCommingClass 
            data={upcommingClass}
            fetchData={this.fetchUpcomingClass}
          />
        }
      </>
    )
  }

  fetchUpcomingClass = (): void => {
    console.log("ngambil ke belakang")
    const { upcommingClassFetch } = this.props;
    if(typeof upcommingClassFetch == 'function'){
      upcommingClassFetch()
    } 
  }
  
  render() { 
    return (
      <ScrollView
        contentContainerStyle={StyleHome.container}
      >
        <LinearGradient 
          colors={['#1C9AD7', '#7F3485']} 
          style={StyleHome.linierGradient}
        >
          {this.TemplateHeader()}
          {this.TemplateBody()}
        </LinearGradient>
      </ScrollView>
    )
  }
}
const mapStateToProps = (state: any): any => ({
  homeFetch: state.home.fetch,
  homeAction: state.home.action,
  homeRes: state.home.res,
  homeErr: state.home.err,
})
const mapDispacthToProps = (dispatch: any): any => ({
  upcommingClassFetch: (callback: Function) => dispatch(upcommingClassFetch(callback)),
})
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(LecturerHome);