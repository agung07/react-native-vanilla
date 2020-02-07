import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { IUpcomingClassStudentProps } from '../../interfaces/components/upcommingClass';
import {
  PinMapCircularIcon,
  ClockCircularIcon,
  ClockIcon,
  NextCircularIcon,
} from '../../../../assets/images';
import Moment from 'moment';
import _ from '../../../../lang';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './StyleUpCommingClass';
import countDownTimer from '../../../../utilities/helpers/countDownTimer';
import GradientLabel from '../../../../components/label_gradient';
import Avatar from '../../../../components/avatar';
import ResourcesContainer from './resourcesContainer';

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
    var date_start = new Date().getTime();
    var date_end = Moment(dateStart);

    const duration = await countDownTimer(date_start, date_end);
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
        fetchData();
      }
      return;
    }
    const date_start = new Date().getTime();
    const date_end = Moment(dateStart);
    
    const duration = await countDownTimer(date_start, date_end);
    
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
    if(minutes) duration = `${minutes > 9 ? minutes : `0${minutes}`} m`;
    if(hours) duration = `${hours}h:${minutes > 9 ? minutes : `0${minutes}`}m`;
    if(days) duration = `${days}d:${hours > 9 ? hours : `0${hours}` }h`;

    return  (
      <View style={Styles.classInfo}>
        <View style={Styles.headerWrapper}>
          <GradientLabel
            label={_('Upcoming Class')}
            colors={['#3023AE', '#C86DD7']}
            styleContainer={{
              paddingHorizontal: 18,
              paddingVertical: 20
            }}
            styleText={{
              fontWeight: 'bold',
              fontSize: 15
            }}
          />
          <View style={Styles.duration}>
            <ClockIcon />
            <Text style={Styles.durationLabel}>{duration}</Text>
          </View>
        </View>
        <Text style={Styles.classId}>{classCode}</Text>
        <Text style={Styles.className}>{courseName}</Text>
        <View style={Styles.lecturerContainer}>
        {
          (lecturers || []).length > 0 &&
          lecturers.map((lecturer: any) => (
            <View style={Styles.lecturerInfoWrapper} key={lecturer.id}>
              <Avatar 
                source={lecturer.pictureUrl}
                size={37}
              />
              <Text style={Styles.lecturerName}>{lecturer.name}</Text>
            </View>
          ))
        }
        </View>
      </View>
    )
  }

  TemplateBody = (): JSX.Element => { 
    const {
      classRoomNumber,
      classCampusName,
      dateStart,
      dateEnd,
      sessionProgress
    } = this.props;
    return  (
      <View style={Styles.BodyStudent}>
        <View style={Styles.LabelWrapper}>
          <PinMapCircularIcon />
          <Text style={Styles.Label}>
            {classRoomNumber} - {classCampusName}
          </Text>
        </View>
        <View style={Styles.LabelWrapper}>
          <ClockCircularIcon />
          <Text style={Styles.Label}>
            {Moment(dateStart).format('HH:mm')} - 
            {Moment(dateEnd).format('HH:mm')} 
          </Text>
        </View> 
        {this.TemplateTask()}
        <View style={Styles.classProgressBarWrapper}>
          <View style={Styles.classProgressLabelWrapper}>
            <Text style={Styles.classProgressLabel}>{_('Course Progress')}</Text>
            <Text style={Styles.classProgressLabel}>{typeof sessionProgress !== 'object' ? sessionProgress : 0}%</Text>
          </View>
          <ProgressBar 
            styleFill={{
              width: `${typeof sessionProgress !== 'object' ? sessionProgress : 0}%`
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
        colors={['#f5515f', '#9f041b']} 
        style={Styles.todoWrapper}
      >
        <View style={Styles.Wrapper}>
          <View style={Styles.todoHeaderWrapper}>
            <Text style={Styles.todoHeaderText}>{_('Things to do in this week')}:</Text>
          </View>
          <TouchableOpacity onPress={() => {onPress}} style={Styles.arrowImageWrapper}>
            <NextCircularIcon />
          </TouchableOpacity>
        </View>
        {
          (resources || []).length > 0 &&
          (resources || []).map((obj: any, index) =>  <ResourcesContainer {...obj} key={index} /> )
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