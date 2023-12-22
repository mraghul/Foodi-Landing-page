import React from 'react';
import './Delivery.css';
import LeftImage from '../foodie-img/sit-home-delivery.png';
import FastDelivery from '../foodie-img/fast-delivery.png';
import MobileApp from '../foodie-img/booking.png';
import NearBy from '../foodie-img/nearby.png';
import Courier from '../foodie-img/delivery-courier.png';

const Delivery = () => {
  return (
    <div className="delivery-container">
        <div className="delivery-side">
        <div className="delivery-left-side">
            <img src={LeftImage} alt='' />
        </div>
        <div className="delivery-right-side">
            <h1>Sit at Home <br />
                <span>We Will Take Care</span>
            </h1>
            <p>
                Proin ornare posuere quam ut euismod. Nam eu nunc vitae orci ultrices imperdiet ut id ligula. 
                Sed interdum eros eget sagittis rutrum. Vestibulum in elementum mauris. In iaculis odio urna.
            </p>
            <div className="more-details">
                <div className="delivery-details">
                    <img src={FastDelivery} alt='' />
                    <h6>Fast Delivery <br />
                    in 1 Hour</h6>
                </div>
                <div className="delivery-details">
                    <img src={MobileApp} alt='' />
                    <h6>Amazing <br />
                    Mobile App</h6>
                </div>
                <div className="delivery-details">
                    <img src={NearBy} alt='' />
                    <h6>Wide <br />
                    Coverage Map</h6>
                </div>
                <div className="delivery-details">
                    <img src={Courier} alt='' />
                    <h6>More Than <br />
                    150 Couriers</h6>
                </div>                
            </div>
            <button className="btn-primary">Read More</button>
        </div>
    </div>
        
    </div>
  )
}

export default Delivery
