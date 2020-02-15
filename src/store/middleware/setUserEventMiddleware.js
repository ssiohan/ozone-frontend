/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
// == Imports: npm
import axios from 'axios';

// == Import d'actions
import { SET_USER_EVENT } from 'src/store/reducer/event';

// == Le middleware

const setUserEventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SET_USER_EVENT: {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('id');
      const eventId = parseInt(store.getState().event.eventId, 10);

      axios({
        method: 'post',
        url: `https://api.geekoz.fr/api/v1/users/${userId}/user_subscribe/${eventId}`,
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
      break;
    default:
      next(action);
  }
};

// == Export
export default setUserEventMiddleware;
