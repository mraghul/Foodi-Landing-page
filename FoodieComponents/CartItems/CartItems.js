import React, { useContext } from 'react';
import './CartItems.css';
import {ProductContext} from '../../Context/ProductContext';
import Close from '../foodie-img/close.png';

const CartItems = () => {

    const {getTotalCartAmount,all_product,cartItems,removeFromCart,} = useContext(ProductContext)
 
    return (

    <div className='cartItem-list'>
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div> 
        <hr />
        {all_product.map((e)=>{ 
            if(cartItems[e.id]>0 )
            {
                return <div className='cartitems-format cartitems-format-main'>
                    <img src={e.image} alt='' className='cart-icon-product' />
                    <p>{e.name}</p> 
                    <p>$ {e.price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>$ {e.price*cartItems[e.id] }</p>
                    <img className='cart-icon-remove' src={Close} alt=' ' onClick={()=>{removeFromCart()}} />
                </div>
            }
            return null;
        })}
        <div className='cartitems-down'>
            <div className='cartitem-total'>
                <h1>Cart Totals</h1>
                <div>
                    <div className='cartItem-total-items' style={{borderBottom: '2px solid #eee'}}>
                        <p>Subtotal</p>
                        <p>$ {getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='cartItem-total-items' style={{borderBottom: '2px solid #eee'}}>
                        <p>Delivery Fee</p>
                        <p>Free</p>
                    </div>
                    <div className='cartItem-total-items'>
                        <h3>Total</h3>
                        <h3>$ {getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed to checkout</button>
            </div>
            <div className='cartitem-promocode'>
                <p>If you have promo code, Enter it here</p>
                <div className='cartitem-promocode-box'>
                    <input type='text' placeholder='Promo Code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems
