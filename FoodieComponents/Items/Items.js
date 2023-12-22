import React from 'react';
import './Items.css';
import { Link } from 'react-router-dom';


const Items = (props) => {

 

  return (
    <div className="popular-container">

      <div className="popular-content">
        <div className="item">
            <Link to={`/products/${props.id}`}><img src={props.image} alt='' onClick={window.scroll(0,0)} /></Link>
            <h4>{props.name}</h4>
            <p>{props.description} </p>
            <div style={{fontSize: 21,fontWeight: 700,marginBottom:15}}>$ {props.price}</div>
            <Link to={`/products/${props.id}`}><button className="btn-addCart">Add to Cart</button></Link>
            
        </div>
      </div>
    </div>
    
  )
}

export default Items
