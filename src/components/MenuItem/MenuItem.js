import React from "react";
import ModelViewer from "../../models/ModelViewer";
import classNames from "../../utils/classNames";
import "./menuItem.css";

const MenuItem = ({
  name,
  price,
  description,
  className,
  img,
  model,
  onClick,
  open,
}) => {
  return (
    <div className={classNames(`menu-item ${className ? className : ""}`)}>
      <div onClick={() => onClick(name)} className="menu-content">
        <span className="name-product">{name}</span>
        <span className="name-product">{price}</span>
      </div>
      <div className="menu-ingredients">{description}</div>

      <div
        style={{
          width: "100%",
          height: "85%",
        }}
      >
        <ModelViewer modelPath={model} poster={img} />
      </div>
    </div>
  );
};

export default MenuItem;
