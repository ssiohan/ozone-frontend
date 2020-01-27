/* eslint-disable linebreak-style */
// reducer pour gérer les données relatives à l'utilisateur
import eventlist from 'src/data/eventlist';
// --- initial state
const initialState = {
  search: false,
  events: eventlist,
};

// --- action types
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const AFTER_SEARCH = 'AFTER_SEARCH';

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

// --- export
export default reducer;
