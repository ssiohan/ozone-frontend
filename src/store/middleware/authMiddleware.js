/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
// == Imports: npm
import axios from 'axios';

// Import d'actions
import { DO_LOGIN, connectUser } from 'src/store/reducer/login';
import { fetchUserId } from 'src/store/reducer/profile';

// == Le middleware
const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DO_LOGIN:
      axios.post('https://api.geekoz.fr/api/login_check', {
        username: `${store.getState().login.email}`,
        password: `${store.getState().login.password}`,
      })
        .then((response) => {
          console.log(response.data);
          // En cas de succès, je stocke les tokens dans le LocalStorage
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('refresh_token', response.data.refresh_token);
          // On stocke ces tokens dans des variables
          const token = localStorage.getItem('token');
          const refresh_token = localStorage.getItem('refresh_token');
          // On lance la fonction qui stocker les tokens dans le state et rendre le user logged
          store.dispatch(connectUser(token, refresh_token));
          store.dispatch(fetchUserId());
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
        // always executed
          next(action);
        });
      break;
    default:
      next(action);
  }
};

// == Export
export default authMiddleware;
