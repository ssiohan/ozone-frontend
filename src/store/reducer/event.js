// == Action types
const GET_EVENT_ID = 'GET_EVENT_ID';
const USER_SUBSCRIBED = 'USER_SUBSCRIBED';
const ALREADY_SUBSCRIBE = 'ALREADY_SUBSCRIBE';
const RESET_STATUS = 'RESET_STATUS';
const NOT_CONNECTED = 'NOT_CONNECTED';
const IS_CONNECTED = 'IS_CONNECTED';
//  Action qui va lancer la requête axios
export const SET_USER_EVENT = 'SET_USER_EVENT';

// == initialState
const initialState = {
  // Valeur de départ
  eventId: '',
  userSubscribed: false,
  alreadySubscribe: false,
  userNotConnected: false,
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
    case USER_SUBSCRIBED:
      return {
        ...state,
        userSubscribed: true,
      };
    case ALREADY_SUBSCRIBE:
      return {
        ...state,
        alreadySubscribe: true,
      };
    case RESET_STATUS:
      return {
        ...state,
        alreadySubscribe: false,
        userSubscribed: false,
      };
    case NOT_CONNECTED:
      return {
        ...state,
        userNotConnected: true,
      };
    case IS_CONNECTED:
      return {
        ...state,
        userNotConnected: false,
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
export const userSubscribed = () => ({
  type: USER_SUBSCRIBED,
});
export const userIsAlreadySubscribe = () => ({
  type: ALREADY_SUBSCRIBE,
});
export const goresetStatus = () => ({
  type: RESET_STATUS,
});
export const userNotConnected = () => ({
  type: NOT_CONNECTED,
});
export const userIsConnected = () => ({
  type: IS_CONNECTED,
});

// == Export
export default reducer;
