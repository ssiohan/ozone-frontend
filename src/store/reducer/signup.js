// == Action types
const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
const CHECK_PASSWORD_CONFIRMATION = 'CHECK_PASSWORD_CONFIRMATION';
const CHECK_EMPTY_FIELDS = 'CHECK_EMPTY_FIELDS';

// == initialState
const initialState = {
  // Valeur de départ
  signupEmail: '',
  signupUsername: '',
  signupPassword: '',
  signupConfirmPassword: '',
  // Par défaut, pas d'erreur de confirmation du mot de passe
  passwordNotConfirmed: false,
  // Par défaut, le compteur de champs vides est à zéro
  emptyFields: 0,
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
    case CHECK_PASSWORD_CONFIRMATION:
      // Si aucun mot de passe n'a été saisi
      if (state.signupPassword.length === 0) {
        return {
          ...state,
          passwordNotConfirmed: false,
        };
      }
      // Si aucune confirmation de mot de passe n'a été saisie
      if (state.signupConfirmPassword.length === 0) {
        return {
          ...state,
          passwordNotConfirmed: false,
        };
      }
      // Si un mot de passe a été saisi
      if (state.signupPassword.length > 0) {
        // Si le mot de passe et la confirmation sont identiques
        if (state.signupPassword === state.signupConfirmPassword) {
          // Le state reste inchangé
          return {
            ...state,
            passwordNotConfirmed: false,
          };
        }
      }
      // Sinon, passwordNotConfirmed devient vrai
      return {
        ...state,
        passwordNotConfirmed: true,
      };
    case CHECK_EMPTY_FIELDS:
      // Si le champs email n'est pas rempli
      if (state.signupEmail.length === 0) {
        return {
          ...state,
          // On incrémente le compteur de champs non remplis
          emptyFields: state.emptyFields + 1,
        };
      }
      // Si le champs username n'est pas rempli
      if (state.signupUsername.length === 0) {
        return {
          ...state,
          // On incrémente le compteur de champs non remplis
          emptyFields: state.emptyFields + 1,
        };
      }
      // Si le champs password n'est pas rempli
      if (state.signupPassword.length === 0) {
        return {
          ...state,
          // On incrémente le compteur de champs non remplis
          emptyFields: state.emptyFields + 1,
        };
      }
      // Si le champs confirm password n'est pas rempli
      if (state.signupConfirmPassword.length === 0) {
        return {
          ...state,
          // On incrémente le compteur de champs non remplis
          emptyFields: state.emptyFields + 1,
        };
      }
      return {
        ...state,
        emptyFields: 0,
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

export const checkPasswordConfirmation = () => ({
  type: CHECK_PASSWORD_CONFIRMATION,
});

export const checkForEmptyFields = () => ({
  type: CHECK_EMPTY_FIELDS,
});


// == Export
export default reducer;
