// FourthSection.jsx
import React from 'react'
import './FourthSection.css'
import Production from '../assets/production.png'
import Marketing from '../assets/Marketing.png'

const FourthSection = () => {
  return (
    <div className="ar-container">
      <div className="left-section">
        <div className="left-content">
            <div className="image-container">
                <img src={Production} alt="AR for Product Visualization" className="ar-image"/>
            </div>
          <h2>AR for Product Visualization</h2>
          <p>
            Showcase your products in 3D, allowing customers to explore every angle, 
            try out customization options, and see them in their own space with AR.
          </p>
          </div>
      </div>
      
      <div className="right-section">
        <div className="marketing-content">
          <h2>Marketing</h2>
          <p>
            Create marketing that breaks the fourth wall. Use AR to engage customers 
            with interactive ads, virtual product demos, and immersive brand experiences.
          </p>
          <div className="marketing-icons">
            <div className="icon-row">
            </div>
            <div className="marketing-illustration">
              <img src={Marketing} alt="Marketing" className="marketing-image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourthSection