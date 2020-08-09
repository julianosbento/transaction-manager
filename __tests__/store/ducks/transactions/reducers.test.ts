import reducer, {
  INITIAL_STATE,
} from '../../../../src/store/ducks/transactions';
import {
  expectedAction,
  updatedTransactions,
  balance,
} from './transaction.dummy';
import {
  setTransactions,
  setBalance,
  transactionsClean,
} from '../../../../src/store/ducks/transactions/actions';

describe('Transactions Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, expectedAction)).toEqual(INITIAL_STATE);
  });

  it('should return the evolved state when SET_BALANCE is dispatched', () => {
    const action = setBalance(balance);

    const expectedState = {
      ...INITIAL_STATE,
      balance,
    };

    const evolvedState = reducer(INITIAL_STATE, action);

    expect(evolvedState).toEqual(expectedState);
  });

  it('should return the evolved state when SET_TRANSACTIONS is dispatched', () => {
    const action = setTransactions(updatedTransactions);

    const expectedState = {
      ...INITIAL_STATE,
      transactions: updatedTransactions,
    };

    const evolvedState = reducer(INITIAL_STATE, action);

    expect(evolvedState).toEqual(expectedState);
  });

  it('should return the evolved state when TRANSACTIONS_CLEAN is dispatched', () => {
    const action = transactionsClean();

    const expectedState = {
      ...INITIAL_STATE,
    };

    const evolvedState = reducer(INITIAL_STATE, action);

    expect(evolvedState).toEqual(expectedState);
  });
});
