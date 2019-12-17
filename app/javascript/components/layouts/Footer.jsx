import React from 'react'
import PropTypes from 'prop-types'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        {'COPYRIGHT 2019'}
      </div>
    );
  }
}

Footer.propTypes = {
  greeting: PropTypes.string
};
export default Footer
