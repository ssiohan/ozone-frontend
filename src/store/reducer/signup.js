// == Action types
const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';

// == initialState
const initialState = {
  // Valeur de départ
  signupEmail: '',
  signupUsername: '',
  signupPassword: '',
  signupConfirmPassword: '',
  // Par défaut le user n'est pas inscrit
  registered: false,
};

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_VALUE:
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
export const changeFieldValue = (name, value) => ({
  type: CHANGE_FIELD_VALUE,
  name,
  value,
});

// == Export
export default reducer;
