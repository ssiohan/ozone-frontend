// == Import : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { MdSettings } from "react-icons/md";


// == Import : local
import './profile.scss';
import Card from './Card';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  left: {
    //border: '1px solid black',
  },
  link: {
    //border: '1px solid black',
    'margin-top': '0.5em',
    'padding-left': '1em',
  },
  right: {
    border: '1px solid black',
  },
  setting: {
    'margin-left': '.2em',
    'margin-top': '.1em',
  },
  count: {
    'padding-top': '5em',
  },
  description: {
    'margin-top': '3em',
  },
  descriptionTitle: {
    'margin-top': '3em',
    'margin-bot': '3em',
  },
  avatar: {
    'margin-top': '4em',
  },
  cards: {
    'margin-top': '4em',
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Container  maxWidth="lg" className={classes.root}>
    <Grid container direction="row">
      <Grid container item  xs={12} sm={9} className={classes.left}>
        <Grid className={classes.avatar}>
          <Avatar alt="Mme Michu" src="http://www.web-soluces.net/webmaster/avatar/GetAvataaarsCom-Femme.png" className={classes.large} />
        </Grid>
        <Grid container direction="row" className={classes.link}>
          <Typography variant="body1" className={classes.changeProfil}>Modifier profil</Typography>
          <MdSettings className={classes.setting}/>
        </Grid>
        <Grid align ='left'>
        <Typography variant="subtitle1" className={classes.descriptionTitle}>Description</Typography>
        <Typography variant="body1" className={classes.description}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={3} className={classes.right}>
        <Grid container justify="center">
        <Typography className={classes.count} variant="subtitle1">Points : 150</Typography>
        </Grid>
        <Grid className={classes.cards}>
          <Card />
          <Card />
        </Grid>
      </Grid>
    </Grid>
    </Container>
  );
}
