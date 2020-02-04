/**
 * @author: dwi.setiyadi@gmail.com
*/

import React, { Component } from 'react';
import {
  View, Alert, AsyncStorage, Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import MyStatusBar from '../../../components/my_status_bar';
import { NormalButton } from '../../../components/button';
import MyInput from '../../../components/my_input';
import LoadingModal from '../../../components/loading_modal';
import StyleAuth from '../StyleAuth';
import { loginRequest, getProfileRequest } from '../ActionAuth';
import _ from '../../../lang';
import { 
  ILoginProps,
  ILoginState,
} from '../interfaces/views';
import {
  setToken,
  getToken
} from '../../../config/Helpers'
import { BinusMayaLogo } from '../../../assets/images'; 
import { TouchableOpacity } from 'react-native-gesture-handler';


class Login extends Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    //JSX
    this.TemplateForm = this.TemplateForm.bind(this);
    this.TempalteButton = this.TempalteButton.bind(this);

    //VOID
    this.onFormValueChange = this.onFormValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loginCallback = this.loginCallback.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      showLoadingModal: false,
      action: this.props.action,
      err: this.props.err,
      res: this.props.res,
      form: {
        username: '',
        password: ''
      },
      errorMsg: ''
    };
  }
  componentDidMount() {
    this.setState({showLoadingModal: false});
    this.props.getProfileRequest('student')
    // this.setState(
    //   {showLoadingModal: true},
    //   () => getToken((res) => {
    //     if(res) {
    //       this.props.navigation.navigate('App')
    //     }
    //     this.setState({showLoadingModal: false});
    //   })
    //   );
  }

  componentWillUnmount() {
    this.setState({showLoadingModal: false});
  }

  onFormValueChange(value, name): void {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }

  onSubmit(): void {
    const validate = this.validate();
    if(!validate) return ;

    this.setState({ showLoadingModal: true })
    const { onRequest } = this.props;
    if(typeof onRequest == 'function') {
      onRequest(this.state.form, this.loginCallback)
    }
  }

  validate = (): boolean => {
    const { form } = this.state;
    let success = true;
    let errorMsg = '';

    if(!form.username || !form.password) {
      errorMsg = 'Username and password must be fill';
      success = false;
    }

    this.setState({ errorMsg: errorMsg});

    return success; 
  }

  loginCallback(value?: any): void {
    const { getProfileRequest } = this.props;
    this.setState({ showLoadingModal: false })
    if(value) {
      getProfileRequest('student')
      // setTimeout(
      //  () => setToken(value.token, (response) => {
      //     this.setState({ showLoadingModal: false })
      //     if(response) {
      //       this.props.navigation.navigate('App')
      //     } else {
      //       alert("failure")
      //     }
      //   }),
      //   1000
      // ) 
    } else {
      this.setState({ showLoadingModal: false })
      alert("login gagal, username atau password salah");

    }
    
  }

  TemplateForm(): JSX.Element {
    const { errorMsg, form } = this.state;
    const { username, password } = form;
    return (
      <View
        style={StyleAuth.formContainer}
      >
        <MyInput
          onChangeText={text => this.onFormValueChange(text, 'username')}
          value={username}
          placeholder={_('Username')}
          autoCapitalize="none"
          autoCorrect={false}
          style={StyleAuth.emailInput}
        />
        <MyInput
          onChangeText={text => this.onFormValueChange(text, 'password')}
          value={password}
          placeholder={_('Sandi')}
          secureTextEntry
          style={StyleAuth.emailInput}
        />
        {
          errorMsg !== '' && 
          <View style={StyleAuth.errorContainer}>
            <Text style={StyleAuth.errorLabel}>{errorMsg}</Text>
          </View>
        }
      </View>
    );
  }
  TemplateHeader(): JSX.Element {
    return (
      <View style={StyleAuth.headerWrapper}>
        <BinusMayaLogo />
      </View>
    )
  }

  TempalteButton(): JSX.Element {
    return (
      <View style={StyleAuth.buttonWrapper}>
        <NormalButton
          onPress={() => this.onSubmit()}
          text={'login'}
          containerStyle={StyleAuth.buttonLogin}
        />
      </View>
    )
  }

  render() {
    return (
      <LinearGradient 
        colors={['#1C98D6', '#863A92']} 
        start={{x:0, y: 0}} 
        end={{ x: 1, y: 1 }} 
        style={{ height: '100%', width: '100%'}}
      >
        <View style={StyleAuth.body}>
          {this.TemplateHeader()}
          {this.TemplateForm()}
          {this.TempalteButton()}
        </View>
        <View style={StyleAuth.footer}>
          <TouchableOpacity>
            <Text style={StyleAuth.forgotLabel}>Forgot Your Password?</Text>
          </TouchableOpacity>
        </View>
        <LoadingModal  show={this.state.showLoadingModal} />
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state: any) => ({
  fetch: state.auth.fetch,
  res: state.auth.res,
  err: state.auth.err,
  action: state.auth.action,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequest: (value: Object, callback: Function) => dispatch(loginRequest(value, callback)),
  getProfileRequest: (value: string) => dispatch(getProfileRequest(value)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
