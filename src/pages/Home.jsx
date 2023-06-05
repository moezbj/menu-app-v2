import React, { useState } from "react";
import MenuItem from "../components/MenuItem/MenuItem";
import { menu } from "../models/data";
import '../styles/detail.css'
const DetailCategory = () => {
  const [open, setOpen] = useState(false);
  const [itemMenu, setItemMenu] = useState(menu);

  const onClickItem = (e) => {
    setItemMenu(e);
    setOpen(!open);
  };
  
  return (
    <div className="details-container">
      <div className="menu-container">
        {menu.map((e) => (
          <MenuItem
            key={e.name}
            onClick={onClickItem}
            name={e.name}
            description={e.description}
            img={e.img}
            modelPath={e.modelPath}
            secondModel={e.secondModel}
            open={open && e.name === itemMenu}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailCategory;
