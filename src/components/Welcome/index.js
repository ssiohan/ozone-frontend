
// == Import : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// == Import : local
import './welcome.scss';

// == Import : sous-composants

import Header from './Header';
import Customers from './Customers';
import Organizer from './Organizer';
import Partners from './Partners';

// == Style du composant
const useStyles = makeStyles(() => ({
  root: {
    background: 'linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0, 0, 0, 0.5)), url("src/assets/img/eole.jpg")',
    'background-size': 'cover',
    height: '100%',
  },
  header: {
    background: 'linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0, 0, 0, 0.5)), url("src/assets/img/eole.jpg")',
    'background-size': 'cover',
  },
  content: {
    flexGrow: 1,
    color: '#fff',
  },
}));


// == Composant
const Welcome = () => {
  const classes = useStyles();
  return (
    <div>
      <Header className={classes.header} />
      <Customers />
      <Organizer />
      <Partners />
    </div>
  );
};
// == Props par défault


// == Export
export default Welcome;
