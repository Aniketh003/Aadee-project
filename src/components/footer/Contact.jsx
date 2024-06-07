import React from 'react'
import "./footer.css"
import Button from '../Button'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="content">
        <h2>Connect with us to unveil a new world of learning. </h2>
      </div>
      <div className="lets-talk">
        <input type="text" placeholder='Enter your email' />
        <Button text="Let's talk" />
      </div>
    </div>
  )
}

export default Contact
