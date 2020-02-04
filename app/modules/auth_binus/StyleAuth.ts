/**
 * @author: dwi.setiyadi@gmail.com
*/

import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../styles/Colors';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
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
    width,
    paddingHorizontal: 16,
    marginBottom: 22,
    marginTop: 80,
  },
  emailInput: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  buttonWrapper: {
    paddingHorizontal: 16,
    width: '100%'
  },
  buttonLogin: {
    height: 48,
    backgroundColor: '#F2941A',
    borderRadius: 5,
    width: '100%'
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
