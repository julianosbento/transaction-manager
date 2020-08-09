import { action } from 'typesafe-actions';
import { ITransactionsTypes, ITransaction } from './types';

export const getTransactions = () =>
  action(ITransactionsTypes.GET_TRANSACTIONS);

export const getTransactionsFailure = () =>
  action(ITransactionsTypes.GET_TRANSACTIONS_FAILURE);

export const createTransaction = (transaction: ITransaction) =>
  action(ITransactionsTypes.CREATE_TRANSACTION, { transaction });

export const setTransactions = (transactions: ITransaction[]) =>
  action(ITransactionsTypes.SET_TRANSACTIONS, { transactions });

export const transactionsClean = () =>
  action(ITransactionsTypes.TRANSACTIONS_CLEAN);
