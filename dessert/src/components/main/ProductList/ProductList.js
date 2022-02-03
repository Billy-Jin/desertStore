import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ testImgs }) => {
  return (
    <ul className='product-list'>
      <div className='product-inner'>
        {testImgs.map((item) => (
          <ProductItem key={item.id} testImg={item} />
        ))}
      </div>
    </ul>
  );
};

export default ProductList;
