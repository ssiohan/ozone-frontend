// == Import: npm
import React from 'react';
import Link from '@material-ui/core/Link';
import MapIcon from '@material-ui/icons/Map';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// Sources:
// https://material-ui.com/components/links/
// https://material-ui.com/components/material-icons/

// == Style du link custom
const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1),
    color: '#078171',
    fontWeight: 'bold',
  },
}));

// == Composant
const MapLink = ({ address }) => {
  const classes = useStyles();
  const baseUrl = 'https://www.google.com/maps/place/';
  return (
    <Link
      component="a"
      href={`${baseUrl}` + `${address}`}
      variant="body2"
      className={classes.link}
      target="_blank"
    >
      <MapIcon />
      Voir sur Google Maps
    </Link>
  );
};
MapLink.propTypes = {
  address: PropTypes.string.isRequired,
};
// == Export
export default MapLink;
