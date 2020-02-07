interface ITimeConvertion {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default (seconds: number): ITimeConvertion => {

  var numdays = Math.floor(seconds / 86400);

  var numhours = Math.floor((seconds % 86400) / 3600);

  var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);

  var numseconds = ((seconds % 86400) % 3600) % 60;

  return {
    days: numdays,
    hours: numhours,
    minutes: numminutes,
    seconds: numseconds
  }

}