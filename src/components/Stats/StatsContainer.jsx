import React from 'react'
import "./stats.css"
const StatsContainer = () => {
    return (
        <div className='stats-container' id='about-us'>
            <p>Our visual approach fosters critical thinking, creativity, <br /> and a true passion for learning.</p>
            <div className="stats">
                <span>
                    <h1>6<span>+</span></h1>
                    <p>Years of Experience</p>
                </span>
                <hr />
                <span>
                    <h1>1000<span>+</span></h1>
                    <p>Assests and Environment</p>
                </span>
                <hr />
                <span>
                    <h1>10K<span>+</span></h1>
                    <p>Minutes of Content</p>
                </span>
                <hr />
                <span>
                    <h1>2000<span>+</span></h1>
                    <p>High Desinition Videos</p>
                </span>
            </div>
        </div>
    )
}

export default StatsContainer
