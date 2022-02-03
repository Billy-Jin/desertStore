import React from "react";

const ProductItem = ({ testImg }) => {
  const { id, title, image, desc } = testImg;
  return (
    <li className='product-item-li'>
      <div className='product-item-div'>
        <img src={image} alt={title} />
        <strong>{title}</strong>
        <span>{desc}</span>
      </div>
    </li>
  );
};

export default ProductItem;
