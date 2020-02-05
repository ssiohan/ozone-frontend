import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },

  back: {
    marginBottom: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 2),
    // background: '-webkit-gradient(linear, right top, left bottom, from(rgba(146,100,231,1)),to(rgba(54,204,212,1)))',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '90%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  content: {
    background: 'linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0, 0, 0, 0.7)), url("src/assets/img/grass.jpg")',
    'background-size': 'cover',
  },
  whitetext: {
    color: '#FFF',
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <>
      {/* <CssBaseline /> */}

      <main className={classes.content}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography className={classes.whitetext} component="h1" variant="h2" align="center" gutterBottom>
              Team oZone
            </Typography>
            <Typography className={classes.whitetext} variant="h6" align="center" paragraph>
              La team oZone est composé de 4 membres:
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Typography className={classes.whitetext} component="h2" variant="h3" align="center" color="textSecondary" gutterBottom>
              Les développeurs Back-End
          </Typography>
          <Grid className={classes.back} container justify="center" spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="src/assets/img/steeve.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Steeve S.
                  </Typography>
                  <Typography>
                    Dev Back
                  </Typography>
                  <Typography>
                    Product owner
                  </Typography>
                  <Typography>
                    Admin Sys
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href="https://www.linkedin.com/in/steeve-siohan-4183a538/" size="small">
                    <LinkedInIcon />
                  </Button>
                  <Button href="https://github.com/ssiohan" size="small">
                    <GitHubIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="src/assets/img/bertrand.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Bertrand
                  </Typography>
                  <Typography>
                    Dev Back
                  </Typography>
                  <Typography>
                    Lead Back
                  </Typography>
                  <Typography>
                    Git Master
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <LinkedInIcon />
                  </Button>
                  <Button href="https://github.com/kyliran" size="small">
                    <GitHubIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Typography className={classes.whitetext} component="h1" variant="h3" align="center" color="textSecondary" gutterBottom>
              Les developpeurs Front-End
          </Typography>
          <Grid className={classes.front} container justify="center" spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="src/assets/img/grace.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Grace.B
                  </Typography>
                  <Typography>
                    Dev Front
                  </Typography>
                  <Typography>
                    SCRUM Master
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <LinkedInIcon />
                  </Button>
                  <Button href="https://github.com/Grace-Bilali" size="small">
                    <GitHubIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="src/assets/img/baptiste.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Baptiste Caral-Villa
                  </Typography>
                  <Typography>
                    Dev Front
                  </Typography>
                  <Typography>
                    Lead Front
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <LinkedInIcon />
                  </Button>
                  <Button href="https://github.com/baptiste-caral" size="small">
                    <GitHubIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
