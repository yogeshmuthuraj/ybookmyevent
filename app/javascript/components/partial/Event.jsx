import React from 'react'
import PropTypes from 'prop-types'

class Event extends React.Component {
  render() {
    const bookEventBtn = <button type="button" className="btn btn-primary btn-block">Book Tickets</button>

    return (
      <div className="event back-color-white">
        <div className="event-image">
          <img src={event.image_url} />
        </div>
        <div className="event-footer">
          <div className="event-details">
            <div>{event.name}</div>
            <div>{event.description}</div>
            <div>{event.event_type}</div>
            <div>{event.date}</div>
            <div>{event.time}</div>
            <div>Rs.{event.ticket_price}</div>
          </div>
          <div className="event-status">
            {bookEventBtn}
          </div>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  greeting: PropTypes.string
};
export default Event
