import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { MdPeople } from 'react-icons/md';
import { FaMapMarkerAlt, FaCoins } from 'react-icons/fa';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    'margin-top': '1em',
    margin: 'auto',
  },
  user: {
    'margin-top': '.5em',
    'margin-left': '.5em',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#303944',
  },
  cardButton: {
    'margin-bottom': '1em',
    backgroundColor: '#303944',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#203944',
      color: '#fff',
    },
  },
  action: {
    margin: '.8em',
  },
  text: {
    'margin-top': '.5em',
  },
}));
const score = (a, b, c, d) => (a + b + c + d);

const Cardmob = ({
  userMax,
  description,
  city,
  image,
  author,
  typeEvent,
  title,
  dateEvent,
  painfulness,
  duration,
  impactSocietal,
  impactEnvironmental,
  eventUsers,
}) => {
  const classes = useStyles();
  const treatDate = (apiDate) => {
    const date = apiDate;
    // retourne la date au format jour/mois/année
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const formatDate = `${day}/${month}/${year}`;

    return formatDate;
  };
  const date = treatDate(dateEvent);
  // function result return a /20 score
  const result = score(painfulness, duration, impactSocietal, impactEnvironmental);
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          (
            <Grid container>
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
              <Typography className={classes.user}>{author.pseudo}</Typography>
            </Grid>
           )
           }
        action={
          (
            <IconButton aria-label="settings">
              <FaMapMarkerAlt />
              <Typography>{city}</Typography>
            </IconButton>
          )
          }
      />
      <CardMedia
        className={classes.media}
        image={`https://api.ozone.best/uploads/images/${image}`}
        title="Paella dish"
      />
      <CardContent>
        <Grid container spacing={0} item xs={12} sm={12}>
          <Typography className={classes.text} align="left" variant="h5">{title}</Typography>
        </Grid>
        <Typography className={classes.text} align="left">{date}</Typography>
        <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.action} disableSpacing>
        <Grid container justify="space-between">
          <Grid item xs={3}>
            <Button variant="contained" size="small">{typeEvent}</Button>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="column" justify="space-between" spacing={2} wrap="nowrap" item xs={12}>
              <Typography className={classes.rightContentText}>
                <MdPeople /> {eventUsers.length}/{userMax}
              </Typography>
              <Typography className={classes.rightContentText}>
                <FaCoins /> {result} /20
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardActions>
      <Grid>
        <Link to={`/event/${slugify(title)}`}>
          <Button href="" className={classes.cardButton} variant="contained">En Savoir Plus</Button>
        </Link>
      </Grid>
    </Card>
  );
};
Cardmob.propTypes = {
  userMax: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  dateEvent: PropTypes.string.isRequired,
  painfulness: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  impactSocietal: PropTypes.number.isRequired,
  impactEnvironmental: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  typeEvent: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  eventUsers: PropTypes.array.isRequired,
};
export default Cardmob;
