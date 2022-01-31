import React, { useState } from "react";
import MenuList from "./MenuList";
import "./Header.css";

const dummy_list = [
  {
    subject: "마카롱",
    details: ["기본마카롱", "뚱카롱", "꼬끄", "가르니뛰르"],
  },
  {
    subject: "빵",
    details: ["기본마카롱", "뚱카롱", "꼬끄", "가르니뛰르"],
  },
  {
    subject: "샐러드",
    details: ["기본마카롱", "뚱카롱", "꼬끄", "가르니뛰르"],
  },
  {
    subject: "케이크",
    details: ["기본마카롱", "뚱카롱", "꼬끄", "가르니뛰르"],
  },
  {
    subject: "쿠키",
    details: ["기본마카롱", "뚱카롱", "꼬끄", "가르니뛰르"],
  },
  {
    subject: "커피",
    details: ["기본마카롱", "뚱카롱", "꼬끄", "가르니뛰르"],
  },
];

const Header = () => {
  const [menuList, setMenuList] = useState(dummy_list);
  return (
    <div className='header'>
      <div className='logo'>
        <span>로고</span>
        <span>브랜드명</span>
      </div>
      <div className='menuList'>
        <ul>
          {menuList.map((item, index) => (
            <MenuList key={index} menu={item} />
          ))}
        </ul>
      </div>
      <div className='login'>
        <span>로그인</span>
      </div>
    </div>
  );
};

export default Header;
