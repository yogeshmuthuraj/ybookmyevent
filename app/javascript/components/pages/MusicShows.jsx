import React from 'react'
import PropTypes from 'prop-types'
import Event from '../partial/Event'

class MusicShows extends React.Component {
  renderEvents() {
    let events;

    events = this.props.events.map((event, index) => {
      console.log('event', event.event_type);
      if (event.event_type == 'musicshows') {
        return <Event key={'event' + index} event={event} />
      }
    });

    return events;
  }

  render() {
    return (
      <div className="">
        {this.renderEvents()}
      </div>
    );
  }
}

MusicShows.propTypes = {
  greeting: PropTypes.string
};
export default MusicShows
