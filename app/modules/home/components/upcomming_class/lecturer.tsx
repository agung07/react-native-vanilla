import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { IUpcomingClassLecturerProps } from '../../interfaces/components/upcommingClass';
import { Grid, BarChart, XAxis } from 'react-native-svg-charts';
import { titleCase } from '../../../../utilities/helpers';
import { Text as TextSvg } from 'react-native-svg';
import watchGrayIcon from '../../../../assets/images/watch-gray.png';
import markerGrayIcon from '../../../../assets/images/marker-gray.png';
import Styles from './StyleUpCommingClass';
import GradientLabel from '../../../../components/label_gradient';
import _ from '../../../../lang';

class UpCommingClass extends React.Component<IUpcomingClassLecturerProps, any> {
  constructor(props: IUpcomingClassLecturerProps) {
    super(props);
    this.TemplateClassInfo = this.TemplateClassInfo.bind(this);
    this.TemplateBody = this.TemplateBody.bind(this);
    this.TemplateChart = this.TemplateChart.bind(this);
  }
  TemplateClassInfo = (): JSX.Element => {
    const { classCode, courseName } = this.props;
    return  (
      <View style={Styles.classInfo}>
        <View style={Styles.headerWrapper}>
          <GradientLabel
            label={_('Upcomming Class')}
          />
        </View>
        <Text style={Styles.classId}>{classCode}</Text>
        <Text style={Styles.className}>{courseName}</Text>
      </View>
    )
  }

  TemplateBody = (): JSX.Element => {
    let { classRoom, classCampus, DateStart, DateEnd } = this.props;    
    return  (
      <>
      <View style={Styles.BodyLecturer}>
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
            {`${new Date(DateStart).getHours()}:${new Date(DateStart).getMinutes()}`} - 
            {` ${new Date(DateEnd).getHours()}:${new Date(DateEnd).getMinutes()}`} 
          </Text>
        </View> 
      </View>
        {this.TemplateChart()}
      </>
    )
  }

  TemplateChart= () => {
    const { sessionProgress } = this.props;
    const data = Object.values(sessionProgress);
    const labels = Object.keys(sessionProgress);  

    const CUT_OFF = 20
    const Labels = ({ x, y, bandwidth, data }?: any): JSX.Element => (
        data.map((value, index) => (
            <TextSvg
                key={ index }
                x={ x(index) + (bandwidth / 2) }
                y={ value < CUT_OFF ? y(value) - 10 : y(value) + 15 }
                fontSize={ 14 }
                fill={ value >= CUT_OFF ? 'white' : 'black' }
                alignmentBaseline={ 'middle' }
                textAnchor={ 'middle' }
            >
                {value}
            </TextSvg>
        ))
    )

    return (
      <View
        style={{
          paddingTop: 10
        }}
      >
        <Text
            style={{
              color: '#000'
            }}
          >{_('Student Activities This Week')}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}
          >
            <Text>{_('Student')}</Text>
          </View>
        <View style={{ height: 200}}>
          <BarChart
            style={{ flex: 1 }}
            data={data}
            svg={{ fill: '#75b643' }}
            contentInset={{ top: 10, bottom: 10, left: 20, right: 20 }}
            spacingInner={0.8}
            gridMin={0}
          >
            <Labels />
          </BarChart>
          <XAxis
            data={data}
            formatLabel={(value, index) => {
                let label = labels[index].replace('_', ' ')
                return titleCase(label);
            }}
            style={{ marginHorizontal: -10}}
            contentInset={{ left: 50, right: 50 }}
            svg={{ fontSize: 13, fill: 'black' }}
          />
        </View>
      </View>
    )

  }

  render() {
    const { onPress } = this.props;
    return (
      <TouchableOpacity 
        style={Styles.container} 
        onPress={() => onPress()}
      >
        {this.TemplateClassInfo()}
        {this.TemplateBody()}
      </TouchableOpacity>
    )
  }
}

export default UpCommingClass;