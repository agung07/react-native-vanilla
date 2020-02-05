import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

const StyleHeaderStudent = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  LabelContainer: {
   height: 45,
   borderRadius:45,
   flexDirection: 'row',
   backgroundColor: Colors.orange,
   justifyContent: 'space-between',
   alignItems: 'center'
  },
  Label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.white,
    marginLeft: 10,
    marginRight: 20
  },
  iconGroupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  
})

export default StyleHeaderStudent;