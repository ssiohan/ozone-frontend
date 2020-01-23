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
import { FaMapMarkerAlt } from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
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
    backgroundColor: '#078171',
  },
  cardButton: {
    'margin-bottom': '1em',
    backgroundColor: '#078171',
  },
  action: {
    margin: '1em',
  },
  text: {
    'margin-top': '.5em',
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          (
            <Grid container>
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
              <Typography className={classes.user}>Username</Typography>
            </Grid>
           )
           }
        action={
          (
            <IconButton aria-label="settings">
              <FaMapMarkerAlt />
              <Typography>localisation</Typography>
            </IconButton>
          )
          }
      />
      <CardMedia
        className={classes.media}
        image="/src/assets/img/IMG_1155.JPG"
        title="Paella dish"
      />
      <CardContent>
        <Grid container spacing={0} item xs={12} sm={12}>
          <Typography className={classes.text} align="left" variant="h4">Titre de l'évenement</Typography>
        </Grid>
        <Typography className={classes.text} align="left">16/22/2020</Typography>
        <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions className={classes.action} disableSpacing>
        <Grid container justify="space-between" spacing={2} item xs={12}>
          <Button variant="contained" size="small">atelier créatif</Button>
          <Typography>
            <Typography className={classes.rightContentText}>
              <MdPeople /> 14/20
            </Typography>
          </Typography>
        </Grid>
      </CardActions>
      <Grid>
        <Button className={classes.cardButton} variant="contained">En Savoir Plus</Button>
      </Grid>
    </Card>
  );
}
