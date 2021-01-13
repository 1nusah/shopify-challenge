import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import nominationListReducer from './reducer';

const store = createStore(
	nominationListReducer,
	composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
