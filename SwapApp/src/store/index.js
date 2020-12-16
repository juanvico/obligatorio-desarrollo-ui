import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '_reducers';
import storage from '_storage';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['error', 'status', 'user', 'item', 'message'],
};

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = callback => {
  return persistStore(store, null, callback);
};
