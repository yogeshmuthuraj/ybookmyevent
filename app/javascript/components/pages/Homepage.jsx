import React from 'react'
import PropTypes from 'prop-types'
import Event from '../partial/Event'

class Homepage extends React.Component {
  render () {
    return (
      <div className="">
        <Event />
      </div>
    );
  }
}

Homepage.propTypes = {
  greeting: PropTypes.string
};
export default Homepage
