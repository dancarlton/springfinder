import "../../blocks/Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { cardData } from "../../utils/constants.";
import Cards from "./Cards";

const Carousel = () => {
  const [data, setData] = useState([]);

    useEffect(() => {
      const processedData = cardData.map((card) => ({
        name: card.name,
        link: card.link,
        description: card.description,
      }));
  
      setData(processedData);
    }, []);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return(
    <div className="carousel">
      <Slider {...settings}>
        {data.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
