import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import t1 from "../../images/t1.jpg";
import t2 from "../../images/t2.jpg";
import t3 from "../../images/t3.jpg";
import useAxiosPublic from "../../hooks/useAxios";
import { WebContext } from "../../providers/WebProvider";

function Cart() {
  const [cart, setCart] = useState(null);
  const axios = useAxiosPublic();

  const { user } = useContext(WebContext);

  console.log(cart && cart);

  useEffect(() => {
    axios("/users/get-cart", {
      headers: {
        Authorization: "Bearer " + user.accessToken,
      },
    }).then((res) => {
      //   console.log(res);
      setCart(res.data.data);
    });
  }, []);

  return (
    <div>
      <p class="paymenthead">Checkout</p>

      <div class="cashcard">
        <span class="subtotal">Subtotal</span>
        <span class="subtotal1">$200.00</span>
        <hr class="hl1" />
        <div class="discount-cart">
          <label for="coupon">Enter Discount Code</label>

          <div class="discountbox">
            <input type="text" name="myname" id="coupon" />
          </div>
          <button className="apply">Apply</button>
        </div>
        <span class="del">Delivery Charge</span>
        <span class="del1">$5.00</span>
        <hr class="hl2" />
        <span class="grandt">Grand Total</span>
        <span class="grandt1">$205.00</span>
      </div>
      <div class="summbox">
        {cart &&
          cart.map((productItem, index) => (
            <div className="tshirt1" key={index}>
              <img
                src={productItem.product.images[0]}
                className="image-t1"
                alt={productItem.product.name}
              />
              <div className="t1des">
                <div className="box1-cart">
                  <span className="quant">-</span>
                  <span className="quant">{productItem.quantity}</span>
                  <span className="quant">+</span>
                </div>
                <p>{productItem.product.name}</p>
                <p id="t1price">{productItem.product.price}</p>
                <p id="t1price2">$20.00</p>
                <p>
                  Size:{" "}
                  {productItem.product.sizes.map((size, idx) => (
                    <span key={idx}>{size} </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
      </div>
      <button className="ship">
        <Link to="/shipping" className="ship-cart">
          Shipping
        </Link>
      </button>
    </div>
  );
}

export default Cart;
