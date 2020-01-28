/* eslint-disable camelcase */
// == Imports: npm
import axios from 'axios';

// Import d'actions
import { } from 'src/store/reducer/signup';

// == Le middleware
const registerMiddleware = (store) => (next) => (action) => {
  next(action);
};

// == Export
export default registerMiddleware;
