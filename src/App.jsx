import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { useState } from "react";
import "./App.css";
import DestinationModal from "./components/DestinationModal";
import HeroSection from "./components/HomePage/HeroSection";
import { cardData } from "./utils/constants.";
import DestinationReviews from "./components/DestinationReviews";
import ItemModal from "./components/ItemModal";
import CarouselSection from "./components/HomePage/CarosuelSection";
import { Header } from "./components/HomePage/Header";
import { Footer } from "./components/HomePage/Footer";

function App() {
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
  const openDestination = () => {
    setActiveModal("view-destination");
  };

  /* const handleItemClick = (item) => {
    setActiveModal("preview");
    setSelectedCard(item);
  }; */

  return (
    <div>
      <Header />
      <HeroSection />
      <CarouselSection openDestination={openDestination} />
      <DestinationModal
        handleOutsideClick={handleOutsideClick}
        isOpen={activeModal === "view-destination"}
        item={cardData}
        onClose={onClose}
        // imagePopup={handleItemClick}
        DestinationReviews={DestinationReviews}
      />
      <Footer />
    </div>
  );
}

/* <ItemModal
          handleOutsideClick={handleOutsideClick}
          activeModal={activeModal}
          item={selectedCard}
          onClose={onClose}
        /> */

export default App;
