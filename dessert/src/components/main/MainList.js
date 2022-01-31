import React from "react";
import MainItem from "./MainItem";

const MainList = ({ testImgs }) => {
  return (
    <ul className='main-list'>
      {testImgs.map((item) => (
        <MainItem testImg={item} key={item.id} />
      ))}
    </ul>
  );
};

export default MainList;
