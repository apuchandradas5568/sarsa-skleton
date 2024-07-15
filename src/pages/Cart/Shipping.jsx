import React from 'react'
import './Shipping.css'
import { Link } from 'react-router-dom'
import home from '../../images/home.jpg'
import wallet from '../../images/wallet-1.jpg'
import list from '../../images/list.jpg'

function Shipping() {
    return (
        <div>
            <p class="paymenthead">Shipping Address</p>
            <div className="addressdisplay">
                <ul className='ad'>
                    <li><img src={home} alt="Error" className="home-icon" /></li>
                    <li>--------------------------------------</li>
                    <li><img src={wallet} alt="Error" className="wallet-icon" /></li>
                    <li>--------------------------------------</li>
                    <li><img src={list} alt="Error" className="notepad-icon" /></li>
                </ul>

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
                    <button>Apply</button>
                </div>
                <span class="del">Delivery Charge</span>
                <span class="del1">$5.00</span>
                <hr class="hl2" />
                <span class="grandt">Grand Total</span>
                <span class="grandt1">$205.00</span>

            </div>
            <form action="" class="paymentform" />
            <h3>Select delivery address</h3>
            <p id="delopt">In this address you'd like to display below? If so click the corresponding "Deliver to this
                address" button. Or you can enter a new delivery address</p>

            <div class="robertfox"></div>
            <button class="deliverhere"><span>Deliver Here</span></button>


            <div class="newadd">
                <h2>Add a new Address</h2>
                <div class="nametop">
                    <label for="name">Name</label>
                    <div>
                        <input type="text" name="myname" id="name" />
                    </div>
                </div>


                <div class="mobno">
                    <label for="number">Mobile Number</label>
                    <div>
                        <input type="number" name="myname" id="number" />
                    </div>

                </div>
                <div class="houseflat">

                    <label for="name">Flat, House no, Building, colony, Apartment</label>
                    <div>
                        <input type="text" name="myname" id="name" />
                    </div>
                </div>
                <div class="areacolony">

                    <label for="name">Area, colony, street, sector, village</label>
                    <div>
                        <input type="text" name="myname" id="name" />
                    </div>
                </div>
                <div class="selectcity">
                    <label for="selectcity1">City</label>
                    <select name="city" id="selectcity1">
                        <option value="New Delhi">New Delhi</option>
                        <option value="UP">UP</option>
                        <option value="Haryana">Haryana</option>

                    </select>
                </div>
                <div class="pincode">
                    <label for="number">Pin Code</label>
                    <div>
                        <input type="number" name="myname" id="number" />
                    </div>

                </div>
                <div class="selectcity">
                    <label for="selectcity1">Select State</label>
                    <select name="city" id="selectcity1">
                        <option value="Delhi">Delhi</option>
                        <option value="Noida">Noida</option>
                        <option value="Gurugram">Gurugram</option>

                    </select>
                </div>
                <div class="newdefaultcheckbox"><input type="checkbox" /> Use as my default address</div>
                <button class="continue"><Link to='/payment'><span>Continue</span></Link></button>
            </div>
        </div>

    )
}

export default Shipping