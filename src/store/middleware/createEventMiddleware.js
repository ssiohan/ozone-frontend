/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
// == Imports: npm
import axios from 'axios';

// Import d'actions
import { DO_SIGNUP, registerUser } from 'src/store/reducer/signup';

// == Le middleware
const createEventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DO_SIGNUP:
      axios.post('https://api.geekoz.fr/api/v1/users', {
        email: `${store.getState().signup.signupEmail}`,
        pseudo: `${store.getState().signup.signupUsername}`,
        password: `${store.getState().signup.signupPassword}`,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(registerUser());
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
export default createEventMiddleware;
