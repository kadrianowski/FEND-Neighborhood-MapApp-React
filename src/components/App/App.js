import React, { Component } from 'react';
import Header from '../Header/Header';
import Map from '../Map/Map';
import Footer from '../Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
          <Map
            mapElement={<div style={{ height: `100%` }}></div>}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;