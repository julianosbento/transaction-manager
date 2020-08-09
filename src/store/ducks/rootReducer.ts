import { combineReducers } from 'redux';

import example from './example';
import transactions from './transactions';

export default combineReducers({
  example,
  transactions,
});
