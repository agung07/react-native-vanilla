import { string } from "prop-types";

export default interface IUpcommingClassProps {
  data: any;
  fetchData: Function;
}

export interface IUpcomingClassLecturerProps {
  id: number | string;
  classCode: string;
  courseName: string;
  classRoom: string;
  classCampus: string;
  dateStart: Date;
  dateEnd: Date;
  sessionProgress?: Object;
  onPress?: Function;
}

export interface IUpcomingClassStudentProps {
  id: string;
  classCode: string;
  courseName: string;
  classCampus: string;
  classRoom: string;
  lecturers: Array<Object>;
  dateStart: Date | string;
  dateEnd: Date | string;
  resources: Array<Object>;
  sessionProgress: number | string;
  onPress?: Function;
  fetchData?: Function;
}