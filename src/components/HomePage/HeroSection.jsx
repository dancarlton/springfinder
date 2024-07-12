import SearchBar from "../common/SearchBar";
import DestinationModal from "../DestinationModal";

const HeroSection = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__image"></div>
        <h1 className="hero__text">
          Cool off this summer at your local Waterhole
        </h1>
        <SearchBar />
      </div>
    </>
  );
};

export default HeroSection;
