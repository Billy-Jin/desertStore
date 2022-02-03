import React from "react";

const MenuList = ({ menu }) => {
  const { subject, detail } = menu;
  return <li>{subject}</li>;
};

export default MenuList;
