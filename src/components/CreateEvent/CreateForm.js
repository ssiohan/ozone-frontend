/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Rating from '@material-ui/lab/Rating';
import { InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

// == Import : icônes
import { GiRecycle } from 'react-icons/gi';
import { GoGraph } from 'react-icons/go';
import { FaPeopleCarry } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';


// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      border: 'solid 1px #E0E0E0',
    },
  },
  fields: {
    width: 500,
    minWidth: 300,
  },
  description: {
    width: 500,
    minWidth: 300,
  },
  dateAndTime: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#078171',
    color: '#F2F2F2',
    fontWeight: 'bold',
  },
}));
// Fonction qui crée la liste d'options pour le nb de participants
const optionsList = () => {
  const options = [];
  for (let i = 1; i < 1000; i++) {
    options.push(<option value={i} key={i}>{i}</option>);
  }
  // console.log(options);
  return options;
};

// == Composant
const CreateForm = () => {
  const classes = useStyles();
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        direction="row"
      >
        {/* Partie de gauche */}
        <Grid
          item
          container
          direction="column"
          justify="center"
        >
          <Grid item>
            <TextField
              id="event-title"
              label="Titre de l'événement"
              variant="outlined"
              type="text"
              name="eventTitle"
              className={classes.fields}
            />
          </Grid>
          <Grid item>
            <TextField
              select
              id="typeEvent"
              variant="outlined"
              label="Type d'événement"
              name="typeEvent"
              defaultValue="atelier"
              className={classes.fields}
              SelectProps={{
                native: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            >
              <option value="atelier">Atelier</option>
              <option value="acte citoyen">Acte citoyen</option>
              <option value="réunion d'information">Réunion d'information</option>
            </TextField>
          </Grid>
          <Grid item>
            <InputLabel>Description de l'événement</InputLabel>
            <TextareaAutosize
              id="event-description"
              label="Description de l'événement"
              aria-label="Description de l'événement"
              placeholder="Description de l'événement"
              variant="outlined"
              rowsMin={20}
              name="eventDescription"
              className={classes.description}
            />
          </Grid>

        </Grid>
        {/* Début de la partie de droite */}
        <Grid
          item
          container
          direction="column"
          justify="center"
        >
          <Grid
            container
            item
            alignContent="center"
            justify="center"
          >
            <Grid item>
              <TextField
                id="event-date"
                variant="outlined"
                label="Date de l'événement"
                type="date"
                name="eventDate"
                className={classes.dateAndTime}
                InputLabelProps={{
                  shrink: true,
                }}
                SelectProps={{
                  native: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="event-duration"
                variant="outlined"
                label="Durée de l'événement"
                type="time"
                defaultValue="00:00"
                name="eventDuration"
                className={classes.dateAndTime}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            alignContent="center"
            justify="center"
          >
            <Grid item>
              <TextField
                select
                id="min-participants"
                variant="outlined"
                label="Nombre minimum de participants"
                name="min-participants"
                defaultValue={1}
                className={classes.dateAndTime}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {optionsList()}
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                select
                id="max-participants"
                variant="outlined"
                label="Nombre maximum de participants"
                name="max-participants"
                defaultValue={999}
                className={classes.dateAndTime}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {optionsList()}
              </TextField>
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              type="file"
              id="event-picture"
              variant="outlined"
              label="Ajouter une photo de l'événement"
              name="event-picture"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <Typography>
              <GoGraph /> Penibilité
              <Rating name="painfulness" size="small" />
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <MdAccessTime /> Durée
              <Rating name="duration" size="small" />
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <FaPeopleCarry /> Impact société
              <Rating name="impactSocietal" size="small" />
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <GiRecycle /> Impact environnement
              <Rating name="impactEnvironnemental" size="small" />
            </Typography>
          </Grid>
        </Grid>
      </Grid>

    </form>
  );
};

// == Export
export default CreateForm;
