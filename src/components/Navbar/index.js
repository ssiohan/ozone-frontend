import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { GiEarthAmerica } from 'react-icons/gi';
import Drawer from './Drawer';

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
    color: lightColor,
    // margin: '1em',
    '&:hover': {
      color: theme.palette.common.white,
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
    'margin-top': '9px',
    'margin-left': '7px',
  },
  ozonetext: {
    color: lightColor,
    'margin-top': '9px',
  },
  ozoneimg: {
    'margin-top': '9px',
  },
}));

const Header = ({ logged }) => {

  // logged: value in the state: if logged is false "s'inscrire" and "se connecter" buttons appears
  // if logged is true and <Avatar /> appear

  // const onDrawerToggle = props;

  const classes = useStyles();
  return (

    <AppBar className={classes.appBar} position="sticky" elevation={0}>
      <Toolbar>
        <Grid container spacing={1}>
          <Hidden mdUp>
            <Grid item>
              <Drawer className={classes.appBar} />
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid className={classes.ozonelogo} item xs>
              <Typography align="left" color="inherit" variant="h5" component="h1"> </Typography>
            </Grid>
          </Hidden>
          <Hidden only={['xs', 'sm']}>
            <Grid className={classes.ozonelogo} item xs>
              {/* <img
                className={classes.ozoneimg}
                src="src/assets/img/logo_sans_fond.png"
                alt=""
              /> */}
              <Typography align="left" color="inherit" variant="h4" component="h1">
                <Link underline="none" className={classes.linkearth} href="/">
                  <GiEarthAmerica className={classes.ozoneimg} />
                </Link>
                <Link underline="none" className={classes.ozonetext} href="/">
                  zone
                </Link>
              </Typography>
            </Grid>
          </Hidden>
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
                  <IconButton color="inherit" className={classes.iconButtonAvatar}>
                    <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
                  </IconButton>
                </Grid>)}
            </Toolbar>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
Header.propTypes = {

  logged: PropTypes.bool.isRequired,
};

export default Header;
