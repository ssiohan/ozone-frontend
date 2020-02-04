/* eslint-disable linebreak-style */
// == Action types
const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
const CHECK_EMPTY_FIELDS = 'CHECK_EMPTY_FIELDS';
const GET_COORDONATES = 'GET_COORDONATES';
const GET_LONGITUDE = 'GET_LONGITUDE';
//  Action qui va lancer la requête axios
export const CREATE_EVENT = 'CREATE_EVENT';
// Action qui va changer le register: false en register: true
export const EVENT_CREATED = 'EVENT_CREATED';
// Action qui va changer le statusText: false en statusText: true
// Pour notifier l'User que son event à bien été crée

// == initialState
const initialState = {
  // Valeur de départ
  title: '',
  typeEvent: '',
  description: '',
  dateEvent: '',
  painfulness: '',
  duration: '',
  impactSocietal: '',
  impactEnvironmental: '',
  userMin: 5,
  userMax: 5,
  city: '',
  latitude: '',
  longitude: '',
  author: '',
  statusText: false,
  address: '',
  userData: '',
  // Par défaut, le compteur de champs vides est à zéro
  emptyFields: 0,
};

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_VALUE:
    // console.log(state);
      return {
        ...state,
        [action.name]: action.value,
      };

    case CREATE_EVENT:

      return {
        ...state,
      };
    case EVENT_CREATED:
      return {
        ...state,
        statusText: true,
      };
    case GET_COORDONATES:
      // console.log(state);
      return {
        ...state,
        latitude: action.lat,
        longitude: action.lng,
      };
    case GET_LONGITUDE:
      return {
        ...state,
        longitude: action.latLng,
      };
    case CHECK_EMPTY_FIELDS:
      // Si le champs title n'est pas rempli
      if (state.title.length === 0) {
        return {
          ...state,
          // On incrémente le compteur de champs non remplis
          emptyFields: state.emptyFields + 1,
        };
      }
      // Si le champs typeEvent n'est pas rempli
      if (state.typeEvent.length === 0) {
        return {
          ...state,
          // On incrémente le compteur de champs non remplis
          emptyFields: state.emptyFields + 1,
        };
      }
      // Si le champs painfulness n'est pas rempli
      if (state.painfulness.length === 0) {
        return {
          ...state,
          // On incrémente le compteur de champs non remplis
          emptyFields: state.emptyFields + 1,
        };
      }
      // Si le champs duration n'est pas rempli
      if (state.duration.length === 0) {
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
export const goCreateEvent = () => ({
  type: CREATE_EVENT,
});
export const eventCreated = () => ({
  type: EVENT_CREATED,
});
export const checkForEmptyFields = () => ({
  type: CHECK_EMPTY_FIELDS,
});
export const getCoordinates = (lat, lng) => ({
  type: GET_COORDONATES,
  lat,
  lng,
});
export const getLongitude = (latLng) => ({
  type: GET_LONGITUDE,
  latLng,
});

// == Export
export default reducer;
