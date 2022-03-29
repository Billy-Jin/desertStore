import React from "react";
import ProductItem from "./ProductItem";

const CakeList = ({ mainImgs }) => {
  return (
    <ul className="product-list">
      <div className="product-inner">
        {mainImgs.map((item) => (
          <ProductItem key={item.id} mainImg={item} />
        ))}
      </div>
    </ul>
  );
};

export default CakeList;
