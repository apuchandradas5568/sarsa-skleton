import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import t1 from '../../images/t1.jpg'
import t2 from '../../images/t2.jpg'
import t3 from '../../images/t3.jpg'


function Cart() {
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
                    <button className='apply' >Apply</button>
                </div>
                <span class="del">Delivery Charge</span>
                <span class="del1">$5.00</span>
                <hr class="hl2" />
                <span class="grandt">Grand Total</span>
                <span class="grandt1">$205.00</span>

            </div>
            <div class="summbox">



                <div class="tshirt1">
                    <img src={t1} className='image-t1' alt="" />
                    <div class="t1des">
                        <div class="box1-cart">
                            <span className='quant'>-</span>
                            <span className='quant'>1</span>
                            <span className='quant'>+</span>
                        </div>
                        <p>Black T-shirt</p>
                        <p id="t1price">$20.00</p>
                        <p id="t1price2">$20.00</p>
                        <p>Size:M</p>
                    </div>

                </div>
                <div class="tshirt2">
                    <img src={t2} className='image-t2' alt="" />
                    <div class="t2des">
                        <div class="box2-cart">
                            <span className='quant'>-</span>
                            <span className='quant'>1</span>
                            <span className='quant'>+</span>
                        </div>
                        <p>White T-shirt</p>
                        <p id="t2price">$20.00</p>
                        <p id="t2price2">$20.00</p>

                        <p>Size:M</p>
                    </div>
                </div>
                <div class="tshirt3">
                    <img src={t3} className='image-t3' alt="" />
                    <div class="t3des">
                        <div class="box3-cart">
                            <span className='quant'>-</span>
                            <span className='quant'>1</span>
                            <span className='quant'>+</span>
                        </div>
                        <p>White T-shirt</p>
                        <p id="t3price">$20.00</p>
                        <p id="t3price2">$20.00</p>

                        <p>Size:M</p>
                    </div>
                </div>
            </div>
            <button className='ship'><Link to='/shipping' className='ship-cart'>Shipping</Link></button>
        </div >

    )
}

export default Cart