import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

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
    background: '-webkit-gradient(linear, right top, left bottom, from(rgba(146,100,231,1)),to(rgba(54,204,212,1)))',
    height: '100%',
  },
}));

const TemporaryDrawer = ({ logged }) => {
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
        <ListItem button component="a" href="/">
          <Link underline="none" className={classes.link} href="/">
            Accueil
          </Link>
        </ListItem>
        <ListItem button component="a" href="/event">
          <Link underline="none" className={classes.link} href="/event">
            Les events
          </Link>
        </ListItem>
        <ListItem button component="a" href="/create-event">
          <Link underline="none" className={classes.link} href="/create-event">
            Ajouter un event
          </Link>
        </ListItem>
        <ListItem button component="a" href="/about">
          <Link underline="none" className={classes.link} href="/about">
            À propos
          </Link>
        </ListItem>
        <ListItem button component="a" href="/sponsors">
          <Link underline="none" className={classes.link} href="/sponsors">
            Partenaires
          </Link>
        </ListItem>
        {logged && (<ListItem button component="a" href="/sponsors">
          <Link underline="none" className={classes.link} href="/sponsors">
            test state
          </Link>
        </ListItem>)}
        
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
