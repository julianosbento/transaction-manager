import { select, put, all, call } from 'redux-saga/effects';
import sortBy from 'lodash/sortBy';
import sumBy from 'lodash/sumBy';

import { setTransactions, setBalance } from './actions';
import { transactionsSelector } from '../selectors';
import { ITransaction } from './types';
import { Constants } from '../../../config';
import { parseFloatCurrency } from '../../../utils';

export function* createTransaction(action: any) {
  try {
    const {
      payload: { transaction },
    } = action;
    const { transactions } = yield select(transactionsSelector);

    const updatedTransactions = [...transactions, transaction];

    yield call(setTransactionsAndBalance, updatedTransactions);
  } catch (err) {
    console.log('err => ', err);
  }
}

export function* deleteTransaction(action: any) {
  try {
    const {
      payload: { transaction },
    } = action;
    const { transactions } = yield select(transactionsSelector);

    const updatedTransactions = transactions.filter(
      ({ key }: { key: number }) => key !== transaction.key
    );

    yield call(setTransactionsAndBalance, updatedTransactions);
  } catch (err) {}
}

export function* setTransactionsAndBalance(transactions: ITransaction[]) {
  const sortedTransactions = sortBy(transactions, ({ date }) => date).reverse();

  const balance = getBalance(sortedTransactions);

  yield all([
    put(setBalance(balance)),
    put(setTransactions(sortedTransactions)),
  ]);
}

export const getBalance = (transactions: ITransaction[]) => {
  const recipes = transactions.filter(({ type }) => type === Constants.RECIPE);
  const expenses = transactions.filter(
    ({ type }) => type === Constants.EXPENSE
  );
  const totalRecipes = sumBy(recipes, ({ value }) =>
    parseFloatCurrency(value.toString())
  );

  const totalExpenses = sumBy(expenses, ({ value }) =>
    parseFloatCurrency(value.toString())
  );
  return totalRecipes - totalExpenses;
};
