import React, { Component } from 'react';
import {
  View, 
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {
  upcommingClassFetch
} from '../../ActionHome';
import {
  UPCOMINGCLASSSUCCESS,
  UPCOMINGCLASSFETCH,
} from '../../ConfigHome';
import {
  IHomeStudentProps,
  IHomeStudentState,
} from '../../interfaces/views/';
import { connect } from 'react-redux';
import UpcomingClass from '../../components/upcomming_class';
import StyleHome from '../../StyleHome';
import LinearGradient from 'react-native-linear-gradient';
import HeaderStudent from '../../../../components/header_student';
import ButtonNavigationGroup from '../../../../components/button_navigation_group';
import _ from '../../../../lang';

const initialState: IHomeStudentState = {
  upcommingClass: null,
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
    const { upcommingClassFetch } = this.props;
    if(typeof upcommingClassFetch == 'function') upcommingClassFetch('student')
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
    this.fetchUpcomingClass()
  }

  fetchUpcomingClass = async (): Promise<void> => {
    const { upcommingClassFetch } = this.props;
    this.setState(
      { refreshing: true },
      () => { upcommingClassFetch() }
    )
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
                        id={upcommingClass.id}
                        courseName={'English for Computer 2'}
                        classCampus={'Anggrek'}
                        classRoom={'204'}
                        classCode={upcommingClass.classCode}
                        lecturers={upcommingClass.lecturers}
                        dateStart={upcommingClass.dateStart}
                        dateEnd={upcommingClass.dateEnd}
                        resources={upcommingClass.resources}
                        sessionProgress={upcommingClass.sessionProgress}
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
)(StudentHome);