import React, { Component } from 'react';
import {
  View, 
  Text,
  ScrollView,
  RefreshControl
} from 'react-native';
import {
  upcommingClassFetch
} from '../../ActionHome';
import {
  UPCOMINGCLASSSUCCESS,
  UPCOMINGCLASSFETCH,
} from '../../ConfigHome';
import {
  IHomeLecturerProps,
  IHomeLecturerState,
} from '../../interfaces/views';
import { connect } from 'react-redux';
import UpcomingClass from '../../components/upcomming_class';
import StyleHome from '../../StyleHome';
import LinearGradient from 'react-native-linear-gradient';
import HeaderLecturer from '../../../../components/header_lecturer';
import ButtonNavigationGroup from '../../../../components/button_navigation_group';
import _ from '../../../../lang';

const initialState: IHomeLecturerState = {
  upcommingClass: null,
  refreshing: false,
}

class LecturerHome extends Component<IHomeLecturerProps, IHomeLecturerState> {
  constructor(props: IHomeLecturerProps) {
    super(props)

    this.TemplateBody = this.TemplateBody.bind(this);
    this.fetchUpcomingClass = this.fetchUpcomingClass.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    
    this.state = initialState;
  }

  componentDidMount() {
    const { upcommingClassFetch } = this.props;
    if(typeof upcommingClassFetch == 'function') upcommingClassFetch("lecturer")
  }

  static getDerivedStateFromProps(props, state){
    if(props.homeAction === UPCOMINGCLASSSUCCESS || props.homeAction === UPCOMINGCLASSFETCH) {
      return {
        ...state,
        refreshing: false,
        upcommingClass: props.homeRes
      }
    }
    return state;
  }

  onRefresh = async (): Promise<void> => {
    await this.setState({ refreshing: true });
    setTimeout(
      () => { this.setState({ refreshing: false }) },
      2000
    )
  }

  fetchUpcomingClass = async (): Promise<void> => {
    const { upcommingClassFetch } = this.props;
    this.setState(
      { refreshing: true },
      () => { upcommingClassFetch() }
    )
  }

  onUpcomingClassPress = (): void => {
    alert("onUpcomingClassPress")
  }

  TemplateHeader = (): JSX.Element => {
    return  <View style={StyleHome.headerWrapper}>
              <HeaderLecturer 
                isHome
              />
              <View style={StyleHome.headerTextWrapper}>
                <Text style={StyleHome.headerTextGreeting}>{_('Good Morning')},</Text>
                <Text style={StyleHome.headerTextName}>{'No Name'}</Text>
              </View>
              <ButtonNavigationGroup />
            </View>
  }

  TemplateBody = (): JSX.Element => {
    const {upcommingClass} = this.state;
    return (
      <>
        {
          (() => {
            if(Object.keys(upcommingClass || {}).length > 0) {
              return  (
                <UpcomingClass.Lecturer 
                  id={upcommingClass.id}
                  classCode={upcommingClass.classCode}
                  courseName={upcommingClass.courseName}
                  classCampus={upcommingClass.classCampus}
                  classRoom={upcommingClass.classCampus}
                  dateStart={upcommingClass.dateStart}
                  dateEnd={upcommingClass.dateEnd}
                  sessionProgress={upcommingClass.sessionProgress}
                  onPress={this.onUpcomingClassPress}
                />
              )
            }
          })()
        }
      </>
    )
  }
  
  render() { 
    const { refreshing } = this.state;
    return (
      <ScrollView
        contentContainerStyle={StyleHome.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />
        }
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
  upcommingClassFetch: (role?: string) => dispatch(upcommingClassFetch(role)),
})

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(LecturerHome);