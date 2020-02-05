// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { GiEarthAmerica } from 'react-icons/gi';
import { makeStyles } from '@material-ui/core/styles';
// == Import : local
import './welcome.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  logoozone: {
    width: '18em',
    opacity: '.8',
  },
}));
// == Composant
const Section1 = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" id="section1" justify="center">
      <Grid item xs={12}>
        <img className={classes.logoozone} src="src/assets/img/logoz.png" alt="logo-ozone" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2">
          Bienvenue sur oZone
        </Typography>
      </Grid>
    </Grid>
  )
};

// == Export
export default Section1;
