/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
// == Imports: npm
import axios from 'axios';

// Import d'actions
import { GET_TOKENS } from 'src/store/reducer/login';

// == Le middleware
const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_TOKENS:
      axios.post('https://api.geekoz.fr/api/login_check', {
        username: `${store.getState().login.email}`,
        password: `${store.getState().login.password}`,
      })
        .then((response) => {
          console.log(response);
          // En cas de succès, je stocke les tokens dans le LocalStorage
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('refresh_token', response.data.refresh_token);
          // On stocke ensuite ces tokens dans des variables
          const token = localStorage.getItem('token');
          const refresh_token = localStorage.getItem('refresh_token');
          // On stocke ces données dans le state
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
