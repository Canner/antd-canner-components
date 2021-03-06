// @flow
import moment from 'moment';

export function transformMomentToString(date: any, input: string = 'ISO_8601') {
  switch (input) {
    case 'timestamp.seconds':
    case 'epoch':
      return String(date.unix());
    case 'timestamp.milliseconds':
      return  String(date.valueOf());
    case 'ISO_8601':
      return date.toISOString();
    default:
      return date.format(input);
  }
}

export function transformStringToMoment(dateString: string, input: moment = moment.ISO_8601) {
  let rtnMoment = moment();
  switch (input) {
    case 'timestamp.seconds':
    case 'epoch':
      if (dateString) {
        rtnMoment = moment.unix(Number(dateString));
      }
      break;
    case 'timestamp.milliseconds':
      if (dateString) {
        rtnMoment = moment(Number(dateString));
      }
      break;
    case 'ISO_8601':
      rtnMoment = moment(dateString, moment.ISO_8601);
      break;
    default:
      rtnMoment = moment(dateString, input);
      break;
  }
  if (rtnMoment.isValid())
    return rtnMoment;
  return moment();
}