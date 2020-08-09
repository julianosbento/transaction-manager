import { Reducer } from 'redux';
import { ITransactionsState, ITransactionsTypes } from './types';
import { Constants } from '../../../config';

const INITIAL_STATE: ITransactionsState = {
  transactions: [],
  loading: false,
  error: false,
};

const reducer: Reducer<ITransactionsState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ITransactionsTypes.GET_TRANSACTIONS:
      return { ...state, loading: true };
    case ITransactionsTypes.SET_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        error: false,
        transactions: action.payload.transactions,
      };
    case ITransactionsTypes.GET_TRANSACTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: INITIAL_STATE.transactions,
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
