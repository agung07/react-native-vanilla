/**
 * @author: dwi.setiyadi@gmail.com
*/

import React, { Component } from 'react';
import {
  View, Alert, Text, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { NormalButton } from '../../../components/button';
import { 
  ILoginProps,
  ILoginState,
} from '../interfaces/views';
import { BinusMayaLogo } from '../../../assets/images'; 
import { loginRequest } from '../ActionAuth';
import LinearGradient from 'react-native-linear-gradient';
import MyInput from '../../../components/my_input';
import LoadingModal from '../../../components/loading_modal';
import StyleAuth from '../StyleAuth';
import _ from '../../../lang';
import StylesGlobal from '../../../styles'


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
      }
    };
  }

  componentDidMount = async () => {
    await this.setState({showLoadingModal: true});

    if(this.props.res) {   
      await this.setState({showLoadingModal: false});
      this.props.navigation.navigate('App');
      return;
    }
    await this.setState({showLoadingModal: false});
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
    if(!validate.success) return ;

    this.setState({ showLoadingModal: true })
    const { loginRequest } = this.props;
    if(typeof loginRequest == 'function') {
      loginRequest(validate.data, this.loginCallback)
    }
  }

  validate = (): any => {
    const { form } = this.state;
    let result = {
      success: true,
      data: null
    }

    if(!form.username || !form.password) {
      Alert.alert(
        'Failed',
        'Username and password must be filled'
      )
      result.success = false;
    }
    if(result.success){
      result.data = {
        loginName: form.username,
        password: form.password
      }
    } 

    return result; 
  }

  loginCallback(value?: any): void {
    this.setState({ showLoadingModal: false })
    if(value.success) {
      this.props.navigation.navigate('App');
    } else {
      Alert.alert(
        'Login Failed',
        value.data
      );
    }
  }

  TemplateForm(): JSX.Element {
    const { form } = this.state;
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
          textStyle={StyleAuth.textLogin}
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
        style={[StylesGlobal.Main.statusBar, StyleAuth.background]}
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
  loginRequest: (value: Object, callback: Function) => dispatch(loginRequest(value, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
