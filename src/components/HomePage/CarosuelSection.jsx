import Carousel from "../common/Carousel";
import '../../blocks/CarouselSection.css'

const CarouselSection = () => {
  return (
    <>
      <div className="carousel__section">
        <div className="carousel__top-section">
          <h1 className="carousel__header">Top Paces to Cool Off</h1>
          <div className="carousel__buttons">
            <button className="carousel__button">prev</button>
            <button className="carousel__button">next</button>
          </div>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default CarouselSection;
