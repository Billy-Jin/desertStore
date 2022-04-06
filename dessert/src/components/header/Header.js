import React, { useState } from "react";
import MenuList from "./MenuList";
import "./Header.css";
import { Link } from "react-router-dom";

const dummy_list = [
  {
    subject: "음료",
    eng: "drink",
    details: ["기본마카롱", "뚱카롱", "꼬끄", "가르니뛰르"],
  },
  {
    subject: "케이크",
    eng: "cake",
    details: ["기본마카롱", "뚱카롱", "꼬끄", "가르니뛰르"],
  },
  {
    subject: "마카롱",
    eng: "macaron",
    details: ["기본마카롱", "뚱카롱", "꼬끄", "가르니뛰르"],
  },
  {
    subject: "샐러드",
    eng: "salad",
    details: ["기본마카롱", "뚱카롱", "꼬끄", "가르니뛰르"],
  },
  {
    subject: "요거트볼",
    eng: "yogurt",
    details: ["기본마카롱", "뚱카롱", "꼬끄", "가르니뛰르"],
  },
  {
    subject: "쿠키",
    eng: "cookie",
    details: ["기본마카롱", "뚱카롱", "꼬끄", "가르니뛰르"],
  },
];

const Header = ({ categoryData, allData }) => {
  const [menuList, setMenuList] = useState(dummy_list);
  return (
    <div className='header'>
      <div className='logo' onClick={() => allData()}>
        <Link to='/' className='linkForm'>
          <span>로고</span>
          <span>브랜드명</span>
        </Link>
      </div>
      <div className='menuList'>
        <ul>
          {menuList.map((item, index) => (
            <MenuList key={index} menu={item} categoryData={categoryData} />
          ))}
        </ul>
      </div>
      <div className='login'>
        <Link to='/loginForm' className='linkForm'>
          <span>로그인</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
