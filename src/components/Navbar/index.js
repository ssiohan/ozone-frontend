import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { GiEarthAmerica } from 'react-icons/gi';
import Drawer from './Drawer';
import DrawerProfile from './DrawerProfile';

// == Import : local
import './navbar.scss';

const lightColor = 'rgba(255, 255, 255, 0.8)';


const useStyles = makeStyles((theme) => ({

  appBar: {
    background: '-webkit-gradient(linear, right top, left bottom, from(rgba(146,100,231,1)),to(rgba(54,204,212,1)))',
    padding: '.5em',
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    'font-size': '.8em',
    textDecoration: 'none',
    margin: '.5em',
    color: '#fff',
    // margin: '1em',
    '&:hover': {
      color: lightColor,
    },

  },
  linkButton: {
    textDecoration: 'none',
    margin: '.5em',
    color: lightColor,
    // margin: '1em',
    '&:hover': {
      color: theme.palette.common.white,
    },

  },
  linkearth: {
    'font-size': '.8em',
    textDecoration: 'none',
    color: lightColor,
    // margin: '1em',
    '&:hover': {
      color: theme.palette.common.white,
    },

  },
  button: {
    borderColor: lightColor,
    'margin-top': '.5em',
  },
  ozonelogo: {
    'margin-top': '5px',
    'margin-left': '7px',
  },
  ozonetext: {
    color: lightColor,
    // 'margin-top': '1em',
    'font-size': '3rem',
    fontFamily: 'system-ui',
  },
  ozoneimg: {
    'margin-top': '1px',
    'font-size': '3rem',
  },
  earth: {
    fontSize: '3em',
    'margin-top': '2px',
  },
}));

const Header = ({ logged, emailValue }) => {
// console.log(logged);
  // logged: value in the state: if logged is false "s'inscrire" and "se connecter" buttons appears
  // if logged is true and <Avatar /> appear

  // const onDrawerToggle = props;

  const classes = useStyles();
  return (

    <AppBar className={classes.appBar} position="sticky" elevation={0}>
      <Toolbar>
        <Grid container justify="space-between" wrap="nowrap" spacing={1}>
          <Grid>
            <Hidden mdUp>
              <Grid item>
                <Drawer className={classes.appBar} />
              </Grid>
            </Hidden>
            <Hidden only={['xs', 'sm']}>
              <Grid className={classes.ozonelogo}>
                <Grid container direction="row">
                  <Grid>
                    <Link underline="none" className={classes.linkearth} href="/">
                      <GiEarthAmerica className={classes.earth} />
                    </Link>
                  </Grid>
                  <Grid>
                    <Link underline="none" className={classes.ozonetext} href="/">
                      zone
                    </Link>
                  </Grid>
                  {logged && (
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <Grid item>
                    <Typography color="inherit" variant="body2">{emailValue} </Typography>
                  </Grid>)}
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
          <Grid>
            <Toolbar>
              <Hidden only={['xs', 'sm']}>
                <Grid item>
                  <Link underline="none" className={classes.link} href="/">
                    Accueil
                  </Link>
                </Grid>
                <Grid item>
                  <Link underline="none" className={classes.link} href="/event">
                    Les events
                  </Link>
                </Grid>
                <Grid item>
                  <Link underline="none" className={classes.link} href="/create-event">
                    Ajouter un event
                  </Link>
                </Grid>
                <Grid item>
                  <Link underline="none" className={classes.link} href="/about">
                    À propos
                  </Link>
                </Grid>
                <Grid item>
                  <Link underline="none" className={classes.link} href="/sponsors">
                    Partenaires
                  </Link>
                </Grid>
              </Hidden>
              {!logged && (
              // eslint-disable-next-line react/jsx-wrap-multilines
              <Grid item>
                <Button className={classes.button} color="inherit" size="small">
                  <Link underline="none" className={classes.linkButton} href="/login">
                  Se connecter
                  </Link>
                </Button>
              </Grid>)}
              {!logged && (
                // eslint-disable-next-line react/jsx-wrap-multilines
                <Grid item>
                  <Button className={classes.button} variant="outlined" color="inherit" size="small">
                    <Link
                      underline="none"
                      className={classes.linkButton}
                      href="/signup"
                    >
                    S'inscrire
                    </Link>
                  </Button>
                </Grid>)}
              {logged && (
              // eslint-disable-next-line react/jsx-wrap-multilines
              <Grid item>
                <DrawerProfile />
              </Grid>)}
            </Toolbar>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
Header.propTypes = {

  logged: PropTypes.bool.isRequired,
  emailValue: PropTypes.string,
};

export default Header;
