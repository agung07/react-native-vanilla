/**
 * @author: dwi.setiyadi@gmail.com
*/

import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../styles/Colors';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  background: {
    width: '100%',
    paddingHorizontal: '2%',
    height: '100%',
  },
  body: {
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotLabel: {
    fontSize: 16,
    color: Colors.white
  },
  innerContainer: {
    marginBottom: 92,
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom:15,
    marginTop: 80,
  },
  emailInput: {
    paddingLeft: 18,
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 6,
    fontSize: 18
  },
  buttonWrapper: {
    paddingHorizontal: 10,
    width: '100%'
  },
  buttonLogin: {
    height: 48,
    backgroundColor: '#F2941A',
    borderRadius: 6,
    width: '100%'
  },
  textLogin: {
    color: Colors.white,
    fontSize: 15
  },
  headerWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  errorContainer: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
