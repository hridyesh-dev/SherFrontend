import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);
  console.log(products);

  const data = products.map((product, index) => (
    <h3 key={index}>{product.title}</h3>
  ));

  return( 
    products.length > 0 ? <div>
      {data}
    </div> : "Loading .... "
  )
};

export default Products;