/* eslint-disable linebreak-style */
// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from 'src/store/reducer';

// == Import : middlewares
import authMiddleware from 'src/store/middleware/authMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    authMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

// == Export
export default store;
