import { StyleSheet } from 'react-native';
import Colors from '../../../../styles/Colors';


export default StyleSheet.create({
  container: {
    width: '100%',
    // height: 500,
    borderRadius: 5,
    backgroundColor: Colors.white,
    marginTop: 15,
    padding: 15,
  },
  classInfo: {
    // borderBottomColor: Colors.gray,
    // borderBottomWidth: 0.5,
    paddingBottom: 10
  },
  headerWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  duration: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  watchIcon: {
    height: 20,
    width: 20
  },
  durationLabel: {
    color: Colors.gray,
    marginLeft: 5
  },
  classId: {
    marginTop: 10,
    color: Colors.black,
    fontWeight: 'bold'
  },
  className: {
    marginTop: 10,
    color: Colors.black,
    fontSize:20
  },
  lecturerInfoWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5
  },
  lecturerImage: {
    height: 35,
    width: 35,
    borderRadius: 35
  },
  lecturerName: {
    color: Colors.black,
    fontSize: 17,
    marginLeft: 5
  },
  BodyLecturer: {
    borderTopColor: Colors.gray,
    borderTopWidth: 0.5,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 0.5,
    paddingVertical: 15
  },
  BodyStudent: {
    borderTopColor: Colors.gray,
    borderTopWidth: 0.5,
    paddingVertical: 15,

  },
  LabelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3
  },
  Icon: {
    height: 15,
    width: 15,
    borderRadius: 15,
    padding: 3,
    borderColor: Colors.gray,
    borderWidth: 0.3
  },
  Label: {
    color: Colors.black,
    marginLeft: 5
  },
  Wrapper: {
    position: 'relative',
    width: '100%'
  },
  todoWrapper: {
    width: '100%',
    // minHeight: 200,
    borderRadius: 5,
    padding: 15,
    marginTop: 10,
  },
  todoHeaderWrapper: {
    borderBottomColor: Colors.white,
    borderBottomWidth: 0.5,
  },
  todoHeaderText: {
    color: Colors.white,
    marginBottom: 10,
    fontSize: 15,
  },
  arrowImageWrapper: {
    width: 35,
    height: 35,
    borderRadius: 35,
    backgroundColor: Colors.white,
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -17
  }, 
  arrowImage: {
    height: 20,
    width: 20
  },
  taskItemWrapper: {
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskItemText: {
    color: Colors.white,
    fontSize: 15,
  },
  taskItemTextBold: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8
  },
  dot: {
    backgroundColor: Colors.white,
    height: 10,
    width: 10,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  classProgressBarWrapper: {
    width: '100%',
    paddingTop: 10
  },
  classProgressLabelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  classProgressLabel: {
    color: Colors.black,
    fontSize: 12
  },
  progressBar: {
    backgroundColor: '#D8D8D8',
    width: '100%',
    height: 4,
    position: 'relative',
    marginTop: 5,
  },
  progressBarFilled: {
    backgroundColor: Colors.orange,
    height: '100%',
  }
})