/* eslint-disable linebreak-style */
// == Action types
export const FETCH_USER_ID = 'FETCH_USER_ID';
const STORE_USER_ID = 'STORE_USER_ID';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';
const STORE_USER_DATA = 'STORE_USER_DATA';
export const PRESERVE_USER_DATA = 'PRESERVE_USER_DATA';
const CHANGE_PROFILE_FIELD_VALUE = 'CHANGE_PROFILE_FIELD_VALUE';

// == initialState
const initialState = {
  // Valeur de départ
  userId: '',
  userData: null,
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
    // Actions en lien avec le formulaire de modification
    case CHANGE_PROFILE_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    // Actions de récupération et conservation des données
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
    case PRESERVE_USER_DATA: {
      const userId = localStorage.getItem('id');
      // console.log(token, refresh_token);
      if (localStorage.id === undefined) {
        return {
          ...state,
        };
      }
      if (userId.length > 0) {
        return {
          ...state,
          userId,
        };
      }
    }
      break;
    default:
      return state;
  }
};

// == Action creators
export const changeProfileFieldValue = (name, value) => ({
  type: CHANGE_PROFILE_FIELD_VALUE,
  name,
  value,
});
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

export const preserveUserData = () => ({
  type: PRESERVE_USER_DATA,
});

// == Export
export default reducer;
