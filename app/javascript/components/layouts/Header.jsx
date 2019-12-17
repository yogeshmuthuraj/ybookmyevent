import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {

  openAddEventModal() {
    event.preventDefault();

    $('#addEventModal').modal();
    $(event.target).blur();
  }

  addEvent($form) {
    const name = $('#name').val();

    const data = {
      name: $('#name').val(),
      description: $('#description').val(),
      image_url: $('#image_url').val(),
      date: $('#date').val(),
      time: $('#time').val(),
      event_type: $('#event_type').val(),
      ticket_price: $('#ticket_price').val(),
      total_tickets: $('#total_tickets').val(),
    }

    $.ajax({
      type: 'POST',
      url: '/events',
      data: data,
      success: (result) => {
        location.reload();
      }
    });
  }

  render() {
    const currentTab = this.props.currentTab;
    const AddEventModal = (
      <div className="modal fade" id="addEventModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Add Event</h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="name">name:</label>
                <input type="text" className="form-control" id="name" />
                <label htmlFor="description">description:</label>
                <input type="text" className="form-control" id="description" />
                <label htmlFor="image_url">image_url:</label>
                <input type="text" className="form-control" id="image_url" placeholder="https://picsum.photos/200/200" defaultValue="https://picsum.photos/200/200" />
                <label htmlFor="date">date:</label>
                <input type="text" className="form-control" id="date" />
                <label htmlFor="time">time:</label>
                <input type="text" className="form-control" id="time" />
                <label htmlFor="event_type">event_type:</label>
                <input type="text" className="form-control" id="event_type" placeholder="musicshows/drama/standupcomedy/danceprograms" />
                <label htmlFor="ticket_price">ticket_price:</label>
                <input type="text" className="form-control" id="ticket_price"
                    placeholder="120" />
                <label htmlFor="total_tickets">total_tickets:</label>
                <input type="text" className="form-control" id="total_tickets" placeholder="200" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" onClick={(event) => {this.addEvent($(event.target))}}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );


    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" onClick={() => this.props.changeTab('home')}>WebSiteName</a>
          </div>
          <ul className="nav navbar-nav">
            <li className={currentTab == 'musicshows' ? 'active' : ''}>
              <a onClick={() => this.props.changeTab('musicshows')}>MS</a>
            </li>
            <li className={currentTab == 'drama' ? 'active' : ''}>
              <a onClick={() => this.props.changeTab('drama')}>DR</a>
            </li>
            <li className={currentTab == 'standupcomedy' ? 'active' : ''}>
              <a onClick={() => this.props.changeTab('standupcomedy')}>SU</a>
            </li>
            <li className={currentTab == 'danceprograms' ? 'active' : ''}>
              <a onClick={() => this.props.changeTab('danceprograms')}>DP</a>
            </li>
          </ul>
          <div className="pull-right">
            {AddEventModal}
            <button
              className="btn btn-primary add-even-btn" data-target="#addEventModal" data-toggle="modal"
              onClick={(event) => this.openAddEventModal(event)}
            >
              Add Event
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  greeting: PropTypes.string
};
export default Header
