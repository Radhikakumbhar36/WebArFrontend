import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ 
  type = 'light',
  title,
  description,
  icon = null // Optional icon prop
}) => {
  const cardClassName = `feature-card ${type} ${!icon ? 'no-icon' : ''}`;
  
  return (
    <div className={cardClassName}>
      {icon && <div className="feature-icon">{icon}</div>}
      <div className="feature-content">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;