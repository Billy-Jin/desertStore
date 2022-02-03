import React from "react";

const MainItem = ({ testImg, trans, stopTrans }) => {
  const { id, title, image, desc } = testImg;

  return (
    <li
      className='main-items'
      style={{ transform: `translate(${trans}px, 0)` }}
    >
      <div className='main-item'>
        <img src={image} alt={title} />
        <strong>{title}</strong>
      </div>
    </li>
  );
};

export default MainItem;
