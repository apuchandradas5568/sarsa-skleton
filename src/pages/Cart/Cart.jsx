import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'

function Cart() {
    return (
        <div> <p class="paymenthead">Checkout</p>

            <div class="cashcard">
                <span class="subtotal">Subtotal</span>
                <span class="subtotal1">$200.00</span>
                <hr class="hl1" />
                <div class="discount">
                    <label for="coupon">Enter Discount Code</label>



                    <div class="discountbox">
                        <input type="text" name="myname" id="coupon" />

                    </div>
                    <button className='apply' >Apply</button>
                </div>
                <span class="del">Delivery Charge</span>
                <span class="del1">$5.00</span>
                <hr class="hl2" />
                <span class="grandt">Grand Total</span>
                <span class="grandt1">$205.00</span>

            </div>
            <div class="summbox">
                <span class="products">Products</span>
                <span class="price">Price</span>
                <span class="quantity">Quantity</span>
                <span class="sub_total">Subtotal</span>


                <div class="tshirt1">
                    <img src="img/tshirt1.png" alt="" />
                    <div class="t1des">
                        <div class="box1">
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                        <p>Black T-shirt</p>
                        <p id="t1price">$20.00</p>
                        <p id="t1price2">$20.00</p>
                        <p>Size:M</p>
                    </div>

                </div>
                <div class="tshirt2">
                    <img src="img/tshirt2.png" alt="" />
                    <div class="t2des">
                        <div class="box2">
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                        <p>White T-shirt</p>
                        <p id="t2price">$20.00</p>
                        <p id="t2price2">$20.00</p>

                        <p>Size:M</p>
                    </div>
                </div>
                <div class="tshirt3">
                    <img src="img/tshirt3.jpg" alt="" />
                    <div class="t3des">
                        <div class="box3">
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                        <p>White T-shirt</p>
                        <p id="t3price">$20.00</p>
                        <p id="t3price2">$20.00</p>

                        <p>Size:M</p>
                    </div>
                </div>
            </div>
            <button className='ship'><Link to='/shipping'>Shipping</Link></button>
        </div >

    )
}

export default Cart