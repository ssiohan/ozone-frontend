/* eslint-disable linebreak-style */
// == Import des actions
import {
  CHANGE_INPUT_VALUE,
  DO_LOGIN,
} from './actions';

// == initialState
const initialState = {
  // Valeur de départ
  email: '',
  password: '',
  // Par défaut le user n'est pas connecté
  logged: false,
};

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        email: action.value,
      };
    case DO_LOGIN:
      return {
        ...state,
      };
    default:
      return state;
  }
};

// == Export
export default reducer;
