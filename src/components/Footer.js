import React, { Component } from 'react';
import Twit from 'twit';
import config from '../config/config.js';

const T = new Twit({
  consumer_key: config.CONSUMER_KEY,
  consumer_secret: config.CONSUMER_SECRET,
  access_token: config.ACCESS_TOKEN,
  access_token_secret: config.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000 
})


class Footer extends Component {
  state = {
    tweets: ''
  }

  componentDidMount() {
    T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
      console.log(data)
    })
}


  render() {
    return (
      <h1>hello</h1>
    )
  }
}

export default Footer;