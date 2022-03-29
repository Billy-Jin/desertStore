import React from "react";
import { Link } from "react-router-dom";

const MenuList = ({ menu, categoryData }) => {
  const { subject, eng, detail } = menu;
  const categorySetting = () => {
    console.log(eng);
    categoryData(eng);
  };

  return (
    <li onClick={categorySetting}>
      <Link to={"/main/" + eng} className="linkForm">
        {subject}
      </Link>
    </li>
  );
};

export default MenuList;
