
// reducer pour gérer les données relatives à l'utilisateur

// --- initial state
const initialState = {
  search: false,
  events: [],
  category: 'all',
  inputValue: '',
  loading: true,
  latitude: '',
  longitude: '',
  address: '',
};

// --- action types
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const AFTER_SEARCH = 'AFTER_SEARCH';
const FILTER_CATEGORY = 'FILTER_CATEGORY';
const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
const GET_COORDONATES = 'GET_COORDONATES';


export const FETCH_DATA = 'FETCH_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const STOP_LOADING = 'STOP_LOADING';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value,
      };
    case AFTER_SEARCH:
      return {
        ...state,
        search: true,
      };

    case RECEIVE_DATA:
      return {
        ...state,
        events: action.events,
      };

    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case FILTER_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case GET_COORDONATES:
      // console.log(state);
      return {
        ...state,
        latitude: action.lat,
        longitude: action.lng,
      };

    default: return state;
  }
};

// --- action creators
export const changeInput = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});
export const afterSearch = () => ({
  type: AFTER_SEARCH,
});
export const fetchData = () => ({
  type: FETCH_DATA,
});

export const receiveData = (events) => ({
  type: RECEIVE_DATA,
  // events: events,
  events,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});
export const ateliercategory = (category) => ({
  type: FILTER_CATEGORY,
  category,
});
export const changeFieldValue = (name, value) => ({
  type: CHANGE_FIELD_VALUE,
  name,
  value,
});
export const getCoordinates = (lat, lng) => ({
  type: GET_COORDONATES,
  lat,
  lng,
});

// --- export
export default reducer;
