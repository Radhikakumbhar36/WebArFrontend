// SixthSection.jsx
import React from 'react';
import './SixthSection.css';
import MirageMenuIcon from '../assets/bowl.png'; // Update path to your icon

const SixthSection = () => {
  // Service card data for easy maintenance and scalability
  const serviceCards = [
    {
      id: 1,
      title: "Mirage Menu",
      subtitle: "(HoReCa)",
      description: "Explore our 3D and AR menu designed for hotels, restaurants, and cafes"
    },
    {
      id: 2,
      title: "Mirage Menu",
      subtitle: "(HoReCa)",
      description: "Explore our 3D and AR menu designed for hotels, restaurants, and cafes"
    },
    {
      id: 3,
      title: "Mirage Menu",
      subtitle: "(HoReCa)",
      description: "Explore our 3D and AR menu designed for hotels, restaurants, and cafes"
    },
    {
      id: 4,
      title: "Mirage Menu",
      subtitle: "(HoReCa)",
      description: "Explore our 3D and AR menu designed for hotels, restaurants, and cafes"
    }
  ];

  return (
    <section className="sixth-section">
      <div className="sixth-container">
        <h2 className="sixth-title">Why We're Your Go-To Solution?</h2>
        
        <p className="sixth-description">
          At MAYASABHA AR, we blend creativity and technology to deliver affordable, result-driven AR experiences. 
          Our solutions provide immersive interactions without the hassle. Whether for marketing campaigns or 
          architectural visualization, we bring your vision to life in the most innovative way.
        </p>
        
        <div className="service-cards-container">
          {serviceCards.map((card) => (
            <div className="service-card" key={card.id}>
              <div className="service-icon-container">
                <img src={MirageMenuIcon} alt="Mirage Menu" className="service-icon" />
              </div>
              <h3 className="service-title">{card.title}</h3>
              <h4 className="service-subtitle">{card.subtitle}</h4>
              <p className="service-description">{card.description}</p>
            </div>
          ))}
        </div>
        
        <div className="action-buttons">
          <button className="get-started-btn">Get Started</button>
          <button className="more-services-btn">More Services</button>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;