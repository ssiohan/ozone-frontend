/* eslint-disable linebreak-style */
// reducer pour gérer les données relatives à l'utilisateur

// --- initial state
const initialState = {
  username: '',
  avatar: '',
};

// --- action types
const LOG_USER = 'LOG_USER';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_USER:
      return {
        ...state,
        username: action.username,
        avatar: action.avatar,
      };

    default: return state;
  }
};

// --- action creators
export const logUser = (username, avatar) => ({
  type: LOG_USER,
  username,
  avatar,
});

// --- export
export default reducer;
