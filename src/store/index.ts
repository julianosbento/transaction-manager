import { createStore, applyMiddleware, Store, compose } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

import { IExampleState } from './ducks/example/types';
import { ISnackbarState } from './ducks/snackbar/types';
import { ITransactionsState } from './ducks/transactions/types';
import { IVisibilityState } from './ducks/visibility/types';

export interface ApplicationState {
  example: IExampleState;
  snackbar: ISnackbarState;
  transactions: ITransactionsState;
  visibility: IVisibilityState;
}

const persistConfig = {
  blacklist: [],
  key: 'rnboilerplatetypescript',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const typedUseSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

let store: Store<ApplicationState> = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { typedUseSelector, persistor };
export default store;
