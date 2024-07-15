import React from 'react'
import './Summary.css'

function Summary() {
    return (
        <div>
            <p class="paymenthead">Review Your Order</p>
            <div class="addressdisplay">
                <img src="img/home.png" alt="Error" class="home" />
                <span class="line">--------------------------------------</span>
                <img src="img/wallet.jpg" alt="Error" class="wallet" />
                <span class="line">--------------------------------------</span>
                <img src="img/notepad.jpg" alt="Error" class="notepad" />

            </div>
            <div class="cashcard">
                <span class="subtotal">Subtotal</span>
                <span class="subtotal1">$200.00</span>
                <hr class="hl1" />
                <div class="discount">
                    <label for="coupon">Enter Discount Code</label>



                    <div class="discountbox">
                        <input type="text" name="myname" id="coupon" />

                    </div>
                    <button >Apply</button>
                </div>
                <span class="del">Delivery Charge</span>
                <span class="del1">$5.00</span>
                <hr class="hl2" />
                <span class="grandt">Grand Total</span>
                <span class="grandt1">$205.00</span>

            </div>
            <div class="summbox">
                <span>Estimated Delivery: 17 July 2024</span>
                <div class="tshirt1">
                    <img src="img/tshirt1.png" alt="" />
                    <div class="t1des">
                        <p>Black T-shirt</p>
                        <p>$20.00</p>
                        <p>Size:M</p>
                    </div>

                </div>
                <div class="tshirt2">
                    <img src="img/tshirt2.png" alt="" />
                    <div class="t2des">
                        <p>White T-shirt</p>
                        <p>$20.00</p>
                        <p>Size:M</p>
                    </div>
                </div>
                <div class="tshirt3">
                    <img src="img/tshirt3.jpg" alt="" />
                    <div class="t3des">
                        <p>White T-shirt</p>
                        <p>$20.00</p>
                        <p>Size:M</p>
                    </div>
                </div>
                <div class="shippingadd">
                    <h3>Shipping Address</h3>
                    <img src="img/edit.jpg" alt="" class="edit1" />
                    <p>Robert Fox</p>
                    <p>415 Washington Ave, Manchester Kentucky 39495</p>ff
                    <h3>Payment Method</h3>
                    <img src="img/edit.jpg" alt="" class="edit2" />
                    <p>Debit Card(... ... ... 849)</p>
                </div>

            </div>
        </div>
    )
}

export default Summary