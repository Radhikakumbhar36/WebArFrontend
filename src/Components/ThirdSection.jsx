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
  // Features data array
  const features = [
    {
      id: 1,
      title: 'Search & Discover',
      description: 'Instantly find dishes using smart search with voice input capabilities for convenient browsing through visually appealing categories.',
      type: 'light',
      position: 'top-left',
      arrow: leftUpArrow,
      arrowClass: 'left-up-arrow'
    },
    {
      id: 2,
      title: 'Visualize in AR',
      description: 'With a simple tap on "View in AR," customers can place a realistic 3D burger (or any dish) on their table to see the actual size, presentation, and details.',
      type: 'red',
      position: 'bottom-left',
      arrow: leftDownArrow,
      arrowClass: 'left-down-arrow'
    },
    {
      id: 3,
      title: 'Make Informed Choices',
      description: 'Access important details like nutritional information, ingredients, and pricing while interacting with the 3D model.',
      type: 'red',
      position: 'top-right',
      arrow: rightUpArrow,
      arrowClass: 'right-up-arrow'
    },
    {
      id: 4,
      title: 'Access Other Food Items',
      description: 'You can seamlessly switch from one food item to another food item for comparison and exploration.',
      type: 'light',
      position: 'bottom-right',
      arrow: rightDownArrow,
      arrowClass: 'right-down-arrow'
    }
  ];

  return (
    <section className="third">
      <div className="left-third">
        <div className="heading-third">
          <h1>See It In Action: Food Industry </h1>
          <p>Interactive AR Food Models</p>
        </div>
        
        <Content />
        
        {/* Left side feature cards */}
        <div className={`feature-container ${features[0].position}`}>
          <FeatureCard
            key={features[0].id}
            title={features[0].title}
            description={features[0].description}
            type={features[0].type}
          />
          {/* <img 
            src={features[0].arrow} 
            alt="Arrow pointing to mobile" 
            className={`arrow ${features[0].arrowClass}`} 
          /> */}
        </div>
        
        <div className={`feature-container ${features[1].position}`}>
          <FeatureCard
            key={features[1].id}
            title={features[1].title}
            description={features[1].description}
            type={features[1].type}
          />
          {/* <img 
            src={features[1].arrow} 
            alt="Arrow pointing to mobile" 
            className={`arrow ${features[1].arrowClass}`} 
          /> */}
        </div>
      </div>
      
      <div className="middle-third">
        <div className="mobile-container">
          <img src={mobile} alt="Mobile application preview" className="mobile-image" />
        </div>
      </div>
      
      <div className="right-third">
        {/* Right side feature cards */}
        <div className={`feature-container ${features[2].position}`}>
          <FeatureCard
            key={features[2].id}
            title={features[2].title}
            description={features[2].description}
            type={features[2].type}
          />
          {/* <img 
            src={features[2].arrow} 
            alt="Arrow pointing to mobile" 
            className={`arrow ${features[2].arrowClass}`} 
          /> */}
        </div>
        
        <div className={`feature-container ${features[3].position}`}>
          <FeatureCard
            key={features[3].id}
            title={features[3].title}
            description={features[3].description}
            type={features[3].type}
          />
          {/* <img 
            src={features[3].arrow} 
            alt="Arrow pointing to mobile" 
            className={`arrow ${features[3].arrowClass}`} 
          /> */}
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;