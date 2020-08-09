import moment from 'moment';
import { action as typedAction } from 'typesafe-actions';

import { Constants } from '../../../../src/config';
import {
  ITransaction,
  ITransactionsTypes,
} from '../../../../src/store/ducks/transactions/types';

export const transaction = {
  date: moment().format(Constants.DATE),
  description: 'Teste',
  key: Math.random(),
  type: Constants.RECIPE,
  value: 'R$ 1.000,00',
};

export const transactionToDelete = {
  date: moment().format(Constants.DATE),
  description: 'Teste',
  key: 0,
  type: Constants.RECIPE,
  value: 'R$ 1.000,00',
};

export const transactions = [];
export const transactionsToDelete = [transactionToDelete];
export const updatedTransactions = [...transactions, transaction];
export const updatedTransactionsWithError = [undefined];
export const balance = 1000.0;

export const actionGenerator = (transaction: ITransaction) => ({
  payload: { transaction },
});
export const action = actionGenerator(transaction);
export const deleteAction = actionGenerator(transactionToDelete);
export const expectedAction = typedAction(
  ITransactionsTypes.TRANSACTIONS_CLEAN
);
