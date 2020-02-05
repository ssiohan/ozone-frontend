import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { GiEarthAmerica } from 'react-icons/gi';
import DrawerProfile from 'src/containers/Navbar/DrawerProfile';
import { NavLink } from 'react-router-dom';
import Drawer from './Drawer';
// == Import : local
import './navbar.scss';

const lightColor = 'rgba(255, 255, 255, 0.8)';


const useStyles = makeStyles((theme) => ({

  appBar: {
    // background: '-webkit-gradient(linear, right top, left bottom, from(rgba(146,100,231,1)),to(rgba(54,204,212,1)))',
    background: '#303944',
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
  linkActive: {
    'font-size': '1em',
    textDecoration: 'none',
    borderRadius: '5px',
    color: '#fff',

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

const Header = ({ logged }) => {
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
                    <NavLink underline="none" className={classes.linkearth} to="/" exact>
                      <GiEarthAmerica className={classes.earth} />
                    </NavLink>
                  </Grid>
                  <Grid>
                    <NavLink underline="none" className={classes.ozonetext} to="/" exact>
                      zone
                    </NavLink>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
          <Grid>
            <Toolbar>
              <Hidden only={['xs', 'sm']}>
                <Grid item>
                  <NavLink underline="none" className={classes.link} to="/" exact activeClassName={classes.linkActive}>
                    Accueil
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink underline="none" className={classes.link} to="/events" exact activeClassName={classes.linkActive}>
                    Les events
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink underline="none" className={classes.link} to="/create-event" exact activeClassName={classes.linkActive}>
                    Ajouter un event
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink underline="none" className={classes.link} to="/about" exact activeClassName={classes.linkActive}>
                    À propos
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink underline="none" className={classes.link} to="/sponsors" exact activeClassName={classes.linkActive}>
                    Partenaires
                  </NavLink>
                </Grid>
              </Hidden>
              {!logged && (
              // eslint-disable-next-line react/jsx-wrap-multilines
              <Grid item>
                <Button className={classes.button} color="inherit" size="small">
                  <NavLink underline="none" className={classes.linkButton} to="/login" exact>
                  Se connecter
                  </NavLink>
                </Button>
              </Grid>)}
              {!logged && (
                // eslint-disable-next-line react/jsx-wrap-multilines
                <Grid item>
                  <Button className={classes.button} variant="outlined" color="inherit" size="small">
                    <NavLink
                      underline="none"
                      className={classes.linkButton}
                      to="/signup"
                      exact
                    >
                    S'inscrire
                    </NavLink>
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
