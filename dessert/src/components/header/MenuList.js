import React from "react";
import { Link } from "react-router-dom";

const MenuList = ({ menu, categoryData }) => {
  const { subject, eng, detail } = menu;

  return <li onClick={() => categoryData(eng)}>{subject}</li>;
};

export default MenuList;
