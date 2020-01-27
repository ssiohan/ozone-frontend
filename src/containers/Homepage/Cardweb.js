// Ici le container du composant homepage à compléter
import { connect } from 'react-redux';

import Cardweb from 'src/components/Homepage/Cardweb';


// == Import d'action creators
// à compléter

// == Préparation: data
const mapStateToProps = (state) => {
  return {
    events: state.homepage.events,
  };
};

// == Préparation - actions
const mapDispatchToProps = {};

// == Container
const CardwebContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cardweb);

// == Export
export default CardwebContainer;
