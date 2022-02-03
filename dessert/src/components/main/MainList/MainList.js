import React from "react";
import MainItem from "./MainItem";

const MainList = ({ testImgs, trans, stopTrans, runTrans }) => {
  return (
    <ul className='main-list'>
      <div className='main-visible'>
        <div
          className='main-behind'
          onMouseEnter={stopTrans}
          onMouseLeave={runTrans}
        >
          {testImgs.map((item) => (
            <MainItem testImg={item} key={item.id} trans={trans} />
          ))}
        </div>
      </div>
    </ul>
  );
};

export default MainList;
