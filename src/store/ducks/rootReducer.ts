import { combineReducers } from 'redux';

import example from './example';
import snackbar from './snackbar';
import transactions from './transactions';
import visibility from './visibility';

export default combineReducers({
  example,
  snackbar,
  transactions,
  visibility,
});
