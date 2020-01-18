// == Import : npm
import React from 'react';

// == Import : local
import './card.scss';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { GiRecycle } from 'react-icons/gi';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { GoGraph } from 'react-icons/go';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FaPeopleCarry } from 'react-icons/fa';
import { FaCoins } from 'react-icons/fa';

const useStyles = makeStyles({
  card: {
    // maxWidth: 900,
    padding: 0,
    display: 'flex',
    'flex-wrap': 'wrap',
  },
  media: {
    width: '100%',
    height: 380,
  },
  leftSide: {
    padding: '0px',
    width: '400px',
    height: '100%',
  },

  title: {
    'margin-left': '.3em',
    // 'margin-top': '-1em',
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className="card-custom">

      <div className="leftSide">
        <CardMedia
          component="img"
          className={classes.media}
          image="src/assets/img/IMG_1155.JPG"
          title="image test"
        />
      </div>
      <CardContent centerRipple="false">
        <Typography className={classes.title} gutterBottom="true" align="left" variant="h4">
          Titre de l'évenement
        </Typography>
        <Container className="right-side">
          <CardContent className="left-content">
            <Avatar aria-label="recipe" className={classes.avatar}>
              oZ
            </Avatar>
            <Typography>16/22/2020</Typography>
            <Button variant="contained">Voir Plus</Button>
          </CardContent>
          <CardContent className="middle-content">
            <Typography>infos sur l'evenement</Typography>
            <Typography>
              <p className="right-content-text">
                <EmojiPeopleIcon /> 14/20 participants
              </p>
            </Typography>
            <Typography>
              <p className="right-content-text">
                <GoGraph /> Penibilité
              </p>
            </Typography>
            <Typography>
              <p className="right-content-text">
                <AccessTimeIcon /> Durée
              </p>
            </Typography>
          </CardContent>
          <CardContent className="right-content">
            <Typography>
              <p className="right-content-text">
                <FaPeopleCarry /> Impact societé
              </p>
            </Typography>
            <Typography>
              <p className="right-content-text">
                <GiRecycle /> Impact environnement
              </p>
            </Typography>
            <Typography>
              <p className="right-content-score">
                <FaCoins /> Score 16/20
              </p>
            </Typography>
          </CardContent>
        </Container>
      </CardContent>
    </Card>
  );
}
