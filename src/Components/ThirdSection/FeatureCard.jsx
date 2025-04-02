// FeatureCard.jsx
import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ type = 'light' }) => {
  const cardClassName = type === 'red' ? 'feature-card red' : 'feature-card';
  
  return (
    <div className={cardClassName}>
      <h3>Search & Discover :</h3>
      <p>
        Instantly find your favorite dishes using a smart search bar with voice
        input for quick access.
      </p>
    </div>
  );
};

export default FeatureCard;