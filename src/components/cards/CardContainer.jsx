import React from 'react'
import "./cards.css"
import butterfly from "../../assets/butterfly.png"
import book from "../../assets/book.png"
import kid from "../../assets/kid.png"
import arrow from "../../assets/arrow.png"

const CardContainer = () => {
    return (
        <div className='cards-container'>
            <div className="card" id='leading-sciences'>
                <div className="image">
                    <img src={butterfly} alt="" />
                </div>
                <div className="text">
                    <h1>Leading Sciences</h1>
                    <p>Our approach involves delving into every science concept, meticulously crafting audio visual presentations that bring the subject matter to life. We are dedicated to transforming complex ideas into engaging visual experiences, ensuring that learners grasp the essence of each concept effortlessly.</p>
                    <div className="button">
                        <p>Read more</p>
                        <div className="arrow">
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-second" id='learning-vedic-science'>
                <div className="text">
                    <h1>Vedic Maths</h1>
                    <p>Our approach involves delving into every science concept, meticulously crafting audio visual presentations that bring the subject matter to life. We are dedicated to transforming complex ideas into engaging visual experiences, ensuring that learners grasp the essence of each concept effortlessly.</p>
                    <div className="button">
                        <p>Read more</p>
                        <div className="arrow">
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={book} alt="" />
                </div>
            </div>
            <div className="card" id='learning-bespoke'>
                <div className="image">
                    <img src={kid} alt="" />
                </div>
                <div className="text">
                    <h1>Bespoke</h1>
                    <p>Our approach involves delving into every science concept, meticulously crafting audio visual presentations that bring the subject matter to life. We are dedicated to transforming complex ideas into engaging visual experiences, ensuring that learners grasp the essence of each concept effortlessly.</p>
                    <div className="button">
                        <p>Read more</p>
                        <div className="arrow">
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContainer
