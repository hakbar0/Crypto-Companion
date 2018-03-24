import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Main from './Main';
import Header from './Header';
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <div className = "Homepage">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
