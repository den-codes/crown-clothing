import { createStore, applyMiddleware } from 'redux';
import logger from'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddlewares(...middlewares));

export default storageBucket;