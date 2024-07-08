import React from 'react';
import './ContactSection.css';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <div className="contact-section-1">
      <div className="contact-content-1">
        <span className="contact-text-1">BE IN TOUCH WITH US</span>
        <div className="contact-form-1">
          <input type="email" placeholder="ENTER YOUR EMAIL" className="email-input-1" />
          <button className="join-button-1">JOIN US</button>
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
