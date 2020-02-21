/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
// == Imports: npm
import axios from 'axios';

// == Import d'actions
import { FETCH_USER_ID, storeUserId, fetchUserData } from 'src/store/reducer/profile';

// == Le middleware

const userIdMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_ID: {
      const token = localStorage.getItem('token');
      axios({
        method: 'get',
        url: `https://api.ozone.best/api/v1/get_user_id/${store.getState().login.email}`,
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          // console.log(response.data['User ID']);
          // En cas de succès je stocke l'ID dans le LocalStorage
          localStorage.setItem('id', response.data['User ID']);
          const userId = localStorage.getItem('id');
          store.dispatch(storeUserId(userId));
          store.dispatch(fetchUserData());
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
export default userIdMiddleware;
