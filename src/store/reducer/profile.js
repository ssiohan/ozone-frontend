/* eslint-disable linebreak-style */
// == Action types
export const FETCH_USER_ID = 'FETCH_USER_ID';
const STORE_USER_ID = 'STORE_USER_ID';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';
const STORE_USER_DATA = 'STORE_USER_DATA';

// == initialState
const initialState = {
  // Valeur de départ
  userId: '',
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
    case FETCH_USER_ID:
      // console.log(action.name, action.value);
      return {
        ...state,
      };
    case STORE_USER_ID:
      return {
        ...state,
        userId: action.userId,
      };
    case FETCH_USER_DATA:
      // console.log(action.name, action.value);
      return {
        ...state,
      };
    case STORE_USER_DATA:
      return {
        ...state,
        userData: action.userData,
      };
    default:
      return state;
  }
};

// == Action creators
export const fetchUserId = () => ({
  type: FETCH_USER_ID,
});

export const storeUserId = (userId) => ({
  type: STORE_USER_ID,
  userId,
});

export const fetchUserData = () => ({
  type: FETCH_USER_DATA,
});

export const storeUserData = (userData) => ({
  type: STORE_USER_DATA,
  userData,
});

// == Export
export default reducer;
