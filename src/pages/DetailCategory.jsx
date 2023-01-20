import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "../components/MenuItem/MenuItem";
import { menu } from "../models/data";
import "../styles/detail.css";
const DetailCategory = () => {
  const location = useLocation();
  const str = location.pathname.slice(location.pathname.lastIndexOf("/") + 1);
  const data = menu.filter((el) => el.category === str);
  console.log(data);
  const [open, setOpen] = useState(false);
  const [itemMenu, setItemMenu] = useState(menu);

  const onClickItem = (e) => {
    setItemMenu(e);
    setOpen(!open);
  };
  return (
    <div className="details-container">
      <div className="menu-container">
        {data.map((e) => (
          <MenuItem
            key={e.name}
            onClick={onClickItem}
            name={e.name}
            price={e.price}
            description={e.description}
            img={e.img}
            model={e.model}
            modelIos={e.modelIos}
            className={open && e.name === itemMenu ? "open-item" : ""}
            open={open && e.name === itemMenu}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailCategory;
