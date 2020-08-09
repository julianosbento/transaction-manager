export enum ITransactionsTypes {
  GET_TRANSACTIONS = '@transactions/GET_TRANSACTIONS',
  SET_TRANSACTIONS = '@transactions/SET_TRANSACTIONS',
  SET_BALANCE = '@transactions/SET_BALANCE',
  CREATE_TRANSACTION = '@transactions/CREATE_TRANSACTION',
  DELETE_TRANSACTION = '@transactions/DELETE_TRANSACTION',
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
  readonly balance: string | number;
  readonly transactions: ITransaction[];
  readonly error: boolean;
  readonly loading: boolean;
}
