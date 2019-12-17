import React from 'react'
import PropTypes from 'prop-types'
import Event from '../partial/Event'

class StandupComedy extends React.Component {
  renderEvents() {
    let events;

    events = this.props.events.map((event, index) => {
      if (event.event_type == 'standupcomedy') {
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

StandupComedy.propTypes = {
  greeting: PropTypes.string
};
export default StandupComedy
