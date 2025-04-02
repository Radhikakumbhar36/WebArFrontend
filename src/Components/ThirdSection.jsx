import React from 'react';
import './ThirdSection.css';
import FeatureCard from '../Components/ThirdSection/FeatureCard';
import Content from '../Components/ThirdSection/Content';
import leftUpArrow from '../assets/leftUpArr.png';
import rightUpArrow from '../assets/right-upArr.png';
import leftDownArrow from '../assets/left-downArr.png';
import rightDownArrow from '../assets/right-downArr.png';
import mobile from '../assets/mobile.png';

const ThirdSection = () => {
  // Feature cards data array
  const featureCards = [
    {
      id: 1,
      position: 'top-left',
      type: 'light',
      arrow: leftUpArrow,
      arrowClass: 'left-up-arrow'
    },
    {
      id: 2,
      position: 'bottom-left',
      type: 'red',
      arrow: leftDownArrow,
      arrowClass: 'left-down-arrow'
    },
    {
      id: 3,
      position: 'top-right',
      type: 'red',
      arrow: rightUpArrow,
      arrowClass: 'right-up-arrow'
    },
    {
      id: 4,
      position: 'bottom-right',
      type: 'light',
      arrow: rightDownArrow,
      arrowClass: 'right-down-arrow'
    }
  ];

  return (
    <section className="third">
      <div className="left-third">
        <div className="heading-third">
          <h1>Mirage Menu</h1>
          <p>Revolutionize your dining experience with Mirage Menu</p>
        </div>
        
        <Content />
        
        {/* Left side feature cards */}
        <div className={`feature-container ${featureCards[0].position}`}>
          <FeatureCard type={featureCards[0].type} />
          <img 
            src={featureCards[0].arrow} 
            alt="Arrow pointing to mobile" 
            className={`arrow ${featureCards[0].arrowClass}`} 
          />
        </div>
        
        <div className={`feature-container ${featureCards[1].position}`}>
          <FeatureCard type={featureCards[1].type} />
          <img 
            src={featureCards[1].arrow} 
            alt="Arrow pointing to mobile" 
            className={`arrow ${featureCards[1].arrowClass}`} 
          />
        </div>
      </div>
      
      <div className="middle-third">
        <div className="mobile-container">
          <img src={mobile} alt="Mobile application preview" className="mobile-image" />
        </div>
      </div>
      
      <div className="right-third">
        {/* Right side feature cards */}
        <div className={`feature-container ${featureCards[2].position}`}>
          <FeatureCard type={featureCards[2].type} />
          <img 
            src={featureCards[2].arrow} 
            alt="Arrow pointing to mobile" 
            className={`arrow ${featureCards[2].arrowClass}`} 
          />
        </div>
        
        <div className={`feature-container ${featureCards[3].position}`}>
          <FeatureCard type={featureCards[3].type} />
          <img 
            src={featureCards[3].arrow} 
            alt="Arrow pointing to mobile" 
            className={`arrow ${featureCards[3].arrowClass}`} 
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;