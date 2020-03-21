import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers/rootReducer';

const loggerMiddleware = createLogger();
const middleware = [
  loggerMiddleware,
  thunkMiddleware,
];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
