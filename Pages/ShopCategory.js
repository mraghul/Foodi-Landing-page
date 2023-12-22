import React, { useContext } from 'react';
import './ShopCategory.css';
import { ProductContext } from '../Context/ProductContext';
import Items from '../FoodieComponents/Items/Items';
import DropDown from '../FoodieComponents/foodie-img/arrow-down.png'

const ShopCategory = (props) => {

    const {all_product} = useContext(ProductContext);
  return (
    <div className='shop-category'>
        <div className='shop-category-img'> 
            <img src={props.banner} alt=''/>
            <div className='shop-category-indexSort'>
                <p>
                    <span>Showing 1-12</span> out of 36 products 
                </p>
                <div className='shop-categorySort'>
                    Sort by <img src={DropDown} alt=''/>
                </div>
            </div>
        </div>            
        <div className='shop-category-products'>
            {all_product.map((item , i) =>{
                if(props.category === item.category){
                    return <Items  key={i} id={item.id} name={item.name} category={item.category} image={item.image} description={item.description} price={item.price}/>
                }else{
                    return null;
                }
            })}
        </div>
        <div className='shop-category-btn'>
            <button className='btn-addCart'>Explore More</button>
        </div>
    </div>
  )
}

export default ShopCategory
