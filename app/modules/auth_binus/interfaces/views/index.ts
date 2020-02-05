import { 
  NavigationScreenProp, 
  NavigationState, 
  NavigationParams 
} from 'react-navigation';

interface iFormLogin {
  username: string;
  password: string;
}

export interface ILoginState {
  form: iFormLogin;
  showLoadingModal: Boolean,
  action?: any,
  err?: any,
  res?: any,
  errorMsg: string;
}

export interface ILoginProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  action?: any;
  err?: any;
  res?: any;
  loginRequest: Function;
  getProfileRequest: Function;
}

export interface IBinusLoadingAuthState {
  showLoadingModal: boolean;
}

export interface IBinusLoadingAuthProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
