import React from 'react';
import './Wishlist.css';
import img1 from '../../images/leftarrow.jpg'
import img2 from '../../images/ts1.png'
import img3 from '../../images/remove.jpg'
import img4 from '../../images/cart.jpg'
import img5 from '../../images/ts2.png'
import img6 from '../../images/ts3.jpg'
import img7 from '../../images/ts4.jpg'
import img8 from '../../images/ts5.jpg'
import img9 from '../../images/ts6.jpg'
import img10 from '../../images/ts8.jpg'
import img11 from '../../images/ts9.jpg'

const Wishlist = () => {
    
  return (
    <div>
      <nav>
        <button>
          <img src={img1} alt="" className="leftarrow" />
        </button>
        <h1 className='wish'>WISHLIST</h1>
        <p className="totalitems">16 items</p>
      </nav>
      <div className="row1">
        <div className="box">
          <img src={img2} alt="Error" className="ts1" />
          <button>
            <img src={img3} alt="" className="wish" />
          </button>
          <button className="addtocart">
            ADD TO CART
            <img src={img4} alt="" className="cart" />
          </button>
        </div>
        <div className="box">
          <img src={img5} alt="" className="ts2" />
          <button>
            <img src={img3} alt="" className="wish" />
          </button>
          <button className="addtocart">
            ADD TO CART
            <img src={img4} alt="" className="cart" />
          </button>
        </div>
        <div className="box">
          <img src={img6} alt="" className="ts3" />
          <button>
            <img src={img3} alt="" className="wish" />
          </button>
          <button className="addtocart">
            ADD TO CART
            <img src={img4} alt="" className="cart" />
          </button>
        </div>
        <div className="box">
          <img src={img7} alt="" className="ts4" />
          <button>
            <img src={img3} alt="" className="wish" />
          </button>
          <button className="addtocart">
            ADD TO CART
            <img src={img4} alt="" className="cart" />
          </button>
        </div>
      </div>
      <div className="row2">
        <div className="box">
          <img src={img8} alt="" className="ts5" />
          <button>
            <img src={img3} alt="" className="wish" />
          </button>
          <button className="addtocart">
            ADD TO CART
            <img src={img4} alt="" className="cart" />
          </button>
        </div>
        <div className="box">
          <img src={img9} alt="" className="ts6" />
          <button>
            <img src={img3} alt="" className="wish" />
          </button>
          <button className="addtocart">
            ADD TO CART
            <img src={img4} alt="" className="cart" />
          </button>
        </div>
        <div className="box">
          <img src={img10} alt="" className="ts8" />
          <button>
            <img src={img3} alt="" className="wish" />
          </button>
          <button className="addtocart">
            ADD TO CART
            <img src={img4} alt="" className="cart" />
          </button>
        </div>
        <div className="box">
          <img src={img11} alt="" className="ts9" />
          <button>
            <img src={img3} alt="" className="wish" />
          </button>
          <button className="addtocart">
            ADD TO CART
            <img src={img4} alt="" className="cart" />
          </button>
        </div>
      </div>
      
      
    </div>
  );
};

export default Wishlist;
