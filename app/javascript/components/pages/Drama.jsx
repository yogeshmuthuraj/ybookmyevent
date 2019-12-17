import React from 'react'
import PropTypes from 'prop-types'
import Event from '../partial/Event'

class Drama extends React.Component {
  renderEvents() {
    let events;

    events = this.props.events.map((event, index) => {
      if (event.event_type == 'drama') {
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

Drama.propTypes = {
  greeting: PropTypes.string
};
export default Drama
