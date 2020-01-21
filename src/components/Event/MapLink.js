// == Import: npm
import React from 'react';
import Link from '@material-ui/core/Link';
import MapIcon from '@material-ui/icons/Map';
import { makeStyles } from '@material-ui/core/styles';

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
const MapLink = () => {
  const classes = useStyles();
  return (
    <Link
      component="button"
      href="https://www.google.com/maps/place/Armanville,+50770+Pirou,+France/@49.1848991,-1.6136996,14z/data=!3m1!4b1!4m5!3m4!1s0x480c6ff0fc4638a9:0x5aecf58aa05723d6!8m2!3d49.184901!4d-1.59619"
      variant="body2"
      className={classes.link}
    >
      <MapIcon />
      Voir sur Maps
    </Link>
  );
};

// == Export
export default MapLink;
