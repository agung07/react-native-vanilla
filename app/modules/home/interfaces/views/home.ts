import { 
  NavigationScreenProp, 
  NavigationState, 
  NavigationParams 
} from 'react-navigation';
import {
  IUpcomingClassLecturerProps, 
  IUpcomingClassStudentProps,
} from '../components/upcommingClass';

export interface IHomeLecturerProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  homeFetch: boolean;
  homeAction: string;
  homeRes: any;
  homeErr: any;
  upcommingClassFetch: Function;
}

interface IProfile {
  userId: string;
  fullName: string;
  userPictureUrl: string;
  roleTypes: Array<string>;
}

export interface IHomeLecturerState {
  upcommingClass: IUpcomingClassLecturerProps;
  refreshing: boolean;
}


export interface IHomeStudentProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  homeFetch: boolean;
  homeAction: string;
  homeRes: any;
  homeErr: any;
  upcommingClassFetch: Function;
  profileFetch: Function;
}

export interface IHomeStudentState {
  upcommingClass: IUpcomingClassStudentProps;
  profile: IProfile;
  refreshing: boolean;
}