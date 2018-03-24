import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
