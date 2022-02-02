import React from "react";
import MainItem from "./MainItem";

const MainList = ({ testImgs }) => {
  return (
    <ul className='main-list'>
      <div className='main-behind'>
        {testImgs.map((item) => (
          <MainItem testImg={item} key={item.id} />
        ))}
      </div>
    </ul>
  );
};

export default MainList;
