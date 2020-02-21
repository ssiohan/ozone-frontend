// middleware pour participer à un event
// == Imports: npm
import axios from 'axios';

// == Import d'actions
import { SET_USER_EVENT, userSubscribed, userIsAlreadySubscribe } from 'src/store/reducer/event';

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
            store.dispatch(userSubscribed());
            // alert('bien inscrit');
          }
          if (response.data === 'utilisateur déja inscrit') {
            store.dispatch(userIsAlreadySubscribe());
            //  alert('dèjà inscrit');
          }
        })
        .catch((error) => {
          console.log(error);
          alert('token expiré');
        });
    }
      break;
    default:
      next(action);
  }
};

// == Export
export default setUserEventMiddleware;
// création nouveau participant
// utilisateur déja inscrit
