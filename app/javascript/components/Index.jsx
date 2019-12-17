import React from 'react'
import PropTypes from 'prop-types'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Homepage from './pages/Homepage'
import DancePrograms from './pages/DancePrograms'
import Drama from './pages/Drama'
import MusicShows from './pages/MusicShows'
import StandupComedy from './pages/StandupComedy'


class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'home',
      events: this.props.events,
    }

    Object.getOwnPropertyNames(Index.prototype).forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  changeTab(tabname) {
    this.setState({
      currentTab: tabname
    });
  }

  render() {
    let tab = '';

    switch(this.state.currentTab) {
      case 'home':
        tab = <Homepage events={this.state.events} />
        break;
      case 'danceprograms':
        tab = <DancePrograms />
        break;
      case 'drama':
        tab = <Drama />
        break;
      case 'musicshows':
        tab = <MusicShows />
        break;
      case 'standupcomedy':
        tab = <StandupComedy />
        break;
      default:
        // code block
    }

    return (
      <div className="pad-all-50" >
        <Header
          currentTab={this.state.currentTab}
          changeTab={this.changeTab}
        />
        {tab}
        <Footer />
      </div>
    );
  }
}

Index.propTypes = {
  greeting: PropTypes.string
};
export default Index
