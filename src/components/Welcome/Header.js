// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
// import { GiEarthAmerica } from 'react-icons/gi';
import { makeStyles } from '@material-ui/core/styles';
// == Import : local
import './welcome.scss';

const useStyles = makeStyles(() => ({
  root: {
    background: ' top linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0, 0, 0, 0.5)), url("src/assets/img/eole.jpg")',
    'background-size': 'cover',
    height: '550px',
    'background-position-y': 'bottom',
    color: '#fff',
    
  },
  logoozone: {
    width: '100%',
    opacity: '.8',
  },
  h1: {
    maxWidth: '980px',
    margin: '0 auto',
  
  },
  title: {
    margin: '1em 0',
  },
  subtitle: {
    margin: '.5em 0',
  },
}));
// == Composant
const Header = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container direction="column" justify="center">
      <Grid className={classes.h1} item>
        <Hidden only={['sm', 'md', 'lg', 'xl']}>
          <Typography className={classes.title} variant="h3" component="h1">Faites des actes écologiques et recevez des récompenses</Typography>
        </Hidden>
        <Hidden only={['xs']}>
          <Typography className={classes.title} variant="h2" component="h1">Faites des actes écologiques et recevez des récompenses</Typography>
        </Hidden>
      </Grid>
      <Hidden only={['xs']}>
        <Grid className={classes.h1} item xs>
          <Typography className={classes.subtitle} variant="h4" component="h2">Créez, Organisez, Participez...</Typography>
          <Typography className={classes.subtitle} variant="h6" component="h3">Et cumulez des points que vous pouvez échanger</Typography>
          <Typography className={classes.subtitle} variant="h6" component="h3">contre les lots ou les avantages mis à disposition par nos partenaires.</Typography>
        </Grid>
      </Hidden>
    </Grid>
  )
};

// == Export
export default Header;
