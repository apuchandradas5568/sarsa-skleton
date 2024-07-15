import React from 'react';
import './ContactSection.css';
import { FaInstagram, FaFacebook} from "react-icons/fa";
import {FaXTwitter}  from "react-icons/fa6";

const ContactSection = () => {
  return (
    <div className="contact-section">
       <span className="contact-text">BE IN TOUCH WITH US</span>
      <div className="contact-content">
        <div className="contact-form">
          <input type="email" placeholder="ENTER YOUR EMAIL" className="email-input" />
          <button className="join-button">JOIN US</button>
        </div>
      </div>
      <div className="social-icons">
        <FaInstagram className="social-icon" />
        <FaFacebook className="social-icon" />
        <FaXTwitter className="social-icon" />
      </div>
    </div>
  );
}

export default ContactSection;
