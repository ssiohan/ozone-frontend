/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { FaCoins } from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';


// == Import : local
import './sponsors.scss';

// == Import de sous-composants
import BannerFree from 'src/components/Banner/BannerFree';
import tileData from './tileData';
import natureEtD from './natureEtD';


// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  container: {
    background: 'linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0, 0, 0, 0.7)), url("src/assets/img/grass.jpg")',
    'background-size': 'cover',
    height: '100%',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: '#F2F2F2',
  },
  points: {
    color: '#F2F2F2',
    marginRight: theme.spacing(1),
    fontSize: 'medium',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


// == Composant
const Sponsors = () => {
  const classes = useStyles();
  return (
    <div id="sponsors" className={classes.container}>
      <BannerFree />
      <Typography variant="h4" gutterBottom className={classes.title}>
         Lots mis à disposition par nos partenaires
      </Typography>
      {/* Sponsor 1 */}
      <div id="robinsons" className={classes.root}>
        <Typography variant="h5" gutterBottom>
         Les Nouveaux Robinsons
        </Typography>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={(
                  <IconButton aria-label={`star ${tile.title}`}>
                    <span className={classes.points}>{tile.points}</span>
                    <FaCoins fontSize="large" className={classes.title} />
                  </IconButton>
              )}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      {/* Sponsor 2 */}
      <div id="natureEtD" className={classes.root}>
        <Typography variant="h5" gutterBottom>
         Nature et Découvertes
        </Typography>
        <GridList className={classes.gridList} cols={2.5}>
          {natureEtD.map((tile) => (
            <GridListTile key={tile.title}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={(
                  <IconButton aria-label={`star ${tile.title}`}>
                    <span className={classes.points}>{tile.points}</span>
                    <FaCoins fontSize="large" className={classes.title} />
                  </IconButton>
              )}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

// == Export
export default Sponsors;
