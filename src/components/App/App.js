import React, { Component } from 'react';
import Header from '../Header/Header';
import Map from '../Map/Map';
import Footer from '../Footer/Footer';
import markerData from '../../utils/markerData.json'

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

  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
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