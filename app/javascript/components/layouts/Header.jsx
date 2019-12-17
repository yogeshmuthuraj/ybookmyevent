import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {

  addEvent() {

  }

  render () {
    const currentTab = this.props.currentTab;

    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">WebSiteName</a>
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
            <button className="btn btn-primary add-even-btn">Add Event</button>
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
