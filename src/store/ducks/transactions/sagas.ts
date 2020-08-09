import { select, put } from 'redux-saga/effects';
import sortBy from 'lodash/sortBy';

import { setTransactions } from './actions';
import { transactionsSelector } from '../selectors';

export function* createTransaction(action: any) {
  try {
    const {
      payload: { transaction },
    } = action;
    const { transactions } = yield select(transactionsSelector);

    const updatedTransactions = [...transactions, transaction];

    const sortedTransactions = sortBy(updatedTransactions).reverse();

    yield put(setTransactions(sortedTransactions));
  } catch (err) {}
}
