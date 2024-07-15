import React from 'react';
import './Poster.css';
import mainImage from '../../images/poster.jpg'; // Update the path to your image

const Poster = () => {
  return (
    <div className=''>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="">TSHIRT</a></li>
            <li className="nav-item"><a href="">BOTTOMS</a></li>
            <li className="nav-item"><a href="">CAPS</a></li>
            <li className="nav-item"><a href="">ACCESSORIES</a></li>
            <li className="nav-item"><a href="">OVERSIZED</a></li>
          </ul>
        </nav>
      </header>
      <div className="main-content">
        <img src={mainImage} alt="Demon Slayer" className="main-image" />
      </div>

    </div>

  );
};

export default Poster;
