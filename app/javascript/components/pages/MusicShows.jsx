import React from 'react'
import PropTypes from 'prop-types'
import Event from '../partial/Event'

class MusicShows extends React.Component {
  render() {
    return (
      <div className="musicshows">
        <Event />
      </div>
    );
  }
}

MusicShows.propTypes = {
  greeting: PropTypes.string
};
export default MusicShows
