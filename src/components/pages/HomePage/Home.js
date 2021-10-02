import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data';
import Services from '../Services/Services'
import About from '../../pages/About'
import Hero from '../Hero/Hero'
import Pricing from '../../Pricing';
import Gallery from '../Gallery/Gallery'
import Location from '../Location/Location'
import Contact from '../Contact/Contact'

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Gallery />
      <Location />
      <Contact />
      {/* <HeroSection {...homeObjOne} /> */}
      {/* <HeroSection {...homeObjThree} /> */}
      {/* <HeroSection {...homeObjTwo} /> */}
      {/* <Pricing /> */}
      {/* <HeroSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;
