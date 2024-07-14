import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import "./App.css";
import HeroSection from "./HeroSection/HeroSection";
import CarouselSection from "./CarouselSection/CarosuelSection";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CarouselSection />
      <Footer />
    </div>
  );
}

export default App;
