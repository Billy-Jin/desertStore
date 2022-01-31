import React from "react";

const MainItem = ({ testImg }) => {
  const { id, title, image, desc } = testImg;
  return (
    <li className='main-items'>
      <div className='main-item'>
        <img src={image} alt={title} />
        <strong>{title}</strong>
      </div>
    </li>
  );
};

export default MainItem;
