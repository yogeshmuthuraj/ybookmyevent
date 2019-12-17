import React from 'react'
import PropTypes from 'prop-types'

class Event extends React.Component {
  render () {
    const bookEventBtn = <button type="button" className="btn btn-primary btn-block">BT</button>
    const eventName = "Testing"

    return (
      <div className="event back-color-white">
        <div className="event-image">
          <img src="https://dummyimage.com/200x200/000/fff" />
        </div>
        <div className="event-footer">
          <div className="event-details">
            {eventName}
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
