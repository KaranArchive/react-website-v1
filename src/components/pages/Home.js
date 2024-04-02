import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import CardsSlider from '../CardsSlider';
import Grid from '../Grid';
import Component1 from '../Writencontent';
import Component2 from '../Writtencontent2';
import Cars from '../Cars';

  const rowData1 = [
    { component1: <Component1 />, component2: <Cars />, backGroundColor: '#e5eaf5' },
  ];

  const rowData2 = [
    { component1: <Cars />, component2: <Component2 />, backGroundColor: '#016a7c' },
  ];


function Home() {
  return (
    <>
      <HeroSection />
      <Grid  rowData={rowData1}/>
      <CardsSlider />
      <Grid  rowData={rowData2}/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;