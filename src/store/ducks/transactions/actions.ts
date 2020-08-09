import { action } from 'typesafe-actions';
import { ITransactionsTypes, ITransaction } from './types';

export const getTransactions = () =>
  action(ITransactionsTypes.GET_TRANSACTIONS);

export const createTransaction = (transaction: ITransaction) =>
  action(ITransactionsTypes.CREATE_TRANSACTION, { transaction });

export const deleteTransaction = (transaction: ITransaction) =>
  action(ITransactionsTypes.DELETE_TRANSACTION, { transaction });

export const setTransactions = (transactions: ITransaction[]) =>
  action(ITransactionsTypes.SET_TRANSACTIONS, { transactions });

export const setTransactionsFailure = () =>
  action(ITransactionsTypes.SET_TRANSACTIONS_FAILURE);

export const setBalance = (balance: string | number) =>
  action(ITransactionsTypes.SET_BALANCE, { balance });

export const transactionsClean = () =>
  action(ITransactionsTypes.TRANSACTIONS_CLEAN);
