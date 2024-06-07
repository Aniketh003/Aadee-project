import React from 'react'
import image from "./../assets/poster-image.png"

const PosterImage = () => {
  return (
    <div className='poster-image'>
      <img src={image} alt="poster" className='poster'/>
    </div>
  )
}

export default PosterImage
