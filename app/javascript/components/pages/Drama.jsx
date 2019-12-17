import React from 'react'
import PropTypes from 'prop-types'
import Event from '../partial/Event'

class Drama extends React.Component {
  render() {
    return (
      <div className="drama">
        <Event />
      </div>
    );
  }
}

Drama.propTypes = {
  greeting: PropTypes.string
};
export default Drama
