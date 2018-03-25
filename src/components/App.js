import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import cc from 'cryptocompare';
import '../styles/Homepage.css';



class App extends Component {

  state = {
    coins: ''
  }

  componentDidMount() {
    this.fetchCoins();
  }

  fetchCoins = () => (
    cc.coinList().then(coinList => {
      this.setState({ coins: Object.keys(coinList.Data) })
    })
  )

  render() {
    return (
      <div id="wrap">
        <div className="nested-items">
          <div className="title">
            <h3>CC</h3>
          </div>
          <div className="side-nav">
        
          
          </div>
        </div>
        <div className="main"></div>
        <div className="footer"></div>
      </div>
    )
  }
}

export default App;
