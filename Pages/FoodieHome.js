import React from 'react';
import Hero from '../FoodieComponents/Hero/Hero';
import Popular from '../FoodieComponents/Popular/Popular';
import Delivery from '../FoodieComponents/Delivery/Delivery';
import Recommendations from '../FoodieComponents/Recommendations/Recommendations';
import HottestBiryani from '../FoodieComponents/HottestBiryani/HottestBiryani';
import Testimnial from '../Components/Testimnial';
import MoreDetails from '../FoodieComponents/MoreDetails/MoreDetails';
import Subscribe from '../FoodieComponents/Subscribe/Subscribe';



const FoodieHome = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Delivery />
      <Recommendations />
      <HottestBiryani />
      <Testimnial />
      <MoreDetails />
      <Subscribe />
    </>
  )
}

export default FoodieHome
