import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { MdPeople } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    'margin-top': '1em',
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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

        // title="Username"
        // subheader="September 14, 2016"
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
            <p className={classes.rightContentText}>
              <MdPeople /> 14/20
            </p>
          </Typography>
        </Grid>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
      <Grid>
        <Button className={classes.cardButton} variant="contained">En Savoir Plus</Button>
      </Grid>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
