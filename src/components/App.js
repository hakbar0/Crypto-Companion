import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FetchCoins from './FetchCoins';
import '../styles/Homepage.css';



class App extends Component {

  state = {
    coins: ''
  }

  render() {
    return (
      <div>
        {this.state.coins ?
          this.state.coins.map(function (coin) { <div> {coin} </div> }) : ''

        }
        <div id="wrap">
          <div className="nested-items">
            <div className="title">
              <h3>CC</h3>
            </div>
            <div className="side-nav">
            <FetchCoins />
            </div>
          </div>
          <div className="main"></div>
          <div className="footer"></div>
        </div>
      </div>
    )
  }
}

export default App;
