import React from 'react'
import PropTypes from 'prop-types'
import Event from '../partial/Event'

class StandupComedy extends React.Component {
  render () {
    return (
      <div className="standupcomedy">
        <Event />
      </div>
    );
  }
}

StandupComedy.propTypes = {
  greeting: PropTypes.string
};
export default StandupComedy
