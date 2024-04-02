import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import CardsSlider from '../CardsSlider';
import Grid from '../Grid';

function Home() {
  return (
    <>
      <HeroSection />
      <Grid />
      <CardsSlider />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;