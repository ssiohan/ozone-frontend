import axios from 'axios';

import { FETCH_DATA, receiveData, stopLoading } from '../reducer/homepage';

const eventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA:
      // appel axios
      axios.get('https://api.geekoz.fr/api/v1/events')
        .then((response) => {
          console.log(response);
          const receiveDataAction = receiveData(response.data);
          store.dispatch(receiveDataAction);
        })
        .catch((error) => {
          // console.error show an error on console
          console.error(error);
        })
        .finally(() => {
          const stopLoadingAction = stopLoading();
          store.dispatch(stopLoadingAction);
        });
      break;

    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default eventsMiddleware;
