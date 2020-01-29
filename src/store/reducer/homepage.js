
// reducer pour gérer les données relatives à l'utilisateur
//import eventlist from 'src/data/eventlist';
// --- initial state
const initialState = {
  search: false,
  events: [],
};

// --- action types
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const AFTER_SEARCH = 'AFTER_SEARCH';
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

// --- export
export default reducer;
