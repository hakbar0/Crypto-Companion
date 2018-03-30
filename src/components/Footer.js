import React, { Component } from 'react';
import Twit from 'twit';
import config from '../config/config.js';
import '../styles/Footer.css';


class Footer extends Component {
  state = {
    tweets: ''
  }


  render() {
    return (

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-3">Crypto Companion</h1>
          <p class="lead">© 2018 Lasting Spark</p>
        </div>
      </div>

    )
  }
}

export default Footer;