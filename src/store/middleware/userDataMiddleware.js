/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
// == Imports: npm
import axios from 'axios';

// == Import d'actions
import { FETCH_USER_DATA, storeUserData } from 'src/store/reducer/profile';

// == Le middleware

const userDataMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_DATA: {
      const token = localStorage.getItem('token');
      axios({
        method: 'get',
        url: `https://api.geekoz.fr/api/v1/users/${store.getState().profile.userId}`,
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response.data);
          // Je stocke les infos du user dans le state
          store.dispatch(storeUserData(response.data));
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
export default userDataMiddleware;
