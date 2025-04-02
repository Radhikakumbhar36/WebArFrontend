import React from 'react'
import './Card.css'
import bowl from '../../assets/bowl.png'

const Card = () => {
  return (
    <div className="container-inner">
        <img src={bowl} alt="Bowl image" />
        <h4>Mirage Menu (HoReCa)</h4>
        <p>Explore our 3D and AR menu designed for hotels, restaurants, and cafes</p>
    </div>
  )
}

export default Card
