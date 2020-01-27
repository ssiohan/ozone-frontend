/* eslint-disable linebreak-style */
// == Action types
const CHANGE_LOGIN_FIELD_VALUE = 'CHANGE_LOGIN_FIELD_VALUE';
const CHECK_EMPTY_LOGIN_FIELDS = 'CHECK_EMPTY_LOGIN_FIELDS';

// == initialState
const initialState = {
  // Valeur de départ
  email: '',
  password: '',
  // Par défaut, le compteur de champs vides est à zéro
  emptyLoginFields: 0,
  // Par défaut le user n'est pas connecté
  logged: false,
};

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD_VALUE:
      // console.log(action.name, action.value);
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHECK_EMPTY_LOGIN_FIELDS:
      if (state.email.length === 0) {
        return {
          ...state,
          emptyLoginFields: state.emptyLoginFields + 1,
        };
      }
      if (state.password.length === 0) {
        return {
          ...state,
          emptyLoginFields: state.emptyLoginFields + 1,
        };
      }
      return {
        ...state,
        emptyLoginFields: 0,
      };
    default:
      return state;
  }
};

// == Action creators
export const changeLoginFieldValue = (name, value) => ({
  type: CHANGE_LOGIN_FIELD_VALUE,
  name,
  value,
});

export const checkForEmptyLoginFields = () => ({
  type: CHECK_EMPTY_LOGIN_FIELDS,
});


// == Export
export default reducer;
