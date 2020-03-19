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
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { Link } from 'react-router-dom';


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
    maxHeight: '280px',
  },
  right: {
    'padding-left': '.5em',
    background: 'no-repeat url("src/assets/img/banner2.png")',
    'background-size': '700px 280px',
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
    'font-size': '1em',
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
    'background-color': '#303944',
    color: '#fff',
    'white-space': 'nowrap',
    '&:hover': {
      backgroundColor: '#203944',
      color: '#fff',
    },
  },
  card: {
    'background-color': 'rgba(255, 255, 255, 0.892)',
  },
}));
const score = (a, b, c, d) => (a + b + c + d);

const Cardweb = ({
  userMax,
  author,
  image,
  title,
  dateEvent,
  painfulness,
  duration,
  impactSocietal,
  impactEnvironmental,
}) => {
  const classes = useStyles();
  // function result return a /20 score
  const result = score(painfulness, duration, impactSocietal, impactEnvironmental);
  // const nbEventUsers = eventUsers.length();

  const treatDate = (apiDate) => {
    const date = apiDate;
    // retourne la date au format jour/mois/année
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const formatDate = `${day}/${month}/${year}`;

    return formatDate;
  };
  // const treatHour = (apiDate) => {
  //   const date = apiDate;
  //   // retourne l'heure au format jour/mois/année
  //   const hour = date.slice(11, 13);
  //   const minute = date.slice(14, 16);
  //   const formatHour = `${hour}:${minute}`;


  //   return formatHour;
  // };
  const date = treatDate(dateEvent);
  // const time = treatHour(dateEvent);
  return (
    <Card className={classes.root}>
      <Grid className={classes.card} container spacing={0}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            className={classes.media}
            image={`https://api.ozone.best/uploads/images/${image}`}
            title="image test"
          />
        </Grid>
        <Grid className={classes.right} container spacing={0} item xs={12} sm={8}>
          <Grid container spacing={0} item xs={12} sm={12}>
            <div className={classes.title}>{title}</div>
          </Grid>
          <Grid container spacing={0} item xs={12} sm={3}>
            <Grid container alignItems="center" justify="flex-start" direction="column" className={classes.leftContent}>
              <Avatar aria-label="recipe" src={`https://api.ozone.best/uploads/images/${author.avatar}`} sizes="small" className={classes.avatar}> </Avatar>
              <Typography>{author.pseudo}</Typography>
              <Typography className="date">{date}</Typography>
              <Link to={`/event/${slugify(title)}`}>
                <Button href="" className={classes.cardButton} variant="contained">En savoir plus</Button>
              </Link>
            </Grid>
          </Grid>
          <Grid container wrap="nowrap" item xs={12} sm={9}>
            <div className={classes.rightContent}>
              <CardContent>
                <Grid>
                  <Typography className={classes.rightContentText}>
                    <MdPeople /> 14/{userMax} participants
                  </Typography>
                </Grid>
                <Grid>
                  <Typography className={classes.rightContentText}>
                    <GoGraph /> Penibilité
                    <Rating name="read-only" value={painfulness} size="small" />
                  </Typography>
                </Grid>
                <Grid>
                  <Typography className={classes.rightContentText}>
                    <MdAccessTime /> Durée
                    <Rating name="read-only" value={duration} size="small" />
                  </Typography>
                </Grid>
                <Grid>
                  <Typography className={classes.rightContentText}>
                    <FaPeopleCarry /> Impact societé
                    <Rating name="read-only" value={impactSocietal} size="small" />
                  </Typography>
                </Grid>
                <Grid>
                  <Typography className={classes.rightContentText}>
                    <GiRecycle /> Impact environnement
                    <Rating name="read-only" value={impactEnvironmental} size="small" />
                  </Typography>
                </Grid>
                <Grid>
                  <Typography className={classes.rightContentScore}>
                    <FaCoins /> Score {result} /20
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
Cardweb.propTypes = {
  userMax: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  dateEvent: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  painfulness: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  impactSocietal: PropTypes.number.isRequired,
  impactEnvironmental: PropTypes.number.isRequired,
};
export default Cardweb;
