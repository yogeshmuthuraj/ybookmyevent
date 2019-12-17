import React from 'react'
import PropTypes from 'prop-types'
import Event from '../partial/Event'

class DancePrograms extends React.Component {
  render () {
    return (
      <div className="dance-programs">
        <Event />
      </div>
    );
  }
}

DancePrograms.propTypes = {
  greeting: PropTypes.string
};
export default DancePrograms
