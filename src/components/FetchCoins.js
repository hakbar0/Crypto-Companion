import React, { Component } from 'react';
import cc from 'cryptocompare';

class FetchCoins extends Component {
  state = {
    coinsList: ''
  }
  componentDidMount() {
    this.fetchAllCoins();
  }

  fetchAllCoins = () => (
    cc.coinList().then(coinList => {
      this.setState({ coinsList: Object.keys(coinList.Data).sort() })
    })
  )

  fetchTest = (input) => {
    console.log(input)
  }

  render() {
    return (
      this.state.coinsList ?
        <div className="card" style={{ width: '100%', textAlign: 'center', border: '10px' }}>
          <ul className="list-group list-group-flush" style={{ border: '10px' }}>
            {this.state.coinsList.map(function (coin) {
              return (
                <li className="list-group-item" onClick={this.fetchTest.bind(this, coin)} >{coin}</li>
              )
            }, this)}</ul></div> : 'Loading..'
    )
  }
}

export default FetchCoins;