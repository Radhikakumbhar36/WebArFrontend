import React from 'react'
import './FifthSection.css'
import laptop from '../assets/image.png'
import mobile from '../assets/home-image.png'
import Arrow from '../assets/arrow.png'
const FifthSection = () => {
  return (
    <div className='fifth'>
        <div className='fifth-left'>
            <h1>MayasabhaXR Stock House</h1>
            <p>Your ultimate marketplace for high-quality 3D models designed for AR, VR, gaming, and visualization. Buy or rent premium assets for your projects, from architecture and characters to props and environments. Start creating with ease!</p>
            <img src={laptop} alt='laptop'  className='laptop-img'/>
        </div>
        <img src={Arrow} alt="arrow" className="arrow-img"/>
        <div className="fifth-right">
            <h1>Show Case Your Models In Mirage Menu</h1>
              <img src={mobile} alt="mobile" className="mobile-img"/>
        </div>
      
    </div>
  )
}

export default FifthSection
