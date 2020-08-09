import { all, takeLatest } from 'redux-saga/effects';

import { IExampleTypes } from './example/types';
import { ITransactionsTypes } from './transactions/types';

import { getExample } from './example/sagas';
import { createTransaction } from './transactions/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(IExampleTypes.GET_EXAMPLE, getExample),
    takeLatest(ITransactionsTypes.CREATE_TRANSACTION, createTransaction),
  ]);
}
