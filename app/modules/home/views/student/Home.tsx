import React, { Component } from 'react';
import {
  View, 
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {
  upcommingClassFetch,
  profileFetch
} from '../../ActionHome';
import {
  UPCOMINGCLASSSUCCESS,
  UPCOMINGCLASSFETCH,
  PROFILEFETCH,
  PROFILESUCCESS
} from '../../ConfigHome';
import {
  IHomeStudentProps,
  IHomeStudentState,
} from '../../interfaces/views/';
import { connect } from 'react-redux';
import UpcomingClass from '../../components/upcomming_class';
import Header from '../../../../components/header';
import StyleHome from '../../StyleHome';
import LinearGradient from 'react-native-linear-gradient';
import ButtonNavigationGroup from '../../../../components/button_navigation_group';
import _ from '../../../../lang';
import StylesGlobal from '../../../../styles';

const initialState: IHomeStudentState = {
  upcommingClass: null,
  profile: null,
  refreshing: false,

}

class StudentHome extends Component<IHomeStudentProps, IHomeStudentState> {

  constructor(props: IHomeStudentProps) {
    super(props)

    this.TemplateBody = this.TemplateBody.bind(this);
    this.fetchUpcomingClass = this.fetchUpcomingClass.bind(this);
    
    this.state = initialState;
  }

  componentDidMount() {
    const { upcommingClassFetch, profileFetch } = this.props;
    profileFetch();
    if(typeof upcommingClassFetch == 'function') upcommingClassFetch('student')
  }

  static getDerivedStateFromProps(props, state){
    if(props.homeAction === UPCOMINGCLASSSUCCESS || props.profileAction === PROFILESUCCESS) {
      return {
        ...state,
        refreshing: false,
        upcommingClass: props.homeRes,
        profile: props.profileRes
      }
    } 
    return state;
  }

  onRefresh = async (): Promise<void> => {
    this.fetchUpcomingClass()
  }

  fetchUpcomingClass = async (): Promise<void> => {
    const { upcommingClassFetch } = this.props;
    this.setState(
      { refreshing: true },
      () => { upcommingClassFetch('student') }
    )
  }

  TemplateHeader = (): JSX.Element => {
    const profile = this.state.profile || {};
    return  <View style={StyleHome.headerWrapper}>
              <Header 
                isHome
                role={'student'}
                pictureUrl={profile.userPictureUrl || 'https://placeimg.com/640/480/people'}
              />
              <View style={StyleHome.headerTextWrapper}>
                <Text style={StyleHome.headerTextGreeting}>{_('Good Morning')},</Text>
                <Text style={StyleHome.headerTextName}>{profile.fullName || 'No Name'}</Text>
              </View>
              <ButtonNavigationGroup />
            </View>
  }

  TemplateBody = (): JSX.Element => {
    const { upcommingClass } = this.state;
    return (
      <>
        {
          (() => {
            if(Object.keys(upcommingClass || {}).length > 0) {
              return  <UpcomingClass.Student 
                        {...upcommingClass}
                        // id={upcommingClass.id}
                        // courseName={upcommingClass.courseName}
                        // classCampus={upcommingClass.classCampus}
                        // classRoom={upcommingClass.classRoom}
                        // classCode={upcommingClass.classCode}
                        // lecturers={upcommingClass.lecturers}
                        // dateStart={upcommingClass.dateStart}
                        // dateEnd={upcommingClass.dateEnd}
                        // resources={upcommingClass.resources}
                        // sessionProgress={upcommingClass.sessionProgress}
                        fetchData={this.fetchUpcomingClass}
                        onPress={() => {alert("onPress")}}
                      />
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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />
        }
        contentContainerStyle={StyleHome.container}
      >
        <LinearGradient 
          colors={['#1C9AD7', '#7F3485']} 
          style={[StylesGlobal.Main.statusBar, StyleHome.linierGradient]}
        >
          {this.TemplateHeader()}
          {this.TemplateBody()}
        </LinearGradient>
      </ScrollView>
    )
  }
}
const mapStateToProps = (state: any): any => ({
  homeFetch: state.home.main.fetch,
  homeAction: state.home.main.action,
  homeRes: state.home.main.res,
  homeErr: state.home.main.err,
  
  profileFetch: state.home.profile.fetch,
  profileAction: state.home.profile.action,
  profileRes: state.home.profile.res,
  profileErr: state.home.profile.err,
})
const mapDispacthToProps = (dispatch: any): any => ({
  upcommingClassFetch: (role?: string) => dispatch(upcommingClassFetch(role)),
  profileFetch: () => dispatch(profileFetch())
})
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(StudentHome);