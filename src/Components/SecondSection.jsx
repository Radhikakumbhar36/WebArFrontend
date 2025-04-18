import './SecondSection.css'
import Card from '../Components/SecondSection/Card'
import React from 'react'
import upload from '../assets/upload.png'
import model from '../assets/model.png'
import share from '../assets/share.png'

const SecondSection = () => {
  return (
    <>
        <div className="second">
            <div className='container'>
                <div className="heading-second">Create AR Models in Just 3 Simple Steps</div>
                <div className='containers-align'>
                    <Card img={upload} title='Upload Photos' info='Snap a few pictures of your product from different angles and upload them to our platform. no special equipment or technical expertise needed.'/>
                    <Card img={model} title='We Build Your 3D Model' info='Our intelligent system automatically transforms your photos into a detailed, interactive 3D model ready for AR viewing.'/>
                    <Card img={share} title='Share Anywhere' info='Receive a unique QR code linked to your AR model hosted on our Mirage platform. Add it to your website, packaging, social media, or marketing materials.'/>
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
