import React from 'react';
import './Footer.css';
import LogoImage from "../foodie-img/logo-home-orange-1.png";
import Location from '../foodie-img/location-pin.png';
import Phone from '../foodie-img/footerCall.png';
import Mail from '../foodie-img/email.png';
import FaceBook from '../foodie-img/facebook-app-symbol.png';
import Twitter from '../foodie-img/twitter.png';
import Instagram from '../foodie-img/instagram.png';
import GooglePlus from '../foodie-img/google-plus.png';

const Footer = () => {
  return (
    <div>
        <div className="footer-container">
            <div className='footer-left'>
                <img src={LogoImage} alt='' />
                <p>
                    We are a young company always looking <br/> for new and creative ideas to help you <br/>with our products in your everyday work.
                </p>
                <h6>Our Team</h6>
            </div>
            <div className='footer-center'>
                <h2>Contact</h2>
                
                <div>
                    <img src={Location} alt='' />
                    <span> Via Rossini 10, 10136 Turin Italy</span>
                </div>
                <div>
                    <img src={Phone} alt='' />
                    <span>Phone: (0039) 333 12 68 347</span>
                </div>
                <div>
                    <img src={Mail} alt='' />
                    <span> Email: hello@gmail.com</span>
                </div>
            </div>
            <div className='footer-right'>
                <h2>Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Catalog</li>
                    <li>Blog</li>
                    <li>Contacts</li>
                </ul>
            </div>
        </div>
        <div className="footer-container-bottom">
            <div className='footer-bottom-left'>
                <h5>Copyright © 2023 Foodie. All Rights Reserved.</h5>
            </div>
            <div className='footer-bottom-right'>
                <ul>
                    <li>
                        <img src={FaceBook} alt='' />
                    </li>
                    <li>
                        <img src={Twitter} alt='' />
                    </li>
                    <li>
                        <img src={Instagram} alt='' />
                    </li>
                    <li>
                        <img style={{width: 25}} src={GooglePlus} alt='' />
                    </li>
                </ul>
            </div>
        </div>
        
      
    </div>
  )
}

export default Footer
