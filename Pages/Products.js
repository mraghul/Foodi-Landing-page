import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { useParams } from 'react-router-dom';
import BreadCrums from '../FoodieComponents/BreadCrums/BreadCrums';
import ProductDisplay from '../FoodieComponents/ProductDisplay/ProductDisplay';
import RelatedProducts from '../FoodieComponents/RelatedProducts/RelatedProducts';

const Products = () => {
    const { all_product } = useContext(ProductContext);

    const {productId} = useParams();

    const Product = all_product.find((e) => e.id === Number(productId));


  return (  
    <div>
        <BreadCrums  Products={Product}/>
        <ProductDisplay Products={Product} />
        <RelatedProducts />
    </div>
  )
}

export default Products
