import React from 'react';
import '../styles/Homepage.css';

const Homepage = () => {
  return (
    <div id="wrap">
      <div className="nested-items">
        <div className="title"></div>
        <div className="side-nav"></div>
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  )
}

export default Homepage;