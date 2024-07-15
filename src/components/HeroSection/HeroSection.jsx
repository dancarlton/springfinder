import SearchBar from "./SearchBar";
import "./HeroSection.css";


const HeroSection = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__image"></div>
        <h1 className="hero__text">
          Cool off this summer at your local Waterhole
        </h1>
        <button className="sleek-button" onclick="handleClick()">Find a Spot Near You</button>
        {/* <SearchBar /> */}
      </div>
    </>
  );
};

export default HeroSection;
