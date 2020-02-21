import { connect } from 'react-redux';

import { getEventBySlug } from 'src/utils/selectors';

import Event from 'src/components/Event';

import { getEventId, goSetUserEvent, goresetStatus } from 'src/store/reducer/event';

// retourne les props à fournir à Cardweb en fonction du state
// ownProps => props qui sont fournies à EventContainer
const mapStateToProps = (state, ownProps) => {
  const event = getEventBySlug(ownProps.match.params.slug, state.homepage.events);

   console.log(state);
  // si pas d'event trouvé (mauvaise URL), event vaut undefined

  return ({
    eventData: event,
    loading: state.loading,
    found: event !== undefined,
    userSubscribed: state.event.userSubscribed,
    alreadySubscribe: state.event.alreadySubscribe,
  });
};

const mapDispatchToProps = (dispatch) => ({
  onGetEventId: (id) => {
    // console.log('hello depuis mDTP', id);
    dispatch(getEventId(id));
  },
  onSetUserEvent: () => {
    // console.log('Hello depuis mDtP, je vais inscrire un user à un event');
    dispatch(goSetUserEvent());
  },
  resetStatus: () => {
    // console.log('Hello depuis mDtP, je vais inscrire un user à un event');
    dispatch(goresetStatus());
  },
});

const EventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Event);

export default EventContainer;
