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
  showLoadingModal: boolean,
  action?: any,
  err?: any,
  res?: any,
}

export interface ILoginProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  action?: any;
  err?: any;
  res?: any;
  loginRequest: Function;
}

export interface IBinusLoadingAuthState {
  showLoadingModal: boolean;
}

export interface IBinusLoadingAuthProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
