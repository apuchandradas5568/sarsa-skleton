import React, { useEffect, useState } from "react";
import "./NewArrivals.css";
import img1 from "../../images/shiny-dress.jpg";
import img2 from "../../images/shiny-dress.jpg";
import img3 from "../../images/full-sweater.png";
import img4 from "../../images/white-dress.png";
import img5 from "../../images/colorful-dress.png";
import img6 from "../../images/white-shirt.png";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxios";

const products = [
  {
    name: "Shiny Dress",
    brand: "Al Karam",
    price: 95.5,
    reviews: "4.1k",
    status: "Almost Sold Out",
    imgSrc: img1,
    rating: 5,
  },
  {
    name: "Long Dress",
    brand: "Al Karam",
    price: 95.5,
    reviews: "4.1k",
    status: "Almost Sold Out",
    imgSrc: img2,
    rating: 5,
  },
  {
    name: "Full Sweater",
    brand: "Al Karam",
    price: 95.5,
    reviews: "4.1k",
    status: "Almost Sold Out",
    imgSrc: img3,
    rating: 5,
  },
  {
    name: "White Dress",
    brand: "Al Karam",
    price: 95.5,
    reviews: "4.1k",
    status: "Almost Sold Out",
    imgSrc: img4,
    rating: 5,
  },
  {
    name: "Colorful Dress",
    brand: "Al Karam",
    price: 95.5,
    reviews: "4.1k",
    status: "Almost Sold Out",
    imgSrc: img5,
    rating: 5,
  },
  {
    name: "White Shirt",
    brand: "Al Karam",
    price: 95.5,
    reviews: "4.1k",
    status: "Almost Sold Out",
    imgSrc: img6,
    rating: 5,
  },
];

const NewArrivals = () => {
  let navigate = useNavigate();

  const axios = useAxiosPublic();

  const [featuredProducts, setFeaturedProducts] = useState([]);

  const featuredProductsFetch = async () => {
    await axios("/users/featured-products").then((res) => {
      console.log(res);
      setFeaturedProducts(res.data);
    });
  };

  useEffect(() => {
    featuredProductsFetch();
  }, []);


  return (
    <div className="new-arrivals">
      <h1>New Arrivals</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultrices sollicitudin aliquam sem.
        <br /> Scelerisque duis ultrices sollicitudin
      </p>
      <div className="tabs">
        <button>Men's Fashion</button>
        <button>Women's Fashion</button>
        <button>Women Accessories</button>
        <button>Men Accessories</button>
        <button>Discount Deals</button>
      </div>
      {/* <div className="products">
        {products.map((product, index) => (
          <div onClick={handleClick} className="product-card" key={index}>
            <img src={product.imgSrc} alt={product.name} />
            <div className="product-info">
              <h2 id='name'>{product.name}</h2>
              <p>{product.brand}</p>
              <div className="rating">
                {'⭐'.repeat(product.rating)}
              </div>
              <p>{product.reviews} Customer Reviews</p>

              <h3>${product.price.toFixed(2)}</h3>
              <p className="status">{product.status}</p>

            </div>
          </div>
        ))}
      </div> */}
      <div className="products">
        {featuredProducts?.map((product, index) => (
          <Link to={`product-section?id=${product._id}`}>
            <div  className="product-card" key={index}>
              <img src={product.images[0]} alt={product.name} />
              <div className="product-info">
                <h2 id="name">{product.name}</h2>
                <p>{product.category}</p>
                {/* <div className="rating">
                {'⭐'.repeat(product.rating)}
              </div> */}
                <p>{product.reviews} Customer Reviews</p>

                <h3>${product.price.toFixed(2)}</h3>
                {/* <p className="status">{product.status}</p> */}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <button className="view-more">View More</button>
    </div>
  );
};

export default NewArrivals;
