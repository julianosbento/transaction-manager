import { combineReducers } from 'redux';

import example from './example';
import transactions from './transactions';
import visibility from './visibility';

export default combineReducers({
  example,
  transactions,
  visibility,
});
