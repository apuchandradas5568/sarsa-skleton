import React from "react";
import "./ShopSections.css";
import women from "../../images/women.jpg";
import men from "../../images/men.jpg";
import oversized from "../../images/oversized.jpg";
import { useNavigate } from "react-router-dom";

const ShopSections = () => {
  let navigate = useNavigate();
  const handleClick = () => {

    let path = `/mens-section`;
    navigate(path);
  }

  const handleWomen = () => {

    let path = `/womens-section`;
    navigate(path);
  }
  return (
    <div className="shop-sections">
      <div onClick={handleWomen} className="section womens">
        <span className="label">SHOP WOMENS</span>
        <img src={women} alt="Shop Womens" />
      </div>
      <div onClick={handleClick} className="section mens">
        <span className="label">SHOP MENS</span>
        <img src={men} alt="Shop Mens" />
      </div>
      <div onClick={handleClick} className="section oversized">
        <span className="label">SHOP OVERSIZED</span>
        <img src={oversized} alt="Shop Oversized" />
      </div>
    </div>
  );
};

export default ShopSections;
