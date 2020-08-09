import moment from 'moment';

import { Constants } from '../../config';

const getTimeTimeFormat = (date: string) =>
  moment(date).format(Constants.LL).split(',')[0];

export { getTimeTimeFormat };
