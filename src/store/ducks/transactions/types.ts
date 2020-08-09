export enum ITransactionsTypes {
  GET_TRANSACTIONS = '@transactions/GET_TRANSACTIONS',
  SET_TRANSACTIONS = '@transactions/SET_TRANSACTIONS',
  GET_TRANSACTIONS_FAILURE = '@transactions/GET_TRANSACTIONS_FAILURE',
  CREATE_TRANSACTION = '@transactions/CREATE_TRANSACTION',
  TRANSACTIONS_CLEAN = '@transactions/TRANSACTIONS_CLEAN',
  CLEAN_ALL = '@app/CLEAN_all',
}

export interface ITransaction {
  date: string;
  description: string;
  key: string | number;
  type: string;
  value: string | number;
}

export interface ITransactionsState {
  readonly transactions: ITransaction[];
  readonly error: boolean;
  readonly loading: boolean;
}
