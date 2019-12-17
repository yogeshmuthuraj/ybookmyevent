import React from 'react'
import PropTypes from 'prop-types'
import Event from '../partial/Event'

class DancePrograms extends React.Component {
  renderEvents() {
    let events;

    events = this.props.events.map((event, index) => {
      if (event.event_type == 'danceprograms') {
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

DancePrograms.propTypes = {
  greeting: PropTypes.string
};
export default DancePrograms
