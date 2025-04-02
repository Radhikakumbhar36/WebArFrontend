import './SecondSection.css'
import Card from '../Components/SecondSection/Card'
import React from 'react'

const SecondSection = () => {
  return (
    <>
        <div className="second">
            <div className='container'>
                <div className="heading-second">Custom AR solution tailored to meet your specific needs</div>
                <div className='containers-align'>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="button">
                    <button className="btn1">Get Started</button>
                    <button className='btn2'>More Services</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SecondSection
