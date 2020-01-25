import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { GiEarthAmerica } from 'react-icons/gi';

// == Import : local
import './navbar.scss';

const lightColor = 'rgba(255, 255, 255, 0.8)';


const styles = (theme) => ({
  // secondaryBar: {
  //   zIndex: 0,
  //   // background: 'linear-gradient(90deg,#00c4cc 0,#7d37e4 100%)'
  //   // 'background-image': '-webkit-gradient(linear, right top, left bottom, from(rgba(125,55,228,0.5)),to(rgba(0,196,204,0.5)))',
  //   height: '250px',
  //   // background: 'no-repeat url("src/assets/img/banner.png")',
  //   // opacity: '.9',
  // },
  appBar: {
    background: '-webkit-gradient(linear, right top, left bottom, from(rgba(125,55,228,0.8)),to(rgba(0,196,204,0.8)))',
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
    // marginTop: '10px',
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
});

function Header(props) {
  const { classes, onDrawerToggle } = props;

  return (
    <React.Fragment className={classes.colornav}>
      <AppBar className={classes.appBar} position="" elevation={0}>
        <Toolbar>
          <Grid container spacing={1}>
            <Hidden mdUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid className={classes.ozonelogo} item xs>
                <Typography align="left" color="inherit" variant="h5" component="h1"> </Typography>
              </Grid>
            </Hidden>
            <Hidden only={['xs', 'sm']}>
              <Grid className={classes.ozonelogo} container xs>
                {/* <img className={classes.ozoneimg} src="src/assets/img/logo_sans_fond.png" alt="" /> */}
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
            <Hidden only={['xs', 'sm']}>
              <Toolbar>
                <Grid wrap="nowrap" item>
                  <Link underline="none" className={classes.link} href="/">
                    Accueil
                  </Link>
                </Grid>
                <Grid wrap="nowrap" item>
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
                <Grid item>
                  <Button className={classes.button} variant="" color="inherit" size="small">
                  Se connecter
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.button} variant="outlined" color="inherit" size="small">
                  S'inscrire
                  </Button>
                </Grid>
                <Grid item>
                  <IconButton color="inherit" className={classes.iconButtonAvatar}>
                    <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
                  </IconButton>
                </Grid>
              </Toolbar>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>

  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
