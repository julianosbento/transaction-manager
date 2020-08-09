import moment from 'moment';
import compact from 'lodash/compact';

import { Constants } from '../../config';
import { ITransaction } from '../../store/ducks/transactions/types';

const getDatesFromTransactions = (transactions: ITransaction[]) =>
  compact(transactions.map(({ date }) => date));

const getTimeTimeFormat = (date: string) =>
  moment(date).format(Constants.LL).split(',')[0];

export { getDatesFromTransactions, getTimeTimeFormat };
