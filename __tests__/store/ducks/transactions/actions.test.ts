import { action } from 'typesafe-actions';

import {
  getTransactions,
  createTransaction,
  deleteTransaction,
  setTransactions,
  setBalance,
  transactionsClean,
} from '../../../../src/store/ducks/transactions/actions';
import { ITransactionsTypes } from '../../../../src/store/ducks/transactions/types';
import { transaction, updatedTransactions, balance } from './transaction.dummy';

describe('Transactions Actions', () => {
  it('should create the GET_TRANSACTIONS action', () => {
    const expectedAction = action(ITransactionsTypes.GET_TRANSACTIONS);

    expect(getTransactions()).toEqual(expectedAction);
  });

  it('should create the CREATE_TRANSACTION action', () => {
    const expectedAction = action(ITransactionsTypes.CREATE_TRANSACTION, {
      transaction,
    });

    expect(createTransaction(transaction)).toEqual(expectedAction);
  });

  it('should create the DELETE_TRANSACTION action', () => {
    const expectedAction = action(ITransactionsTypes.DELETE_TRANSACTION, {
      transaction,
    });

    expect(deleteTransaction(transaction)).toEqual(expectedAction);
  });

  it('should create the SET_TRANSACTIONS action', () => {
    const expectedAction = action(ITransactionsTypes.SET_TRANSACTIONS, {
      transactions: updatedTransactions,
    });

    expect(setTransactions(updatedTransactions)).toEqual(expectedAction);
  });

  it('should create the SET_BALANCE action', () => {
    const expectedAction = action(ITransactionsTypes.SET_BALANCE, { balance });

    expect(setBalance(balance)).toEqual(expectedAction);
  });

  it('should create the TRANSACTIONS_CLEAN action', () => {
    const expectedAction = action(ITransactionsTypes.TRANSACTIONS_CLEAN);

    expect(transactionsClean()).toEqual(expectedAction);
  });
});
