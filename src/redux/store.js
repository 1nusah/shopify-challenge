import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import nominationListReducer from './reducer';
const persistConfig = {
	// configuration object for redux-persist
	key: 'root',
	storage, // define which storage to use
};
const persistedReducer = persistReducer(persistConfig, nominationListReducer);
const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(logger, thunk))
);
const persistor = persistStore(store);
export { store, persistor };
