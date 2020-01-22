// == Import : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

//  == Import Icons
import { GiRecycle } from 'react-icons/gi';
import { GoGraph } from 'react-icons/go';
import { FaPeopleCarry, FaCoins } from 'react-icons/fa';
import { MdPeople, MdAccessTime } from 'react-icons/md';

// == Import : local
import './homepage.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    'margin-bottom': '1em',
    height: '250px',
  },
  right: {
    'padding-left': '1em',
  },
  img: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '1px solid black',
    width: '100%',
    height: '100%',
  },
  title: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.black,
    'font-size': '1.5em',
  },
  leftContent: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // 'border-right': '1px dashed black',
  },
  rightContent: {
    padding: '0 1em',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
  },
  rightContentText: {
    'text-align': 'left',
  },
  rightContentScore: {
    'text-align': 'left',
    'font-size': '1.5em',
  },
  avatar: {
    'text-align': 'center',
    'margin-top': '1em',
  },
  divider: {
    height: '80%',
    // 'margin-left': '1em',
  },
  media: {
    width: '100%',
    height: '100%',
  },
  cardButton: {
    'background-color': '#078171',
    color: '#fff',
    'white-space': 'nowrap',
    '&:hover': {
      backgroundColor: '#196A75',
      color: '#fff',
    },
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid className={classes.card} container spacing={0}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            className={classes.media}
            image="src/assets/img/IMG_1155.JPG"
            title="image test"
          />
        </Grid>
        <Grid className={classes.right} container spacing={0} item xs={12} sm={8}>
          <Grid container spacing={0} item xs={12} sm={12}>
            <div className={classes.title}>Titre de l'évenement</div>
          </Grid>
          <Grid container spacing={0} item xs={12} sm={3}>
            <Grid container alignItems="center" justify="flex-start" direction="column" className={classes.leftContent}>
              <Avatar aria-label="recipe" className={classes.avatar}>
                oZ
              </Avatar>
              <Typography className="date">16/22/2020</Typography>
              <Button className={classes.cardButton} variant="contained">En Savoir Plus</Button>
            </Grid>
          </Grid>
          <Grid container wrap="nowrap" item xs={12} sm={9}>
            <div className={classes.rightContent}>
              <CardContent>
                <Typography>
                  <p className={classes.rightContentText}>
                    <MdPeople /> 14/20 participants
                  </p>
                </Typography>
                <Typography>
                  <p className={classes.rightContentText}>
                    <GoGraph /> Penibilité
                    <Rating name="read-only" value={4} size="small" />
                  </p>
                </Typography>
                <Typography>
                  <p className={classes.rightContentText}>
                    <MdAccessTime /> Durée
                    <Rating name="read-only" value={4} size="small" />
                  </p>
                </Typography>
                <Typography>
                  <p className={classes.rightContentText}>
                    <FaPeopleCarry /> Impact societé
                    <Rating name="read-only" value={4} size="small" />
                  </p>
                </Typography>
                <Typography>
                  <p className={classes.rightContentText}>
                    <GiRecycle /> Impact environnement
                    <Rating name="read-only" value={4} size="small" />
                  </p>
                </Typography>
                <Typography>
                  <p className={classes.rightContentScore}>
                    <FaCoins /> Score 16/20
                  </p>
                </Typography>
              </CardContent>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
