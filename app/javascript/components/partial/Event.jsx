import React from 'react'
import PropTypes from 'prop-types'

class Event extends React.Component {
  openBookTicketsModal() {
    event.preventDefault();

    $('#bookTicketModal').modal();
    $(event.target).blur();
  }

  render() {
    const event = this.props.event;
    const BookTicketModal = (
      <div className="modal fade" id="bookTicketModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Book tickets</h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
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
                    <div>ticket_price: Rs.{event.ticket_price}/-</div>
                    <div>Number of persons:</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" onClick={(event) => {this.addEvent($(event.target))}}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    );

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
            <div>Rs.{event.ticket_price}/-</div>
          </div>
          <div className="event-status">
            {BookTicketModal}
            <button type="button" className="btn btn-primary btn-block" data-target="#bookTicketModal" data-toggle="modal"
            onClick={(event) => this.openBookTicketsModal(event)}>Book Tickets</button>
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
