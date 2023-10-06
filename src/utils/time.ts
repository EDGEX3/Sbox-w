/* eslint-disable prefer-const */
export const getformatAMPM=(date:Date)=> {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let newminutes = minutes < 10 ? '0'+ minutes : minutes;
    let newsecond = seconds < 10 ? '0'+ seconds : seconds;
    let strTime = hours + ':' + newminutes + ':' + newsecond + ' ' + ampm;
    return strTime;
  }