// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
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
    flexGrow: 1,
    'max-width': '980px',
  },
  form: {
    margin: 'auto',
  },

  button: {

    'background-color': '#526DDB',
    color: '#fff',
    'white-space': 'nowrap',
    margin: '4em 0',
    '&:hover': {
      backgroundColor: '#626DDB',
      color: '#fff',
    },
  },
  title: {
    background: '#fff',
    padding: '1em',
    margin: '.3em',
  },
  titletxt: {
    margin: '1em',

  },
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

// == Composant
const CreateForm = ({
  onCreateEventFieldChange,
  getCreateEvent,
  onCheckForEmptyFields,
  emptyFieldsCounter,

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
    onCheckForEmptyFields();
  };

  return (
    <form className={classes.form} onSubmit={handleCreateEventFormSubmit}>
      <Grid className={classes.root} container justify="center">
        <Typography className={classes.titletxt} variant="h4">Créer un événement</Typography>

        {/* title Form */}

        <Grid className={classes.title} container direction="row">
          <Grid align="left" item xs={12} sm={5}>
            <Typography variant="h6" className={classes.titletxt}>Titre</Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
            <FormControl fullWidth className={classes.event}>
              <TextField
                required
                id="event-title"
                label="Titre de l'événement"
                type="text"
                name="title"
                className={classes.fields}
                onChange={handleCreateEventInputChange}
                placeholder="ex: Apprendre la permaculture"
              />
            </FormControl>
          </Grid>
        </Grid>

        {/* description Form */}

        <Grid className={classes.title} container direction="row" justify="space-between">
          <Grid align="left" item xs={12} sm={5}>
            <Typography className={classes.titletxt} variant="h6">Description</Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
            <FormControl fullWidth className={classes.event}>
              <TextField
                className={classes.description}
                multiline
                required
                id="event-description"
                label="Description de l'événement"
                aria-label="Description de l'événement"
                placeholder="ex: Venez découvrir comment cultiver en permaculture et produire plus avec moins d'efforts..."
                rows={4}
                name="description"
                onChange={handleCreateEventInputChange}
              />
            </FormControl>
          </Grid>
        </Grid>

        {/* city Form */}

        <Grid className={classes.title} container direction="row" justify="space-between">
          <Grid align="left" item xs={12} sm={5}>
            <Typography className={classes.titletxt} variant="h6">Ville</Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
            <FormControl fullWidth>
              <TextField
                className={classes.city}
                id="city"
                label="Ville ou se déroulera l'événement"
                type="text"
                name="city"
                onChange={handleCreateEventInputChange}
                required
              />
            </FormControl>
          </Grid>
        </Grid>


        {/* dateEvent Form */}

        <Grid className={classes.title} container direction="row" justify="space-between">
          <Grid align="left" item xs={12} sm={5}>
            <Typography className={classes.titletxt} variant="h6">Date</Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
            <FormControl fullWidth>
              <TextField
                required
                id="datetime-local"
                label="Préciser heure (obligatoire)"
                type="datetime-local"
                // defaultValue={Date.now()}
                name="dateEvent"
                className={classes.dateAndTime}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleCreateEventInputChange}
              />
            </FormControl>
          </Grid>
        </Grid>

        {/* typeEvent Form */}

        <Grid className={classes.title} container direction="row">
          <Grid align="left" item xs={12} sm={5}>
            <Typography className={classes.titletxt} variant="h6">Type</Typography>
          </Grid>
          <Grid align="left" item xs={12} sm={7}>
            <TypeEvent onCreateEventFieldChange={onCreateEventFieldChange} />
          </Grid>
        </Grid>

        {/* Users Form */}

        <Grid className={classes.title} container direction="row" justify="space-between">
          <Grid align="left" item xs={12} sm={3} md={3}>
            <Typography className={classes.titletxt} variant="h6">Participants</Typography>
          </Grid>

          {/* minUser Form */}

          <Grid item xs={12} sm={3} md={3}>
            <FormControl fullWidth required>
              <TextField
                select
                id="min-participants"
                label="Participants min"
                name="userMin"
                className={classes.users}
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue="5"
                onChange={handleCreateEventInputChange}
              >
                <MenuItem value={5} key={5}>5</MenuItem>
                <MenuItem value={10} key={10}>10</MenuItem>
                <MenuItem value={20} key={20}>20</MenuItem>
                <MenuItem value={30} key={30}>30</MenuItem>
                <MenuItem value={40} key={40}>40</MenuItem>
                <MenuItem value={50} key={50}>50</MenuItem>
                <MenuItem value={75} key={75}>75</MenuItem>
                <MenuItem value={100} key={100}>100</MenuItem>
                <MenuItem value={125} key={125}>125</MenuItem>
                <MenuItem value={150} key={150}>150</MenuItem>
              </TextField>
            </FormControl>
          </Grid>

          {/* maxUser Form */}

          <Grid item xs={12} sm={3} md={3}>
            <FormControl fullWidth>
              <TextField
                required
                select
                id="max-participants"
                label="Participants max"
                name="userMax"
                className={classes.users}
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue="5"
                onChange={handleCreateEventInputChange}
              >
                <MenuItem value={5} key={5}>5</MenuItem>
                <MenuItem value={10} key={10}>10</MenuItem>
                <MenuItem value={20} key={20}>20</MenuItem>
                <MenuItem value={30} key={30}>30</MenuItem>
                <MenuItem value={40} key={40}>40</MenuItem>
                <MenuItem value={50} key={50}>50</MenuItem>
                <MenuItem value={75} key={75}>75</MenuItem>
                <MenuItem value={100} key={100}>100</MenuItem>
                <MenuItem value={125} key={125}>125</MenuItem>
                <MenuItem value={150} key={150}>150</MenuItem>
                <MenuItem value={200} key={200}>200</MenuItem>
                <MenuItem value={300} key={300}>300</MenuItem>
              </TextField>
            </FormControl>
          </Grid>
        </Grid>

        {/* Lat/long Form */}

        <Grid className={classes.title} container direction="row" justify="space-between">
          <Grid item xs={12} sm={3} md={3}>
            <Typography align="left" className={classes.titletxt} variant="h6">Provisoire</Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <FormControl fullWidth>
              <TextField
                id="latitude"
                label="Latitude"
                type="text"
                name="latitude"
                onChange={handleCreateEventInputChange}
                required
                placeholder="'string'"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <FormControl fullWidth>
              <TextField
                id="longitude"
                label="Longitude"
                type="text"
                name="longitude"
                onChange={handleCreateEventInputChange}
                required
                placeholder="'string'"
              />
            </FormControl>
          </Grid>
        </Grid>

        {/* critair Form */}

        <Grid container className={classes.title} justify="space-between">
          <Typography align="left" className={classes.titletxt} variant="h6">Critères</Typography>
          <Grid container direction="row" justify="space-between">
            <Duration onCreateEventFieldChange={onCreateEventFieldChange} />
            <ImpactEnv onCreateEventFieldChange={onCreateEventFieldChange} />
            <ImpactSociety onCreateEventFieldChange={onCreateEventFieldChange} />
            <Difficulty onCreateEventFieldChange={onCreateEventFieldChange} />
            <Author onCreateEventFieldChange={onCreateEventFieldChange} />
          </Grid>
        </Grid>

        {/* image Form */}

        <Grid className={classes.title} container direction="row" justify="space-between">
          <Grid align="left" item xs={12} sm={3}>
            <Typography className={classes.titletxt} variant="h6">Photo</Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
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
            />
          </Grid>
        </Grid>

        {/* Message d'erreur en cas de champs non remplis à la soumission */}
        {emptyFieldsCounter > 0 && (
          <Grid className={classes.alert}>
            <Alert severity="error">
              <AlertTitle>ATTENTION!</AlertTitle>
              Tous les champs doivent être remplis pour enregistrer votre événement!
            </Alert>
          </Grid>
        )}

        {/* Form Submit Button */}

        <Grid align="right" item xs={12}>
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


      </Grid>
    </form>
  );
};
// == Props par défault
CreateForm.defaultProps = {
  onCreateEventFieldChange: null,
  getCreateEvent: null,
  emptyFieldsCounter: 0,
};

// == Validation des props
CreateForm.propTypes = {
  onCreateEventFieldChange: PropTypes.func,
  getCreateEvent: PropTypes.func,
  onCheckForEmptyFields: PropTypes.func.isRequired,
  emptyFieldsCounter: PropTypes.number,
};
// == Export
export default CreateForm;
