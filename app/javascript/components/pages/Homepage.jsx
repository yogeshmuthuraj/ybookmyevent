import React from 'react'
import PropTypes from 'prop-types'
import Event from '../partial/Event'

class Homepage extends React.Component {
  renderEvents() {
    const events =  this.props.events.map((event, index) => {
      return <Event key={'event' + index} event={event} />
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

Homepage.propTypes = {
  greeting: PropTypes.string
};
export default Homepage
