/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
// == Import Form children

import Duration from './FormChildren/Duration';
import ImpactEnv from './FormChildren/ImpactEnv';
import ImpactSociety from './FormChildren/ImpactSociety';
import Difficulty from './FormChildren/Difficulty';
import Author from './FormChildren/Author';
import TypeEvent from './FormChildren/TypeEvent';

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {

    margin: theme.spacing(1),
  },
  event: {
    margin: theme.spacing(1),
    minWidth: 220,
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
  title: {
    background: '#fff',
  },
}));
// Fonction qui crée la liste d'options pour le nb de participants
const optionsList = () => {
  const options = [];
  for (let i = 1; i < 500; i++) {
    options.push(<MenuItem value={i} key={i}>{i}</MenuItem>);
  }
  // console.log(options);
  return options;
};

// == Composant
const CreateForm = ({
  onCreateEventFieldChange,
  getCreateEvent,

}) => {
  const classes = useStyles();

  // Fonction qui gère la saisie dans les champs du formulaire

  const handleCreateEventInputChange = (evt) => {
    const fieldValue = evt.target.value;
    const fieldName = evt.target.name;
    // console.log(fieldValue, fieldName);
    onCreateEventFieldChange(fieldName, fieldValue);
  };
  // Fonction qui gère la soumission du formulaire

  const handleCreateEventFormSubmit = (evt) => {
    evt.preventDefault();
    getCreateEvent();
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="on"
      onSubmit={handleCreateEventFormSubmit}
    >
      <Grid
        container
        direction="row"
        justify="space-around"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            justify="center"
          >
            <Grid className={classes.title} container direction="row" justify="space-between">
              <Typography>Titre</Typography>
              <FormControl variant="outlined" className={classes.event}>
                <TextField
                  required
                  id="event-title"
                  label="Titre de l'événement"
                  type="text"
                  name="title"
                  className={classes.fields}
                  onChange={handleCreateEventInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl variant="outlined" className={classes.event}>
                <TypeEvent onCreateEventFieldChange={onCreateEventFieldChange} />
              </FormControl>
            </Grid>
            <Grid item>
              <Typography align="left" variant="h4">
              Description de l'événement
              </Typography>
              <TextareaAutosize
                required
                id="event-description"
                label="Taper votre texte ici"
                aria-label="Description de l'événement"
                placeholder="Décrivez votre événement en quelques lignes"
                variant="outlined"
                rowsMin={12}
                name="description"
                className={classes.description}
                onChange={handleCreateEventInputChange}
              />
            </Grid>
          </Grid>
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
                <FormControl>
                  <TextField
                    required
                    id="datetime-local"
                    label="Date et heure"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    name="dateEvent"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleCreateEventInputChange}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid
              container
              item
              alignContent="center"
              justify="center"
            >
              <Grid item>
                <FormControl required>
                  <TextField
                    select
                    id="min-participants"
                    label="Nombre minimum de participants"
                    name="userMin"
                    defaultValue={1}
                    className={classes.dateAndTime}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleCreateEventInputChange}
                  >
                    {optionsList()}
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl>
                  <TextField
                    required
                    select
                    id="max-participants"
                    variant="outlined"
                    label="Nombre maximum de participants"
                    name="userMax"
                    defaultValue={50}
                    className={classes.dateAndTime}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleCreateEventInputChange}
                  >
                    {optionsList()}
                  </TextField>
                </FormControl>
              </Grid>
            </Grid>
            <Typography variant="h4">
              Ville ou se déroulera l'événement
            </Typography>
            <Grid container>
              <Grid item>
                <FormControl>
                  <TextField
                    id="city"
                    label="Ville"
                    type="text"
                    name="city"
                    onChange={handleCreateEventInputChange}
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <TextField
                  id="latitude"
                  label="Latitude"
                  type="text"
                  name="latitude"
                  onChange={handleCreateEventInputChange}
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  id="longitude"
                  label="Longitude"
                  type="text"
                  name="longitude"
                  onChange={handleCreateEventInputChange}
                  required
                />
              </Grid>
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
              onChange={handleCreateEventInputChange}
              required
            />
          </Grid>
          <Typography variant="h4">
            Choisir les critères
          </Typography>
          <Grid container direction="row">
            <Duration onCreateEventFieldChange={onCreateEventFieldChange} />
            <ImpactEnv onCreateEventFieldChange={onCreateEventFieldChange} />
            <ImpactSociety onCreateEventFieldChange={onCreateEventFieldChange} />
            <Difficulty onCreateEventFieldChange={onCreateEventFieldChange} />
            <Author onCreateEventFieldChange={onCreateEventFieldChange} />
          </Grid>
        </Grid>
      </Grid>
      {/* En-dessous, le bouton */}
      <Grid item xs={12}>
        <Button
          variant="contained"
          type="submit"
          color="default"
          size="large"
          className={classes.button}
        >
        Créer Evénément
        </Button>
      </Grid>

    </form>
  );
};
// == Props par défault
CreateForm.defaultProps = {
  onCreateEventFieldChange: null,
  getCreateEvent: null,
};

// == Validation des props
CreateForm.propTypes = {
  onCreateEventFieldChange: PropTypes.func,
  getCreateEvent: PropTypes.func,
};
// == Export
export default CreateForm;
