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

  coinprice = () => (
    cc.price('BTC', ['USD', 'EUR']).then(prices => {
      this.setState({ EUR: prices.EUR, USD: prices.USD })
    })
  )

  componentDidMount() {
    this.coinprice();
  }

  render() {
    return (

      <main>
        <div className='images'>
          <img src={Google} className='Google' alt='Google' />
          <img src={Twitter} className='Twitter' alt='Twitter' />
          <img src={Reddit} className='Reddit' alt='binanace' />
        </div>

        <h3 className='welcome'>Welcome, Let's see cryptocurrency is doing today.</h3>



          <div class="card crypto-card" style={{ width: "18rem;" }}>
            <div class="card-body">
              <h5 class="card-title crypto">Bitcoin's current price is:</h5>
              <p class="card-text usd">${this.state.USD}</p>
            </div>
          </div>
 
      </main>
    )
  }
}

export default MainPage;