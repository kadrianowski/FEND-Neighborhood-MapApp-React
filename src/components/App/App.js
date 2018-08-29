import React, { Component } from 'react';
import Header from '../Header/Header';
import Map from '../Map/Map';
import Footer from '../Footer/Footer';
import markerData from '../../utils/markerData.json'
import Sidebar from '../Sidebar/Sidebar';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

import './App.css';

class App extends Component {
  state = {
    places: [],
    showingPlaces: [],
    query: '',
    center: { lat: 40.7537916, lng: -73.983607 },
    showInfoId: false,
    loaded: false,
    action: ''
  }

  componentDidMount() {
    this.setState({
      places: markerData,
      showingPlaces: markerData,
      loaded: true
    });
  }

  onToggleOpen = (id, action) => {
    this.setState({
      showInfoId: id,
      action
    });
  }

  filterPlaces = (query) => {
    const { places } = this.state;
    let showingPlaces;

    this.setState({
      query: query.trim()
    });

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingPlaces = places.filter(place => match.test(place.name));
    } else {
      showingPlaces = places;
    }

    showingPlaces.sort(sortBy('name'));
    this.setState({ showingPlaces });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
          {
            this.state.loaded &&
            <Sidebar
              data={this.state}
              onToggleOpen={this.onToggleOpen}
              filterPlaces={this.filterPlaces}
            />
          }
          <Map
            onToggleOpen={this.onToggleOpen}
            showInfoId={this.state.showInfoId}
            action={this.state.action}
            places={this.state.places}
            showingPlaces={this.state.showingPlaces}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;