/**
 * 
 * @param {*} date_start 
 * @param {*} date_end 
 * @Comment
 * bentuk parameter date_start maupun date_end harus seperti contoh dibawah ini:
 * var date_start = new Date().getTime();
 * var date_end = new Date("2019-12-31 23:59:59").getTime();
 */

interface ICountDownTimer {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
}

export default function(date_start: any, date_end: any): ICountDownTimer {

  // Find the distance between now and the count down date
  var distance = date_end - date_start;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  
  var dayInHours = days * 24;
  
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours += dayInHours;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
  }
}