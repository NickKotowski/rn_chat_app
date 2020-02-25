import FilesystemStorage from "redux-persist-filesystem-storage";
import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './Reducer';

const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
}

let middlewares = [
  thunkMiddleware,
  logger,
];

const enhancers = [
  applyMiddleware(...middlewares),
];

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, compose(...enhancers));

let persistor = persistStore(store);

export {
  store,
  persistor,
}


// Keep for testing and remove outdated data.
// persistant.purge([ 'app' ]);
// persistant.purgeAll();
