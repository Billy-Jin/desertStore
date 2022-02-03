import React, { useEffect, useState } from "react";
import MainList from "./MainList/MainList";
import ProductList from "./ProductList/ProductList";
import "./Main.css";

const imgList = [
  {
    id: 1,
    title: "효정1",
    image: "./images/hyojung/hyojung1.jpg",
    desc: "효정1 이미지의 세부설명입니다.",
  },
  {
    id: 2,
    title: "효정2",
    image: "./images/hyojung/hyojung2.jpg",
    desc: "효정2 이미지의 세부설명입니다.",
  },
  {
    id: 3,
    title: "효정3",
    image: "./images/hyojung/hyojung3.jpg",
    desc: "효정3 이미지의 세부설명입니다.",
  },
  {
    id: 4,
    title: "효정4",
    image: "./images/hyojung/hyojung4.jpg",
    desc: "효정4 이미지의 세부설명입니다.",
  },
  {
    id: 5,
    title: "효정5",
    image: "./images/hyojung/hyojung5.jpg",
    desc: "효정5 이미지의 세부설명입니다.",
  },
  {
    id: 6,
    title: "효정6",
    image: "./images/hyojung/hyojung6.jpg",
    desc: "효정6 이미지의 세부설명입니다.",
  },
  {
    id: 7,
    title: "효정1",
    image: "./images/hyojung/hyojung1.jpg",
    desc: "효정1 이미지의 세부설명입니다.",
  },
  {
    id: 8,
    title: "효정2",
    image: "./images/hyojung/hyojung2.jpg",
    desc: "효정2 이미지의 세부설명입니다.",
  },
  {
    id: 9,
    title: "효정3",
    image: "./images/hyojung/hyojung3.jpg",
    desc: "효정3 이미지의 세부설명입니다.",
  },
  {
    id: 10,
    title: "효정4",
    image: "./images/hyojung/hyojung4.jpg",
    desc: "효정4 이미지의 세부설명입니다.",
  },
  {
    id: 11,
    title: "효정5",
    image: "./images/hyojung/hyojung5.jpg",
    desc: "효정5 이미지의 세부설명입니다.",
  },
  {
    id: 12,
    title: "효정6",
    image: "./images/hyojung/hyojung6.jpg",
    desc: "효정6 이미지의 세부설명입니다.",
  },
];

const Main = () => {
  const [testImgs, setTestImgs] = useState(imgList);
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
      <MainList
        testImgs={testImgs}
        trans={trans}
        stopTrans={stopTrans}
        runTrans={runTrans}
      />
      <ProductList testImgs={testImgs} />
    </div>
  );
};

export default Main;
