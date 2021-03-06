import { Reducer } from 'redux';
import { ITransactionsState, ITransactionsTypes } from './types';

export const INITIAL_STATE: ITransactionsState = {
  balance: 0,
  transactions: [],
  loading: false,
  error: false,
};

const reducer: Reducer<ITransactionsState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ITransactionsTypes.SET_BALANCE:
      return { ...state, balance: action.payload.balance };

    case ITransactionsTypes.SET_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        error: false,
        transactions: action.payload.transactions,
      };

    case ITransactionsTypes.TRANSACTIONS_CLEAN:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case ITransactionsTypes.CLEAN_ALL:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default reducer;
