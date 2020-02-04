import { connect } from 'react-redux';

import { getEventBySlug } from 'src/utils/selectors';

import Event from 'src/components/Event';

// retourne les props à fournir à Cardweb en fonction du state
// ownProps => props qui sont fournies à EventContainer
const mapStateToProps = (state, ownProps) => {
  const event = getEventBySlug(ownProps.match.params.slug, state.homepage.events);

   console.log(event);
  // si pas d'event' trouvé (mauvaise URL), event vaut undefined

  return ({
    eventData: event,
    loading: state.loading,
    found: event !== undefined,
  });
};

const mapDispatchToProps = {};

const EventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Event);

export default EventContainer;
