// FirstSection.jsx - Update button to include play icon
import React from 'react';
import './FirstSection.css';
import Navbar from './FirstSection/Navbar';
import Image from './FirstSection/Image';

const FirstSection = () => {
  return (
    <>
      <div className="first">
        <div className="left">
          <Navbar/>
          <div className='heading'>
            Enhance your brand presence with immersive AR experiences
          </div>
          <div className="text">
            <p>"At MAYASABHAXR, we create tailored AR experiences that bring your
              brand to life, offering your customers an interactive and memorable journey."</p>
          </div>
          <button className='btn'><span>▶</span> See Demo</button>
        </div>
        <div className="right">
          <Image/>
        </div>
      </div>
    </>
  );
};

export default FirstSection;