import React from "react";
import { useState } from "react";
import "./App.css";
import DestinationModal from "./components/DestinationModal";
import HeroSection from "./components/HomePage/HeroSection";
import { cardData } from "./utils/constants.";
import DestinationReviews from "./components/DestinationReviews";
import ItemModal from "./components/ItemModal";

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

  const handleItemClick = (item) => {
    setActiveModal("preview");
    setSelectedCard(item);
  };

  return (
    <>
      <div>
        <HeroSection />
        <DestinationModal
          handleOutsideClick={handleOutsideClick}
          activeModal={activeModal}
          item={cardData}
          onClose={onClose}
          imagePopup={handleItemClick}
          DestinationReviews={DestinationReviews}
        />
        <ItemModal
          handleOutsideClick={handleOutsideClick}
          activeModal={activeModal}
          item={selectedCard}
          onClose={onClose}
        />
      </div>
    </>
  );
}

export default App;
