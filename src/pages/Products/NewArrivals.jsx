import React, { useEffect } from 'react';
import './NewArrivals.css';
import img1 from '../../images/shiny-dress.jpg'
import img2 from '../../images/shiny-dress.jpg'
import img3 from '../../images/full-sweater.png'
import img4 from '../../images/white-dress.png'
import img5 from '../../images/colorful-dress.png'
import img6 from '../../images/white-shirt.png'
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: 'Shiny Dress',
    brand: 'Al Karam',
    price: 95.50,
    reviews: '4.1k',
    status: 'Almost Sold Out',
    imgSrc: img1,
    rating: 5,
  },
  {
    name: 'Long Dress',
    brand: 'Al Karam',
    price: 95.50,
    reviews: '4.1k',
    status: 'Almost Sold Out',
    imgSrc: img2,
    rating: 5,
  },
  {
    name: 'Full Sweater',
    brand: 'Al Karam',
    price: 95.50,
    reviews: '4.1k',
    status: 'Almost Sold Out',
    imgSrc: img3,
    rating: 5,
  },
  {
    name: 'White Dress',
    brand: 'Al Karam',
    price: 95.50,
    reviews: '4.1k',
    status: 'Almost Sold Out',
    imgSrc: img4,
    rating: 5,
  },
  {
    name: 'Colorful Dress',
    brand: 'Al Karam',
    price: 95.50,
    reviews: '4.1k',
    status: 'Almost Sold Out',
    imgSrc: img5,
    rating: 5,
  },
  {
    name: 'White Shirt',
    brand: 'Al Karam',
    price: 95.50,
    reviews: '4.1k',
    status: 'Almost Sold Out',
    imgSrc: img6,
    rating: 5,
  },
];

const NewArrivals = () => {
  let navigate = useNavigate();
  const handleClick = () => {

    let productname = document.querySelector('#name').innerHTML;
    let path = `/product-section`;
    navigate(path);
  }
  return (
    <div className="new-arrivals">
      <h1>New Arrivals</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
        <br /> Scelerisque duis ultrices sollicitudin</p>
      <div className="tabs">
        <button>Men's Fashion</button>
        <button >Women's Fashion</button>
        <button>Women Accessories</button>
        <button>Men Accessories</button>
        <button>Discount Deals</button>
      </div>
      <div className="products">
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
      </div>
      <button className="view-more">View More</button>
    </div>
  );
};

export default NewArrivals;
