import Cards from "./Cards";
import '../../blocks/Carousel.css'
import { useState } from "react";
import { dummyData } from '../../data/dummyData'

const Carousel = ({dummyData}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === dummyData.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? dummyData.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="carousel__container">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
};

export default Carousel;
