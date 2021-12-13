import React, { useState } from "react";

const Menu = ({ menuIcon, menuTitle }) => {
  const [selected, setSelected] = useState(false);
  console.log("selected", selected);

  const activeMenu = () => {
    //alert("activemenu");
    setSelected(!selected);
  };

  return (
    <li onClick={activeMenu}>
      <div className={selected && "selected"}>
        <span className={`fas ${menuIcon}`} aria-hidden="true"></span>
        <span className="nav-item-text">{menuTitle}</span>
      </div>
    </li>
  );
};

export default Menu;
