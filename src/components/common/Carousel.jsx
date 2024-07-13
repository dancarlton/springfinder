import "../../blocks/Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { dummyData } from "../../data/dummyData";
import Cards from "./Cards";

const Carousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const processedData = [];

    // extract data from springs
    dummyData.springs.forEach((card) => {
      processedData.push({
        name: card.name,
        image: card.image,
        description: card.description,
      });
    });

    // extract data from pools
    dummyData.pools.forEach((card) => {
      processedData.push({
        name: card.name,
        image: card.image,
        description: card.description,
      });
    });

    setData(processedData);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 4,
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
