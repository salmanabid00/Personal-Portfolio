import React from 'react';
import salman from '../assets/salman.png';

function Hero() {
  return (
    <div id='home' className='Hero'>
      <img src={salman} alt="" />
      <h1> <span>I'm Salman Abid</span> frontend developer</h1>
      <p>I'm front-end developer from Pakistam</p>
      <div className="hero-action">
      <a href="#contact">Connect with me</a>
        <div className="heroresume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;