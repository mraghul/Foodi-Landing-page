import React from 'react';
import './HottestBiryani.css';
import HottestBiryaniImg from '../foodie-img/hottest-briyani.png';

const HottestBiryani = () => {
  return (
    <div className="hottestBiryani-container">
        <div className="hottestBiryani-leftSide">
            <h1>Always <br />
             <span>the Hottest <br />
            Pizza</span></h1>
            <p>
                Curabitur imperdiet varius lacus, id placerat purus vulputate non.<br /> 
                Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, <br />gravida vel porttitor et, 
                pretium ac sapien.
            </p>
            <button className="btn-secondary">Get Birayani</button>
        </div>
        <div className="hottestBiryani-rightSide">
            <img src={HottestBiryaniImg} alt='' />
        </div>
    </div>
  )
}

export default HottestBiryani
