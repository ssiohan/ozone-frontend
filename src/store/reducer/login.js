/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
// == Action types
const CHANGE_LOGIN_FIELD_VALUE = 'CHANGE_LOGIN_FIELD_VALUE';
const CHECK_EMPTY_LOGIN_FIELDS = 'CHECK_EMPTY_LOGIN_FIELDS';
// Action qui va lancer la requête axios permettant de récupérer les tokens
export const DO_LOGIN = 'DO_LOGIN';
/** Action qui va permettre de :
 *  a) changer le statut logged: false en logged: true en cas de succès
 *  b) récupérer le token
 *  c) récupérer le refresh_token
 */
const CONNECT_USER = 'CONNECT_USER';

// == initialState
const initialState = {
  // Valeur de départ
  email: '',
  password: '',
  // Par défaut, le compteur de champs vides est à zéro
  emptyLoginFields: 0,
  // Par défaut le user n'est pas connecté
  logged: false,
  // Infos à récupérer (par défault elles sont vides)
  token: '',
  refresh_token: '',
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
    case DO_LOGIN:
      return {
        ...state,
      };
    case CONNECT_USER:
      return {
        ...state,
        token: action.token,
        refresh_token: action.refresh_token,
        logged: true,
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

export const doLogin = () => ({
  type: DO_LOGIN,
});

export const connectUser = (token, refresh_token) => ({
  type: CONNECT_USER,
  token,
  refresh_token,
});


// == Export
export default reducer;
