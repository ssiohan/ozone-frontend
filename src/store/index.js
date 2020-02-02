/* eslint-disable linebreak-style */
// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : middlewares
import authMiddleware from 'src/store/middleware/authMiddleware';
import registerMiddleware from 'src/store/middleware/registerMiddleware';
import eventsMiddleware from 'src/store/middleware/eventsMiddleware';
import createEventMiddleware from 'src/store/middleware/createEventMiddleware';

// == Import : local
import reducer from './reducer';


// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    authMiddleware,
    registerMiddleware,
    eventsMiddleware,
    createEventMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

// == Export
export default store;
