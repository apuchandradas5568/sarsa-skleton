import React from 'react';
import { Link } from 'react-router-dom';
import searchImg from '../../images/search.jpg';
import wishlistImg from '../../images/wishlist.jpg';
import cartImg from '../../images/cart.png';
import userImg from '../../images/user.jpg';
import addressImg from '../../images/address.jpg';
import bagImg from '../../images/bag.jpg';
import editiconImg from '../../images/editicon.jpg';
import changepassImg from '../../images/changepass.jpg';
import logoutImg from '../../images/logout.jpg';
import emptyCart from '../../images/emptycarton.jpg';
import UpdPass from '../../images/updpass.jpg'
import './profile.css';
import './updatepass.css'

const UpdatePassword = () => {

   




  return (
    <div className="profile-container">
    <div className="profile-box">
        <div className="name">
            <div className="profile-pic"></div>
            <h2>Tushar Chauhan</h2>
        </div>
        <Link to="/userProfile">
            <button className="user">
                <img src={userImg} alt="User" />
                <span>My Profile</span>
            </button>
        </Link>
        <Link to="/adddeliveryaddress">
            <button className="address">
                <img src={addressImg} alt="Address" />
                <span>Delivery Address</span>
            </button>
        </Link>
        <Link to="/myorders">
            <button className="bag">
                <img src={bagImg} alt="My Orders" />
                <span>My Orders</span>
            </button>
        </Link>
        <Link to="/mywishlist">
            <button className="wishlist">
                <img src={wishlistImg} alt="My Wishlist" />
                <span>My Wishlist</span>
            </button>
        </Link>
        <Link to="/updatepassword">
            <button className="changepass">
                <img src={changepassImg} alt="Change Password" />
                <span>Change Password</span>
            </button>
        </Link>
        <Link to="">
            <button className="logout">
                <img src={logoutImg} alt="Logout" />
                <span>Logout</span>
            </button>
        </Link>
    </div>

    <h1 className="heading">Welcome Tushar!</h1>
    <div className="profileboard">
    <img src={UpdPass} alt="Update Password" />
    <form className="profileinfo">


    <div className="newpass">
                <label for="name">New Password</label>
                <div>
                    <input type="text" name="myname" id="name" placeholder=" Enter password"/>
                </div>
            </div>

           
            <div className="confpass">
                <label for="name">Confirm New Password*</label>
                <div>
                    <input type="text" name="myname" id="name" placeholder=" Confirm password"/>
                </div>
            </div>
     

      <button className="upd" type="submit">
        Update
      </button>
    </form>
    </div>
    </div>
  )
}

export default UpdatePassword