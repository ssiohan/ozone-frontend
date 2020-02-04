
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FaRegUserCircle } from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';


// == Import : local
import './welcome.scss';

// == Import : sous-composants
import BannerFree from 'src/components/Banner/BannerFree';


// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
}));


// == Composant
const Welcome = () => {
  const classes = useStyles();
  return (
    <div id="signup">
      <BannerFree />
      This is the Welcome Page
    </div>
  );
};
// == Props par défault


// == Export
export default Welcome;
