import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';

const lightColor = 'rgba(255, 255, 255, 0.8)';

const useStyles = makeStyles((theme) => ({

  list: {
    width: 250,
    height: 1080,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    'font-size': '.8em',
    textDecoration: 'none',
    margin: '.5em',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  drawer: {
    background: '#303944',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

  },
}));

const TemporaryDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List className={classes.drawer}>
        <ListItem>
          <NavLink underline="none" className={classes.link} to="/" exact activeClassName={classes.linkActive}>
            Accueil
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink underline="none" className={classes.link} to="/events" exact activeClassName={classes.linkActive}>
            Les events
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink underline="none" className={classes.link} to="/create-event" exact activeClassName={classes.linkActive}>
            Ajouter un event
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink underline="none" className={classes.link} to="/about" exact activeClassName={classes.linkActive}>
            À propos
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink underline="none" className={classes.link} to="/sponsors" exact activeClassName={classes.linkActive}>
            Partenaires
          </NavLink>
        </ListItem>
      </List>
    </div>
  );


  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        className={classes.menuButton}
        onClick={toggleDrawer('left', true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>

    </div>
  );
}
export default TemporaryDrawer;
