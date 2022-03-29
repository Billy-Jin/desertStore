import React, { useEffect, useState } from "react";
import MainList from "./MainList/MainList";
import ProductList from "./ProductList/ProductList";
import "./Main.css";
import MacaronList from "./ProductList/MacaronList";
import CookieList from "./ProductList/CookieList";
import SaladList from "./ProductList/SaladList";
import DrinkList from "./ProductList/DrinkList";
import CakeList from "./ProductList/CakeList";
import YogurtList from "./ProductList/YogurtList";
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
    <div className="main">
      <h1>추천상품</h1>
      <MainList
        testImgs={testImgs}
        trans={trans}
        stopTrans={stopTrans}
        runTrans={runTrans}
      />
      <Route path="/" render={() => <ProductList mainImgs={mainImgs} />} />
      <Route
        exact
        path="/main/macaron"
        render={() => <MacaronList mainImgs={categoryImgs} />}
      />
      <Route
        exact
        path="/main/yogurt"
        render={() => <YogurtList mainImgs={categoryImgs} />}
      />
      <Route
        exact
        path="/main/salad"
        render={() => <SaladList mainImgs={categoryImgs} />}
      />
      <Route
        exact
        path="/main/cake"
        render={() => <CakeList mainImgs={categoryImgs} />}
      />
      <Route
        exact
        path="/main/cookie"
        render={() => <CookieList mainImgs={categoryImgs} />}
      />
      <Route
        exact
        path="/main/drink"
        render={() => <DrinkList mainImgs={categoryImgs} />}
      />
    </div>
  );
};

export default Main;
