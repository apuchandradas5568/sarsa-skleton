import "./ForgetPass.css";
import image from "../../images/n-1.jpeg";
import Google from "../../images/search-1.png";
import { Link, NavLink } from "react-router-dom";
import Login from "../Login/Login";

function NewPassword() {
  return (
    <div className="forgot-container">
      <div className="forgot-section-1">
        <div className="forgot-text">
          <h1>Lost password</h1>
          <span>
            Lost your password? Please enter your
            <br /> username or email address.
          </span>
        </div>

        <div className="forgot-input-wrapper">
          <form action="" method="" className="forgot-input">
            <label htmlFor="input-box">New Password</label>
            <input
              type="text"
              placeholder=" Enter your new Password"
              id="input-box"
            />
            <label htmlFor="input-box">Confirm Password</label>
            <input
              type="text"
              placeholder=" Confirm Your Password"
              id="input-box"
            />
          </form>
        </div>

        <div className="button">
          <button class="forgot-button">Reset Password</button>
        </div>

        <div class="dont-have-an-account-log-in-wrapper">
          <div class="login-dont-have-an-container">
            <span class="login-dont-have-an">Alreeady have an account?</span>
            <span class="span"> </span>
            <Link to="/login" class="sign-up-fo">
              Login here!
            </Link>
          </div>
        </div>
      </div>

      <div className="sign-section-2">
        <img className="sign-cover-img" src={image} alt="" />
      </div>
    </div>
  );
}

export default NewPassword;
