import { connect } from 'react-redux';

import { getEventBySlug } from 'src/utils/selectors';

import Event from 'src/components/Event';

import { getEventId, goSetUserEvent, goresetStatus, userIsConnected } from 'src/store/reducer/event';

// retourne les props à fournir à Cardweb en fonction du state
// ownProps => props qui sont fournies à EventContainer
const mapStateToProps = (state, ownProps) => {
  const event = getEventBySlug(ownProps.match.params.slug, state.homepage.events);

  // console.log(state);
  // si pas d'event trouvé (mauvaise URL), event vaut undefined

  return ({
    eventData: event,
    loading: state.loading,
    found: event !== undefined,
    userSubscribed: state.event.userSubscribed,
    alreadySubscribe: state.event.alreadySubscribe,
    userNotConnected: state.event.userNotConnected,
  });
};

const mapDispatchToProps = (dispatch) => ({
  onGetEventId: (id) => {
    // console.log('hello depuis mDTP', id);
    dispatch(getEventId(id));
  },
  onSetUserEvent: () => {

    dispatch(goSetUserEvent());
  },
  resetStatus: () => {

    dispatch(goresetStatus());
  },
  userIsConnected: () => {

    dispatch(userIsConnected());
  },
});

const EventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Event);

export default EventContainer;
