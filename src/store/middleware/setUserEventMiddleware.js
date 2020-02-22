// middleware pour participer à un event
// == Imports: npm
import axios from 'axios';

// == Import d'actions
import {
  SET_USER_EVENT,
  userSubscribed,
  userIsAlreadySubscribe,
  userNotConnected,
  userIsConnected,
} from 'src/store/reducer/event';

import { logoutUser } from 'src/store/reducer/login';

// == middleware

const setUserEventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SET_USER_EVENT: {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('id');
      const eventId = parseInt(store.getState().event.eventId, 10);

      axios({
        method: 'post',
        url: `https://api.ozone.best/api/v1/users/${userId}/user_subscribe/${eventId}`,
        headers: { Authorization: `Bearer ${token}` },
        //  route et methode qui verifie si user dèjà inscrit:
        // url: `https://api.ozone.best/api/v1/users/${userId}/has_subscribed/${eventId}}`,
        // method: 'get',
      })
        .then((response) => {
          // console.log(response);

          if (response.data === 'création nouveau participant') {
            // pop-up => vous etes Bien inscrit à l'event
            store.dispatch(userSubscribed());
          }

          if (response.data === 'utilisateur déja inscrit') {
            // pop-up => vous etes deja inscrit
            store.dispatch(userIsAlreadySubscribe());
          }
        })
        .catch((error) => {
          console.log(error);

          // Si le token est expiré: passe le state logout à false et permet de se reconnecter
          store.dispatch(logoutUser());

          // pop-up => veuillez vous inscrire
          store.dispatch(userNotConnected());
          // store.dispatch(userIsConnected());
        });
    }
      break;
    default:
      next(action);
  }
};

// == Export
export default setUserEventMiddleware;
