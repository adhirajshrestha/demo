import React from 'react';
import './Rightt.css';
import pppImage from '../image/ppp.avif'; // Correct path relative to Rightt.js

const Rightt = () => {
  return (
    <div className='wholeimg'>
      <div className='image-container'>
        <img className='image' src={pppImage} alt='profile' />
        <div className='mainsearch'>
          <input
            className='searchbar'
            type='text'
            name='search'
            id='search'
            placeholder='Subscribe my Newsletter'
          />
          <button className='button'>search</button>
        </div>
      </div>
    </div>
  );
};

export default Rightt;

