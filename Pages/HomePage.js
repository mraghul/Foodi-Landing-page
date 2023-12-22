import React from 'react';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel';
import Home from '../Components/Home';
import About from '../Components/About';
import Work from '../Components/Work';
import Testimnial from '../Components/Testimnial';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Accordion from '../Components/Accordion';

const HomePage = () => {


  return (
    <div>
      <Navbar />
      <Carousel />
      <Home />
      <About />
      <Work />
      <Testimnial />
      <Accordion />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
