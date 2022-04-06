import React, { useEffect, useState } from "react";
import MainList from "./MainList/MainList";
import ProductList from "./ProductList/ProductList";
import "./Main.css";
import { Route } from "react-router-dom";

const Main = ({ testImgs, mainImgs, categoryImgs }) => {
  const [trans, setTrans] = useState(0);
  const [transMove, setTransMove] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (transMove) {
        setTrans((count) => count - 1);
        if (trans < -1930) {
          setTrans(0);
        }
      }
    }, 30);
    return () => {
      clearTimeout(timer);
    };
  });

  const stopTrans = () => {
    setTransMove(false);
  };
  const runTrans = () => {
    setTransMove(true);
  };

  return (
    <div className='main'>
      <h1>추천상품</h1>
      <MainList
        testImgs={testImgs}
        trans={trans}
        stopTrans={stopTrans}
        runTrans={runTrans}
      />
      <Route path='/' render={() => <ProductList mainImgs={mainImgs} />} />
    </div>
  );
};

export default Main;
