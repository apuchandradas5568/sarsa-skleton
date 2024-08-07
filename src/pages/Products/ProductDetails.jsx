<<<<<<< HEAD
import React, { useState } from 'react';
import './ProductDetails.css';
import tshirtFront from '../../images/tshirt1.png';  // Update the path to your image
import tshirtBack from '../../images/tshirt3.png';    // Update the path to your image
import demonLogo from '../../images/tshirt2.png';      // Update the path to your image
import demonArt from '../../images/tshirt4.png';        // Update the path to your image
import { FaPlus, FaRegHeart } from 'react-icons/fa';
import Poster from '../Hero/Poster';
import TestimonialSlider from '../Review/TestimonialSlider.jsx'

const ProductDetails = () => {
  const [size, setSize] = useState('XS');
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="product-details">


      <div className="image-gallery">
        <img src={tshirtFront} alt="T-shirt front" className="product-image" />
        <img src={demonLogo} alt="Demon logo" className="product-image" />
        <img src={tshirtBack} alt="T-shirt back" className="product-image" />
        <img src={demonArt} alt="Demon art" className="product-image" />
      </div>
      <div className="product-info">
        <div className='prod'>
          <div className='prod-name'>
            <h1 className="product-title">DEMON SLAYER</h1>
            <p className="product-fit">OVERSIZED FIT</p>
            <p className="product-rating">★★★★☆</p>
          </div>
          <div className="product-price">
            <span className="original-price">RS 1099.00</span>
            <span className="discounted-price">RS 699.00</span>
          </div>
        </div>


        <p>CHOOSE SIZE: {size}</p>
        <div className="size-selector">

          <div className="sizes" >
            {sizes.map(s => (
              <button
                key={s}
                className={`size-button ${s === size ? 'selected' : ''}`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <button className="add-to-cart">ADD TO CART - RS 699</button>
        <div className='butto'>
          <button className='size-chart'>Size Chart</button>
          <button className="add-to-wishlist"> <FaRegHeart className='heart' />ADD TO WISHLIST</button>
        </div>




        <div className="product-details-text">
          <h2>PRODUCT DETAILS</h2>
          <p>Composition: 100% cotton</p>
          <p>GSM: 220</p>
          <p>Colour: White</p>
          <p>Country of production: India</p>
          <p>Wash care: Machine wash cold with similar colours. Only non-chlorine. Tumble dry low. Warm iron if needed.</p>
          <p>Sizing: Garment measurement in inches</p>
          <p>Estimated order processing time: 48 hours</p>
        </div>
        <div className="additional-info">
          <h2>DESCRIPTION <FaPlus className='plus-icon' /></h2>
          <h2>SHIPPING AND RETURN <FaPlus className='plus-icon' /></h2>
        </div>
      </div>
      <div className="slider-new">
        <TestimonialSlider />
      </div>

=======
import React, { useContext, useEffect, useState } from "react";
import "./ProductDetails.css";
import tshirtFront from "../../images/tshirt1.png"; // Update the path to your image
import tshirtBack from "../../images/tshirt3.png"; // Update the path to your image
import demonLogo from "../../images/tshirt2.png"; // Update the path to your image
import demonArt from "../../images/tshirt4.png"; // Update the path to your image
import { FaPlus, FaRegHeart } from "react-icons/fa";
import Poster from "../Hero/Poster";
import TestimonialSlider from "../Review/TestimonialSlider.jsx";
import { useLocation } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxios.jsx";
import { WebContext } from "../../providers/WebProvider.jsx";

const ProductDetails = () => {
  const [size, setSize] = useState("XS");
  const sizes = ["XS", "S", "M", "L", "XL"];

  const axios = useAxiosPublic();

  const location = useLocation();

  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("id");

    const fetchById = async () => {
      await axios(`/users/get-product/${tabFromUrl}`).then((res) => {
        console.log(res);
        setPageData(res.data.data);
      });
    };

    fetchById();
  }, [location.search]);


  const {user} = useContext(WebContext)


  const addtoFavorite = async (id) => {
      const data = {
        productId : id,
      }
      await axios.post('/users/add-favorite', {data},{withCredentials:true})
      .then((res) => {
        console.log(res);
      })
  }
  const addtoCart = async (id) => {
    const data = {
      productId : id,
      quantity: 1, 
      size
    }
    // console.log({data});
    await axios.post('/users/add-cart', {data},{withCredentials:true})
    .then((res) => {
      console.log(res.data);
    })
  
  }
  return (
    <div className="product-details">
      {pageData && (
        <>
          <div className="image-gallery">
            {pageData.images.map((img) => {
              return (
                <>
                  <img
                    src={img}
                    alt="T-shirt front"
                    className="product-image"
                  />
                  <img
                    src={img}
                    alt="T-shirt front"
                    className="product-image"
                  />
                </>
              );
            })}

          </div>
          <div className="product-info">
            <div className="prod">
              <div className="prod-name">
                <h1 className="product-title">{pageData.name}</h1>
                <p className="product-fit">{pageData.category}</p>
                <p className="product-rating">★★★★☆</p>
              </div>
              <div className="product-price">
                <span className="original-price">RS {pageData.price}</span>
                <span className="discounted-price">RS 699.00</span>
              </div>
            </div>

            <p>CHOOSE SIZE: {size}</p>
            <div className="size-selector">
              <div className="sizes">
                {sizes.map((s) => (
                  <button
                    key={s}
                    className={`size-button ${s === size ? "selected" : ""}`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={()=> addtoCart(pageData._id)} className="add-to-cart">ADD TO CART - RS 699</button>
            <div className="butto">
              <button className="size-chart">Size Chart</button>
              <button onClick={()=> addtoFavorite(pageData._id)} className="add-to-wishlist">
                {" "}
                <FaRegHeart className="heart" />
                ADD TO WISHLIST
              </button>
            </div>

            <div className="product-details-text">
              {pageData.description}
            </div>
            <div className="additional-info">
              <h2>
                DESCRIPTION <FaPlus className="plus-icon" />
              </h2>
              <h2>
                SHIPPING AND RETURN <FaPlus className="plus-icon" />
              </h2>
            </div>
          </div>
          <div className="slider-new">
            <TestimonialSlider />
          </div>
        </>
      )}
>>>>>>> origin/main
    </div>
  );
};

export default ProductDetails;
