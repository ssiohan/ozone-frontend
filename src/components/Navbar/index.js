import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// == Import : local
import './navbar.scss';

const lightColor = 'rgba(255, 255, 255, 0.7)';


const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
    background: 'linear-gradient(90deg,#00c4cc 0,#7d37e4 100%);',
    height: '250px',
    // background: 'no-repeat url("src/assets/img/banner.png")',
    // opacity: '.9',
  },
  appBar: {
    background: 'linear-gradient(90deg,#00c4cc 0,#7d37e4 100%);',
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
    marginTop: '12px',
  },
  link: {
    textDecoration: 'none',
    margin: '1em',
    color: lightColor,
    // margin: '1em',
    '&:hover': {
      color: theme.palette.common.white,
    },

  },
  button: {
    borderColor: lightColor,
    margin: '8px',
    marginTop: '20px',
  },
  ozonelogo: {
    'margin-top': '7px',
    'margin-left': '-7px',
  },
  ozonetext: {
    marginTop: '15px',
  },
  ozoneimg: {
    width: '70px',
  },
});

function Header(props) {
  const { classes, onDrawerToggle } = props;

  return (
    <React.Fragment className={classes.colornav}>
      <AppBar className={classes.appBar} position="sticky" elevation={0}>
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
                <img className={classes.ozoneimg} src="src/assets/img/logo_sans_fond.png" alt="" />
                <Typography className={classes.ozonetext} align="left" color="inherit" variant="h4" component="h1">
                  Zone
                </Typography>
              </Grid>
            </Hidden>
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
          </Grid>
        </Toolbar>
      </AppBar>
      <Hidden only={['xs', 'sm']}>
        <AppBar
          component="div"
          justify="center"
          className={classes.secondaryBar}
          color="primary"
          position="static"
          elevation={0}
        >
          <Grid container justify="center">
            <Toolbar>
              <Grid item>
                <Link className={classes.link} href="/">
                  Acceuil
                </Link>
              </Grid>
              <Grid wrap="nowrap" item>
                <Link className={classes.link} href="/event">
                  Les events
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.link} href="/create-event">
                  Ajouter un event
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.link} href="/about">
                  À propos
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.link} href="/sponsors">
                  Partenaires
                </Link>
              </Grid>
            </Toolbar>
          </Grid>
        </AppBar>
      </Hidden>
    </React.Fragment>

  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
