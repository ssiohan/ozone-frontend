/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
// == Imports: npm
import axios from 'axios';

// Import d'actions
import { CREATE_EVENT, eventCreated } from 'src/store/reducer/createEvent';

// == Le middleware
const createEventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_EVENT:
      // const userId = localStorage.getItem('id');
      // parsInt: transform a string to number (10 in second param is require)

      axios({
        method: 'POST',
        url: 'https://api.geekoz.fr/api/v1/events',
        headers: { Authorization: `Bearer ${store.getState().login.token}` },
        data: {
          title: `${store.getState().createEvent.title}`,
          typeEvent: `${store.getState().createEvent.typeEvent}`,
          description: `${store.getState().createEvent.description}`,
          dateEvent: `${store.getState().createEvent.dateEvent}`,
          painfulness: parseInt(store.getState().createEvent.painfulness, 10),
          duration: parseInt(store.getState().createEvent.duration, 10),
          impactSocietal: parseInt(store.getState().createEvent.impactSocietal, 10),
          impactEnvironmental: parseInt(store.getState().createEvent.impactEnvironmental, 10),
          userMin: parseInt(store.getState().createEvent.userMin, 10),
          userMax: parseInt(store.getState().createEvent.userMax, 10),
          city: `${store.getState().createEvent.city}`,
          latitude: `${store.getState().createEvent.latitude}`,
          longitude: `${store.getState().createEvent.longitude}`,
          author: parseInt(localStorage.getItem('id'), 10),
          adress: `${store.getState().createEvent.address}`,
        },
      })
        .then((response) => {
          console.log(response.statusText);


          // condition pour le message de validation et la redirection aprés l'envoi du formulaire
          // store.dispatch(eventCreated());
          if (response.statusText === 'Created') {
            store.dispatch(eventCreated());
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
        //  always executed
          next(action);
        });
      break;
    default:
      next(action);
  }
};

// == Export
export default createEventMiddleware;
