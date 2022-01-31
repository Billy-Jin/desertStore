import React, { useEffect, useState } from "react";
import MainList from "./MainList";
import ProductList from "./ProductList";
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
    title: "효정7",
    image: "./images/hyojung/hyojung7.jpg",
    desc: "효정7 이미지의 세부설명입니다.",
  },
];

const slide = () => {
  const slideWrapper = document.querySelector(".container");
  let slides = document.querySelectorAll(".item");
  const totalSlides = slides.length; // item의 갯수

  const sliderWidth = slideWrapper.clientWidth; // container의 width
  let slideIndex = 0;
  let slider = document.querySelector(".slider");

  slider.style.width = sliderWidth * totalSlides + "px";

  showSlides();

  const showSlides = () => {
    for (let i = 0; i < slides.length; i++) {
      slider.style.left = -(sliderWidth * slideIndex) + "px";
    }
    slideIndex++;
    if (slideIndex === totalSlides) {
      slideIndex = 0;
    }
    setTimeout(showSlides, 2000);
  };
};

const Main = () => {
  const [testImgs, setTestImgs] = useState(imgList);
  const [imgBehind, setimgBehind] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      behind();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const behind = () => {
    setTestImgs(imgList.filter((item) => item.id < 5));
    // for(let i=0; i<imgList.length;i++){

    // }
  };
  return (
    <div className='main'>
      <MainList testImgs={testImgs} />
      <ProductList />
    </div>
  );
};

export default Main;
