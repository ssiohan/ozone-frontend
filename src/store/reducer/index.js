/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';

// j'importe mes reducers
import login from './login';
import homepage from './homepage';
import signup from './signup';
import createEvent from './createEvent';


// l'intérêt d'avoir plusieurs reducers est de classer les informations par catégorie,
// plus facile pour s'y retrouver

// je veux combiner mes reducers en un seul, puisque le store gère un seul reducer
// combineReducers retourne un objet
// https://redux.js.org/api/combinereducers/
const reducer = combineReducers({
  // user: user,
  login,
  homepage,
  signup,
  createEvent,
});

export default reducer;
