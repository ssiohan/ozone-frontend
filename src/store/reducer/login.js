/* eslint-disable linebreak-style */
// == Action types
const CHANGE_LOGIN_FIELD_VALUE = 'CHANGE_LOGIN_FIELD_VALUE';

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


// == Export
export default reducer;
