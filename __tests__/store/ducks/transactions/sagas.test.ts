import { call, select, all, put } from 'redux-saga/effects';

import {
  createTransaction,
  setTransactionsAndBalance,
  transactionFailed,
  deleteTransaction,
  getBalance,
} from '../../../../src/store/ducks/transactions/sagas';
import {
  action,
  transactions,
  transactionsToDelete,
  deleteAction,
  updatedTransactions,
  balance,
  updatedTransactionsWithError,
} from './transaction.dummy';
import { transactionsSelector } from '../../../../src/store/ducks/selectors';
import {
  setBalance,
  setTransactions,
} from '../../../../src/store/ducks/transactions/actions';
import { showSnackbar } from '../../../../src/store/ducks/snackbar/actions';

describe('Transactions Saga', () => {
  it('should create transaction with success', () => {
    const generator = createTransaction(action);

    expect(generator.next().value).toEqual(select(transactionsSelector));
    expect(generator.next({ transactions }).value).toEqual(
      call(setTransactionsAndBalance, updatedTransactions)
    );
    expect(generator.next().done).toEqual(true);
  });

  it('should create transaction with error', () => {
    const generator = createTransaction(action);

    expect(generator.next().value).toEqual(select(transactionsSelector));
    expect(generator.next().value).toEqual(call(transactionFailed));
    expect(generator.next().done).toEqual(true);
  });

  it('should delete transaction with success', () => {
    const generator = deleteTransaction(deleteAction);

    expect(generator.next().value).toEqual(select(transactionsSelector));
    expect(
      generator.next({ transactions: transactionsToDelete }).value
    ).toEqual(call(setTransactionsAndBalance, transactions));
    expect(generator.next().done).toEqual(true);
  });

  it('should delete transaction with error', () => {
    const generator = deleteTransaction(deleteAction);

    expect(generator.next().value).toEqual(select(transactionsSelector));
    expect(generator.next().value).toEqual(call(transactionFailed));
    expect(generator.next().done).toEqual(true);
  });

  it('should set transactions and balance with success', () => {
    const generator = setTransactionsAndBalance(updatedTransactions);

    expect(generator.next().value).toEqual(
      call(getBalance, updatedTransactions)
    );
    expect(generator.next(balance).value).toEqual(
      all([put(setBalance(balance)), put(setTransactions(updatedTransactions))])
    );
    expect(generator.next().done).toEqual(true);
  });

  it('should set transactions and balance with error', () => {
    const generator = setTransactionsAndBalance(updatedTransactionsWithError);

    expect(generator.next().value).toEqual(call(transactionFailed));
    expect(generator.next().done).toEqual(true);
  });

  it('should show the snackbar when transaction failed', () => {
    const generator = transactionFailed();

    expect(generator.next().value).toEqual(
      put(
        showSnackbar({
          duration: 7000,
          message: 'transaction_failed',
          visible: true,
        })
      )
    );
    expect(generator.next().done).toEqual(true);
  });

  it('should get balance with success', () => {
    const balance = getBalance(updatedTransactions);

    expect(balance).toEqual(1000);
  });
});
