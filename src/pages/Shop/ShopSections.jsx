import React from "react";
import "./ShopSections.css";
import women from "../../images/women.jpg";
import men from "../../images/men.jpg";
import oversized from "../../images/oversized.jpg";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> origin/main

const ShopSections = () => {
  let navigate = useNavigate();
  const handleClick = () => {

<<<<<<< HEAD
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
=======
    let path = `/mens-section?tab=mens-section`;
    navigate(path);
  }


  return (
    <div className="shop-sections">

      <Link to={"/mens-section?tab=men's fashion"} className="section womens">
        <span className="label">SHOP WOMENS</span>
        <img src={women} alt="Shop Womens" />
      </Link>

      <Link to={"/womens-section?tab=women's fashion"} className="section mens">
        <span className="label">SHOP MENS</span>
        <img src={men} alt="Shop Mens" />
      </Link>
>>>>>>> origin/main
      <div onClick={handleClick} className="section oversized">
        <span className="label">SHOP OVERSIZED</span>
        <img src={oversized} alt="Shop Oversized" />
      </div>
    </div>
  );
};

export default ShopSections;
