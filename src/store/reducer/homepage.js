/* eslint-disable linebreak-style */
// reducer pour gérer les données relatives à l'utilisateur

// --- initial state
const initialState = {
  search: false,
};

// --- action types
const AFTER_SEARCH = 'AFTER_SEARCH';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case AFTER_SEARCH:
      return {
        ...state,
        search: true,
      };

    default: return state;
  }
};

// --- action creators
export const logUser = (description, banner, bannerAfter, leftbar) => ({
  type: AFTER_SEARCH,
  description,
  banner,
  bannerAfter,
  leftbar,
});

// --- export
export default reducer;
