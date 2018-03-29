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

  render() {
    return (
      this.state.coinsList ?
        this.state.coinsList.map(function (coin) {
          return (
            <h5 className='coin'>{coin}</h5>
          )
        }) : 'Loading..'
    )
  }
}

export default FetchCoins;