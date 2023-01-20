import React from "react";
import { useNavigate } from "react-router-dom";
import Plat from "../assets/MENU/plat/1.webp";
import Pizza from "../assets/MENU/pizza/1.webp";
import Cake from "../assets/MENU/desert/cake1.webp";
import "../styles/category.css";
const categories = [
  {
    title: "Plat",
    img: Plat,
  },
  {
    title: "Dessert",
    img: Cake,
  },

  {
    title: "Pizza",
    img: Pizza,
  },
];

const FoodCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="container-category">
      <div className="content-category">
        {categories.map((category) => (
          <div
            className="item"
            key={category.title}
            onClick={() => navigate(`detail-category/${category.title}`)}
          >
            <div className="item-des-container">
              <h1 className="item-des">{category.title}</h1>
            </div>
            <div className="item-img-container">
              <img src={category.img} alt="logo" className="item-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategories;
