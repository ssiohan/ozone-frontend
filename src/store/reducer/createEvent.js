/* eslint-disable linebreak-style */
// == Action types
const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
// const CHECK_PASSWORD_CONFIRMATION = 'CHECK_PASSWORD_CONFIRMATION';
// const CHECK_EMPTY_FIELDS = 'CHECK_EMPTY_FIELDS';
//  Action qui va lancer la requête axios
export const CREATE_EVENT = 'CREATE_EVENT';
// // Action qui va changer le register: false en register: true
// const REGISTER_USER = 'REGISTER_USER';

// == initialState
const initialState = {
  // Valeur de départ
  title: '',
  typeEvent: 'Atelier',
  description: '',
  dateEvent: '',
  painfulness: '',
  duration: '',
  impactSocietal: '',
  impactEnvironmental: '',
  userMin: 1,
  userMax: 10,
  city: '',
  latitude: '',
  longitude: '',
  author: '',
};

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_VALUE:
      console.log(state);
      return {
        ...state,
        [action.name]: action.value,
      };

    case CREATE_EVENT:

      return {
        ...state,
      };
    // case REGISTER_USER:
    //   return {
    //     ...state,
    //     registered: true,
    //   };
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
export const goCreateEvent = () => ({
  type: CREATE_EVENT,
});

// == Export
export default reducer;
