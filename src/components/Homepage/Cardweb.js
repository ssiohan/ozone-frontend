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
    height: '230px',
  },
  right: {
    'padding-left': '.5em',
    background: 'no-repeat url("src/assets/img/banner2.png")',
  },
  img: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.black,
    border: '1px solid black',
    width: '100%',
    height: '100%',
  },
  title: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: 'black',
    'font-size': '1.2em',
  },
  leftContent: {
    textAlign: 'center',
    color: 'black',
  },
  rightContent: {
    padding: '0 1em',
    textAlign: 'center',
    color: 'black',
    'margin-left': '.5em',
  },
  rightContentText: {
    'text-align': 'left',
    'white-space': 'nowrap',
    color: 'black',
  },
  rightContentScore: {
    'text-align': 'left',
    'font-size': '1em',
    color: 'black',
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
    position: 'relative',
    'background-color': '#526DDB',
    color: '#fff',
    'white-space': 'nowrap',
    '&:hover': {
      backgroundColor: '#626DDB',
      color: '#fff',
    },
  },
  card: {
    'background-color': 'rgba(255, 255, 255, 0.892)',
  },
}));

const Cardweb = (event) => {
  const classes = useStyles();
  // const { events } = state.events;
  console.log(event.title);


  return (
    <Card className={classes.root}>
      <Grid className={classes.card} container spacing={0}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            className={classes.media}
            image="src/assets/img/bio.jpg"
            title="image test"
          />
        </Grid>
        <Grid className={classes.right} container spacing={0} item xs={12} sm={8}>
          <Grid container spacing={0} item xs={12} sm={12}>
            <div className={classes.title}>{event.title}</div>
          </Grid>
          <Grid container spacing={0} item xs={12} sm={3}>
            <Grid container alignItems="center" justify="flex-start" direction="column" className={classes.leftContent}>
              <Avatar aria-label="recipe" src="src/assets/img/matthew.png" sizes="small" className={classes.avatar}> </Avatar>
              <Typography className="date">{event.dateEvent}</Typography>
              <Button className={classes.cardButton} variant="contained">En Savoir Plus</Button>
            </Grid>
          </Grid>
          <Grid container wrap="nowrap" item xs={12} sm={9}>
            <div className={classes.rightContent}>
              <CardContent>
                <Grid>
                  <Typography className={classes.rightContentText}>
                    <MdPeople /> 14/20 participants
                  </Typography>
                </Grid>
                <Grid>
                  <Typography className={classes.rightContentText}>
                    <GoGraph /> Penibilité
                    <Rating name="read-only" value={event.painfulness} size="small" />
                  </Typography>
                </Grid>
                <Grid>
                  <Typography className={classes.rightContentText}>
                    <MdAccessTime /> Durée
                    <Rating name="read-only" value={event.duration} size="small" />
                  </Typography>
                </Grid>
                <Grid>
                  <Typography className={classes.rightContentText}>
                    <FaPeopleCarry /> Impact societé
                    <Rating name="read-only" value={event.impactSocietal} size="small" />
                  </Typography>
                </Grid>
                <Grid>
                  <Typography className={classes.rightContentText}>
                    <GiRecycle /> Impact environnement
                    <Rating name="read-only" value={event.impactEnvironmental} size="small" />
                  </Typography>
                </Grid>
                <Grid>
                  <Typography className={classes.rightContentScore}>
                    <FaCoins /> Score 16/20
                  </Typography>
                </Grid>
              </CardContent>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
export default Cardweb;
