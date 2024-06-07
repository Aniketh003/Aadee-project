import React from 'react'
import './cardContainer.css'
import family from "./../../assets/family.png"
import atomic from "./../../assets/atomic.png"
import earth from "./../../assets/earth.png"
import pollination from "./../../assets/pollination.png"
import shadow from "./../../assets/shadow.png"
import arrow from "../../assets/arrow.png"

const CatalogCardContainer = () => {
  const cards = [
    {
      image: family,
      text: "PROTISTA FAMILY",
    },
    {
      image: atomic,
      text: "ATOMIC STRUCTURE",
    },
    {
      image: earth,
      text: "EARTH CORE",
    },
    {
      image: pollination,
      text: "POLLINATION",
    },
  ]
  return (
    <div className='card-container'>
      {cards.map((e, index) => (
        <div className="card">
          <img src={e.image} alt="" className='main' />
          <img src={shadow} alt="" className='shadow' />
          <div className="content">
            <p>{e.text}</p>
            <div className="button">
              <p>Learn more</p>
              <div className="arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CatalogCardContainer
