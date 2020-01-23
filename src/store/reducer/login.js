/* eslint-disable linebreak-style */
// == Action types
const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';

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
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

// == Action creators
export const changeFieldValue = (value, name) => ({
  type: CHANGE_FIELD_VALUE,
  name,
  value,
});

// == Export
export default reducer;
