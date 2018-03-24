import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
      <header><a href="">Crypto Companion</a></header>
      <main>
      <article>Main Content</article>
      <nav>Side NAv</nav>
      </main>
      <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
