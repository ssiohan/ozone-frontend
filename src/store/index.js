/* eslint-disable linebreak-style */
// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : middlewares
import tokenMiddleware from 'src/store/middleware/tokenMiddleware';

// == Import : local
import reducer from './reducer';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    tokenMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

// == Export
export default store;
