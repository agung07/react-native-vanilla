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
    paddingBottom: 10
  },
  headerWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 9
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
    color: '#333333',
    fontSize:20,
  },
  lecturerContainer: {
    paddingVertical: 5,
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
    color: '#333333',
    fontSize: 15,
    marginLeft: 5
  },
  BodyLecturer: {
    borderTopColor: '#f2f2f2',
    borderTopWidth: 0.5,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 0.5,
    paddingVertical: 15
  },
  BodyStudent: {
    borderTopColor: '#f2f2f2',
    borderTopWidth: 0.5,
    paddingTop: 15,
    paddingBottom: 2

  },
  LabelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8.7,
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
    borderBottomWidth: 0.3,
    paddingVertical: 8
  },
  todoHeaderText: {
    color: Colors.white,
    marginBottom: 10,
    fontSize: 14.5,
  },
  arrowImageWrapper: {
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -20
  }, 
  arrowImage: {
    height: 15,
    width: 15
  },
  taskItemWrapper: {
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskItemText: {
    color: Colors.white,
  },
  taskItemTextBold: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 8
  },
  dot: {
    backgroundColor: Colors.white,
    height: 4,
    width: 4,
    borderRadius: 4,
    marginHorizontal: 12,
  },
  classProgressBarWrapper: {
    width: '100%',
    paddingTop: 17
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