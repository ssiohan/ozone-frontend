/* eslint-disable linebreak-style */
// == Imports: npm
import axios from 'axios';

// Import d'actions
import { DO_LOGIN } from 'src/store/reducer/login';

// == Le middleware
const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DO_LOGIN:
      axios.post('http://api.geekoz.fr/api/login_check', {
        username: `${store.getState().login.email}`,
        password: `${store.getState().login.password}`,
      })
        .then((response) => {
          console.log(response);
          // console.log(store.getState().login.email);
          // console.log(store.getState().login.password);
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
