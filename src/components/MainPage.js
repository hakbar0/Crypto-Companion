import React, { Component } from 'react';
import Reddit from '../images/reddit.png';
import Twitter from '../images/twitter.png';
import Google from '../images/google.png';
import PriceGraph from '../images/pricegraph.jpg';
import cc from 'cryptocompare';
import '../styles/Main.css';

class MainPage extends Component {

  state = {
    EUR: 'Loading',
    USD: 'Loading'
  }

  marketcap = () => (
    cc.price('BTC', ['USD', 'EUR']).then(prices => {
        this.setState({ EUR: prices.EUR, USD: prices.USD })
      })
  )

  componentDidMount() {
    this.marketcap();
  }

  render() {
    return (

      <main>

        <div className='images'>
          <img src={Google} className='Google' alt='Google' />
          <img src={Twitter} className='Twitter' alt='Twitter' />
          <img src={Reddit} className='Reddit' alt='binanace' />
        </div>

        <h3 className='welcome'>Welcome, Let's see how Bitcoin is doing today.</h3>

        <img src={PriceGraph} className='price' alt='price' />

        <h3 className='crypto'>Bitcoins current price is:</h3>
        <h3 className='eur'> €{this.state.EUR}</h3>
        <h3 className='usd'>${this.state.USD}</h3>
      </main>
    )
  }
}

export default MainPage;