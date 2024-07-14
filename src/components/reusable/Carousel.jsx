import Cards from './Cards'
import '../../blocks/Carousel.css'
import { useState } from 'react'
import { dummyData } from '../../data/dummyData'

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex(prevIndex =>
      prevIndex === dummyData.length - 1 ? 0 : prevIndex + 1
    )
  }
  const prevSlide = () => {
    setActiveIndex(prevIndex =>
      prevIndex === 0 ? dummyData.length - 1 : prevIndex - 1
    )
  }

  return (
       <div className="carousel">
      <button className="carousel__button carousel__button--left" onClick={prevSlide}>
        ‹
      </button>
      <div className="carousel__container">
        <div className="carousel__slide">
          <Cards item={dummyData[activeIndex]} />
        </div>
      </div>
      <button className="carousel__button carousel__button--right" onClick={nextSlide}>
        ›
      </button>
    </div>
  )
}

export default Carousel
