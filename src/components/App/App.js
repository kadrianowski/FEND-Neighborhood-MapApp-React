import React, { Component } from 'react';
import Header from '../components/Header';
import Map from '../components/Map';
import Footer from '../components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
          <Map />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;