import Carousel from "../common/Carousel";
import "../../blocks/CarouselSection.css";

const CarouselSection = () => {
  return (
    <>
      <div className="carousel__section">
        <div className="carousel__top-section">
          <h1 className="carousel__header">
            Best Places <br></br> to Cool Off
          </h1>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default CarouselSection;
