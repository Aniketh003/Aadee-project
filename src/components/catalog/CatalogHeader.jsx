import React from 'react'
import './catalogHeader.css'
import arrowLeft from "../../assets/arrow-left.png"
import arrowRight from "../../assets/arrow-right.png"

const CatalogHeader = () => {
    return (
        <div className='catalog-header-container'>
            <div className="arrow">
                <img src={arrowLeft} alt="arrow" />
            </div>
            <div className="catalog-content">
                <div className="library">
                    <p>Library</p>
                </div>
                <h1>Our Sample Catalogue</h1>
                <p>Where Learning Unfolds like a story</p>
            </div>
            <div className="arrow">
                <img src={arrowRight} alt="arrow" />
            </div>
        </div>
    )
}

export default CatalogHeader
