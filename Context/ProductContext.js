import React, { createContext, useState }  from "react";
import all_product from '../FoodieComponents/foodie-img/all_products';

export const ProductContext  = createContext(null);

const getDefaultCart = () =>{
    let cart = {};

    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}

const ProductContextProvider = (props) =>{

    const [cartItems , setCartItems] = useState(getDefaultCart());


    const getTotalCartAmount =() =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if (cartItems[item]>0)
            {
                let itemInfo = all_product.find((Product)=>Product.id===Number(item))
                totalAmount += itemInfo.price * cartItems[item];
            }
            return totalAmount;
        }
    }


    const getTotalItems =() =>{
        let totalItems = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItems += cartItems[item]
            }
        }
        return totalItems;
    }
     
    

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev , [itemId] : prev[itemId]+1}));
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev , [itemId] : prev[itemId]-1}))
    }

    
   
    const contextValue ={getTotalItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return(
        <ProductContext.Provider value={contextValue} >
            {props.children}
        </ProductContext.Provider>
    )
}


export default ProductContextProvider;