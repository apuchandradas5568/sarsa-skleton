import React, { useState, useEffect } from 'react';
import './DealsOfTheMonth.css';
import img1 from '../../images/deal1.png';
import img2 from '../../images/deal2.png';
import img3 from '../../images/text.png';

const DealsOfTheMonth = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-07-08') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return String(time).padStart(2, '0');
  };

  return (
    <div className="deals-container">
      <div className="text-item">
        <h1>Deals Of The Month</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Scelerisque duis ultrices sollicitudin aliquam sem.</p>
        <button>Buy Now</button>
        <div className="timer-container">
          <h2>Hurry, Before It’s Too Late!</h2>
          <div className="timer">
            <div className="timer-box">
              <span className="timer-number">{formatTime(timeLeft.days)}</span>
              <span className="timer-label">Days</span>
            </div>
            <div className="timer-box">
              <span className="timer-number">{formatTime(timeLeft.hours)}</span>
              <span className="timer-label">Hr</span>
            </div>
            <div className="timer-box">
              <span className="timer-number">{formatTime(timeLeft.minutes)}</span>
              <span className="timer-label">Mins</span>
            </div>
            <div className="timer-box">
              <span className="timer-number">{formatTime(timeLeft.seconds)}</span>
              <span className="timer-label">Sec</span>
            </div>
          </div>
        </div>
      </div>
      <div className="images-container">
        <div className="image-item">
          <img src={img1} alt="Deal 1" />
          <div className="discount">30% OFF</div>
        </div>
        <div className="image-item">
          <img src={img2} alt="Deal 2" />
        </div>
      </div>
    </div>
  );
};

export default DealsOfTheMonth;
