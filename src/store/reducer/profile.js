/* eslint-disable linebreak-style */
// == Action types
const FETCH_USER_DATA = 'FETCH_USER_DATA';

// == initialState
const initialState = {
  // Valeur de départ
  userData: [],
  profilePseudo: '',
  profileLastname: '',
  profileFirstname: '',
  profileEmail: '',
  profileBirthdate: '',
  profileAvatar: '',
  profileDescription: '',
};

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      // console.log(action.name, action.value);
      return {
        ...state,
      };
    default:
      return state;
  }
};

// == Action creators
export const fetchUserData = () => ({
  type: FETCH_USER_DATA,
});

// == Export
export default reducer;
