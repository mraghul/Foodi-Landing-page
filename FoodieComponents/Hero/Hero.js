import React from 'react';
import './Hero.css';
import RightHeroImg from '../foodie-img/slider-courier-mask-1.png'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left-side">
        <h1>Your Express  <br />
        <span> Food Delivered Hot & Fresh</span></h1>
        <p>Healthy switcher chefs do all the prep work, like peeding, chopping & marinating,<br /> so you can cook a fresh food.</p>
        <button className="btn-primary">Read More</button>
      </div>
      <div className="hero-right-side">
        <img src={RightHeroImg} alt='' />
      </div>
    </div>
  )
}

export default Hero
