import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { IUpcomingClassStudentProps } from '../../interfaces/components/upcommingClass';
import _ from '../../../../lang';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './StyleUpCommingClass';
import countDownTimer from '../../../../utilities/helpers/countDownTimer';
import GradientLabel from '../../../../components/label_gradient';
import Avatar from '../../../../components/avatar';
import watchGrayIcon from '../../../../assets/images/watch-gray.png';
import markerGrayIcon from '../../../../assets/images/marker-gray.png';
import rightArrowGrayIcon from '../../../../assets/images/right-arrow-gray.png';

const ProgressBar = ({styleBackground, styleFill}: any): JSX.Element => {
  return  <View style={[Styles.progressBar, styleBackground]}>
            <View style={[Styles.progressBarFilled, styleFill]}>
              
            </View>
          </View>
}

class UpCommingClass extends React.Component<IUpcomingClassStudentProps, any> {
  constructor(props: IUpcomingClassStudentProps) {
    super(props);
    this.TemplateClassInfo = this.TemplateClassInfo.bind(this);
    this.TemplateBody = this.TemplateBody.bind(this);
    this.TemplateTask = this.TemplateTask.bind(this);
    this.setDurationOrFetchData = this.setDurationOrFetchData.bind(this);
    this.state = {
      duration: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }
  }

  componentDidMount = async () => {
    const { dateStart } = this.props;
    var date_start = new Date();
    var date_end = new Date(dateStart);
    const duration = countDownTimer(date_start, date_end);

    await this.setState({
      ...this.state,
      duration: {
        days: duration.days,
        hours: duration.hours,
        minutes: duration.minutes,
        seconds: duration.seconds,        
      }
    })
    this.setDurationOrFetchData();
  }

  componentWillUnmount = (): void => {
    clearTimeout();
  }
  
  setDurationOrFetchData = async (): Promise<void> => {
    const { fetchData } = this.props;
    const { days, hours, minutes, seconds } = this.state.duration;
    const { dateStart } = this.props; 
    
    let interval = 1;
    if(minutes > 1) interval = 60;
    if(hours > 0) interval = 60;
    if(days > 0) interval = 60 * 60 ;
    // jika durasi masih jalan
    // maka durasi akan count down
    // jika tidak maka akan mengambil data ke BE
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      if(typeof fetchData == 'function') {
        // window.clearTImeout(this.timer); 
        fetchData();
      }
      return;
    }
    const date_start = new Date();
    const date_end = new Date(dateStart);
    const duration = countDownTimer(date_start, date_end);
    this.setState({
        ...this.state,
        duration: {
            days: duration.days,
            hours: duration.hours,
            minutes: duration.minutes,
            seconds: duration.seconds,
        }
    })
    
    if(typeof this.setDurationOrFetchData == 'function') {
      this.timer = window.setTimeout(
        () => {
          this.setDurationOrFetchData()
        },
        interval * 1000
      )
    }

  }

  TemplateClassInfo = (): JSX.Element => {
    const { 
      classCode,
      courseName,
      lecturers,
    } = this.props;
    const { days, hours, minutes, seconds } = this.state.duration;
    let duration = seconds + 's';

    if(minutes) duration = minutes + 'm';
    if(hours) duration = `${hours}:${minutes}m`;
    if(days) duration = `${days}:${hours}h`;

    return  (
      <View style={Styles.classInfo}>
        <View style={Styles.headerWrapper}>
          <GradientLabel
            label={_('Upcomming Class')}
          />
          <View style={Styles.duration}>
            <Image 
              source={watchGrayIcon}
              style={Styles.watchIcon}
            />
            <Text style={Styles.durationLabel}>{duration}</Text>
          </View>
        </View>
        <Text style={Styles.classId}>{classCode}</Text>
        <Text style={Styles.className}>{courseName}</Text>
        {
          (lecturers || []).length > 0 &&
          lecturers.map((lecturer: any) => (
            <View style={Styles.lecturerInfoWrapper} key={lecturer.id}>
              <Avatar 
                source={lecturer.lecturePictureUrl}
                size={35}
              />
              <Text style={Styles.lecturerName}>{lecturer.lectureName}</Text>
            </View>
          ))
        }
      </View>
    )
  }

  TemplateBody = (): JSX.Element => { 
    const {
      classRoom,
      classCampus,
      dateStart,
      dateEnd,
      sessionProgress
    } = this.props;
    return  (
      <View style={Styles.BodyStudent}>
        <View style={Styles.tasksIconWrapper}>
          <Image
            source={markerGrayIcon}
            style={Styles.tasksIcon}
          />
          <Text style={Styles.tasksLabel}>
            {classRoom} - {classCampus}
          </Text>
        </View>
        <View style={Styles.tasksIconWrapper}>
          <Image
            source={watchGrayIcon}
            style={Styles.tasksIcon}
          />
          <Text style={Styles.tasksLabel}>
            {`${new Date(dateStart).getHours()}:${new Date(dateStart).getMinutes()}`} - 
            {` ${new Date(dateEnd).getHours()}:${new Date(dateEnd).getMinutes()}`} 
          </Text>
        </View> 
        {this.TemplateTask()}
        <View style={Styles.classProgressBarWrapper}>
          <View style={Styles.classProgressLabelWrapper}>
            <Text style={Styles.classProgressLabel}>{_('Class Progress')}</Text>
            <Text style={Styles.classProgressLabel}>{sessionProgress}%</Text>
          </View>
          <ProgressBar 
            styleFill={{
              width: `${sessionProgress || 0}%`
            }}
          />
        </View>
      </View>
    )
  }

  TemplateTask = (): JSX.Element => {
    const { resources, onPress } = this.props;
    return  (
      <LinearGradient 
        colors={['#F44F5F', '#AC3F4F']} 
        style={Styles.todoWrapper}
      >
        <View style={Styles.Wrapper}>
          <View style={Styles.todoHeaderWrapper}>
            <Text style={Styles.todoHeaderText}>{_('Things to do in this week')}:</Text>
          </View>
          <TouchableOpacity onPress={onPress} style={Styles.arrowImageWrapper}>
            <Image 
              source={rightArrowGrayIcon}
              style={Styles.arrowImage}
            />
          </TouchableOpacity>
        </View>
        {
          (resources || []).length > 0 &&
          (resources || []).map((obj: any, index) => (
            <View key={index} style={Styles.taskItemWrapper}>
              <Text style={Styles.taskItemTextBold}>
                {obj.jumlah}
              </Text>
              <Text style={Styles.taskItemText}>
                {obj.category}
              </Text>
              <View 
                style={Styles.dot}
              />
              <Text style={Styles.taskItemText}>
                {obj.duration}
              </Text>
            </View>
          ))
        }
    </LinearGradient>
    )
  }
  
  render() {
    return (
      <View style={Styles.container}>
        {this.TemplateClassInfo()}
        {this.TemplateBody()}
      </View>
    )
  }
}

export default UpCommingClass;