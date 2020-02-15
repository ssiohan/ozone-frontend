// == Action types
const GET_EVENT_ID = 'GET_EVENT_ID';
//  Action qui va lancer la requête axios
export const SET_USER_EVENT = 'SET_USER_EVENT';

// == initialState
const initialState = {
  // Valeur de départ
  eventId: '',
  // userId: '',
};

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_EVENT_ID:
      // console.log(state);
      return {
        ...state,
        eventId: action.id,
      };
    case SET_USER_EVENT:

      return {
        ...state,
      };

    default:
      return state;
  }
};

// == Action creators
export const getEventId = (id) => ({
  type: GET_EVENT_ID,
  id,
});
export const goSetUserEvent = () => ({
  type: SET_USER_EVENT,
});

// == Export
export default reducer;
