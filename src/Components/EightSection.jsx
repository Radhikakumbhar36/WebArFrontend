// EighthSection.jsx
import React from 'react';
import './EightSection.css';

const EighthSection = () => {
  return (
    <footer className="eighth-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="logo-container">
              <h1 className="logo-text">LOGO</h1>
            </div>
            
            <div className="about-container">
              <h2 className="about-title">About MayasabhaXR</h2>
              <p className="about-description">
                MAYASABHAXR is a pioneer in delivering AR solutions tailored to elevate businesses 
                across diverse industries. Our mission is to create immersive experiences that 
                captivate and engage, helping brands make a lasting impact.
              </p>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="contact-container">
              <h3 className="contact-title">Get in Touch</h3>
              
              <div className="contact-details">
                <p className="contact-item">
                  <span className="contact-label">Email:</span> mayasabhaxr@gmail.com
                </p>
                <p className="contact-item">
                  <span className="contact-label">Phone:</span> +91 7276192889
                </p>
                <p className="contact-item">
                  <span className="contact-label">Address:</span> Karvir, Kolhapur - 416007
                </p>
              </div>
              
              <p className="contact-cta">Feel free to reach out to us anytime</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EighthSection;