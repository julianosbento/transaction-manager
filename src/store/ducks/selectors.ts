import { ApplicationState } from '..';

export const transactionsSelector = (state: ApplicationState) =>
  state.transactions;
