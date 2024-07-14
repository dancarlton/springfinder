import "..//CarouselSection/CarouselSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { cardData } from "../../utils/constants.";
import Cards from "./Cards";
import DestinationModal from "../Modals/DestinationModal";
import DestinationReviews from "../Modals/DestinationReviews";
import ItemModal from "../Modals/ItemModal";
import "./CarouselSection.css";

const CarouselSection = () => {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const onClose = () => {
    setActiveModal("");
  };
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };
  const openDestination = (item) => {
    setActiveModal("view-destination");
    setSelectedCard(item);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const processedData = cardData.map((card) => ({
      id: card._id,
      name: card.name,
      link: card.link,
      address: card.address,
      coordinates: card.coordinates,
      description: card.description,
    }));

    setData(processedData);
  }, []);

  const getDirections = (item) => {
    document.location.href = `http://maps.google.com?q=${item.coordinates}`;
  };

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  /* const handleItemClick = (item) => {
    setActiveModal("preview");
    setSelectedCard(item);
  }; */

  return (
    <>
      <div className="carousel__section">
        <div className="carousel__top-section">
          <h1 className="carousel__header">
            Best Places <br></br> to Cool Off
          </h1>
        </div>
        <div className="carousel">
          <Slider {...settings}>
            {data.map((item) => (
              <Cards
                openDestination={openDestination}
                key={item._id}
                item={item}
              />
            ))}
          </Slider>
        </div>
      </div>
      <DestinationModal
        handleOutsideClick={handleOutsideClick}
        isOpen={activeModal === "view-destination"}
        item={selectedCard}
        onClose={onClose}
        getDirections={getDirections}
        // imagePopup={handleItemClick}
        DestinationReviews={DestinationReviews}
      />
    </>
  );
};

/* <ItemModal
          handleOutsideClick={handleOutsideClick}
          activeModal={activeModal}
          item={selectedCard}
          onClose={onClose}
        /> */

export default CarouselSection;
