import React from 'react'
import "./Intro.css"
import Button from '../Button'

const IntroContainer = () => {
    return (
        <div className='intro-main-container' >
            <div className="container">
                <div className="first">
                    <h3>The future of learning with <span>Credenza!</span></h3>
                    <p>Our visual approach fosters critical thinking, creativity, and a true passion for learning.</p>
                </div>
                <div className="second">
                    <div className="container">
                        <div className="lets-talk">
                            <input type="text" placeholder='Enter your email' />
                            <Button text="Let's talk" />
                        </div>
                        <p>We care about your data in our <span>Privacy Policy.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroContainer
