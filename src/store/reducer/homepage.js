
// reducer pour gérer les données relatives à l'utilisateur

// --- initial state
const initialState = {
  search: true,
  events: [],
  category: 'all',
};

// --- action types
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const AFTER_SEARCH = 'AFTER_SEARCH';
const FILTER_CATEGORY = 'FILTER_CATEGORY';

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

// --- export
export default reducer;
