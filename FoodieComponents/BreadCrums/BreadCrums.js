import React from 'react';
import './BreadCrums.css';
import DropDown from '../foodie-img/arrow-down.png';

const BreadCrums = (props) => {

    const {Products} = props;
  return (
    <div className='breadCrum'>
      <span>
          HOME <img src={DropDown} alt='' /> SHOP  <img src={DropDown} alt='' /> {Products.category}  <img src={DropDown} alt='' />  {Products.name}
      </span>
    </div>
  )
}

export default BreadCrums
