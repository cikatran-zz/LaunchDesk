import { createStore, compose, applyMiddleware } from 'redux';
import app from './rootReducer';
import devTools from 'remote-redux-devtools';

import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './rootEpic';
import { createLogger } from 'redux-logger';

const epicMiddleware = createEpicMiddleware(rootEpic)
let applyMiddlewares = applyMiddleware(epicMiddleware)

if (__DEV__) {
  const logger = createLogger({ collapsed: true });
  applyMiddlewares = applyMiddleware(epicMiddleware, logger);
}

const enhancer = compose(
  applyMiddlewares,
  devTools(),
);

const store = createStore(app, enhancer);
export default store;