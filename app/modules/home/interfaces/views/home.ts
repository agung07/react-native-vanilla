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
}

export interface IHomeStudentState {
  upcommingClass: IUpcomingClassStudentProps;
  refreshing: boolean;
}