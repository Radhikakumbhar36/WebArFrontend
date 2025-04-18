import React from 'react'
import './Card.css'


const Card = (props) => {
  return (
    <div className="container-inner">
        <img src={props.img} alt="Bowl image" />
        <h4>{props.title}</h4>
        <p>{props.info}</p>
    </div>
  )
}

export default Card
