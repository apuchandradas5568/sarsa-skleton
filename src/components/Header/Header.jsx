import React, { useState } from "react";
import "./Header.css";
import { IoMenu } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  const cart = () => {
    let path = `cart`;
    navigate(path);
  };
  return (
    <header className="header">
      <div className="header-left">
        <div className="menu-icon icon">
          <IoMenu />
        </div>
        <div className="search-icon icon">
          <BsSearch />
        </div>
      </div>
      <div className="header-section">
        <div className="logo">
          <Link to="/">SARSACHIC</Link></div>
      </div>

      <div className="header-right">
        <div className="heart-icon icon">
        <Link to={'/wishlist'}>  <FaRegHeart /></Link>
          
        </div>
        <div onClick={cart} className="cart-icon icon">
          <FiShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
