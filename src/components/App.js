import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <Homepage />
    );
  }
}

export default App;
