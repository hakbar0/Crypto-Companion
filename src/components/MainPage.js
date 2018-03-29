import React, { Component } from 'react';
import Reddit from '../images/reddit.png';
import Twitter from '../images/twitter.png';
import Google from '../images/google.png';
import '../styles/Main.css';

class MainPage extends Component {

  render() {
    return (
      <div className='images'>
          <img src={Google} className='Google' alt='Google' />
          <img src={Twitter} className='Twitter' alt='Twitter' />
          <img src={Reddit} className='Reddit' alt='binanace' />
        </div>



        )
  }
}

export default MainPage;