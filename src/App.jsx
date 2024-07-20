import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Hero from "./pages/Hero/Hero.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ForgetPass from "./pages/ForgetPassword/ForgetPass.jsx";
import NewPassword from "./pages/ForgetPassword/NewPassword.jsx";
import Home from "./pages/Home/Home.jsx";
import MensSection from "./pages/MensSection/MensSection.jsx";
import WomensSection from "./pages/WomensSection/WomensSection.jsx";
import ProductDetails from "./pages/Products/ProductDetails.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Payment from "./pages/Cart/Payment.jsx";
import Shipping from "./pages/Cart/Shipping.jsx";
import Summary from "./pages/Cart/Summary.jsx";
import VerifyUser from "./pages/VerifyUser.jsx";
<<<<<<< HEAD
import Wishlist from "./pages/Products/Wishlist.jsx";
import Profile from "./pages/UserDashboard/Profile.jsx";
import Delivery from "./pages/UserDashboard/Delivery.jsx";
import MyOrders from "./pages/UserDashboard/MyOrders.jsx";
import MyWishlist from "./pages/UserDashboard/MyWishlist.jsx";
import UpdatePassword from "./pages/UserDashboard/UpdatePassword.jsx";
=======

import Wishlist from "./pages/Products/Wishlist.jsx";

import VerifyForgotPasswordLink from "./pages/VerifyForgotPasswordLink.jsx";

>>>>>>> origin/main



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} index />
        <Route path="/user/verify/:userId/:uniqueString" element={<VerifyUser/>} />
<<<<<<< HEAD
=======
        <Route path="/user/reset-password/:userId/:token" element={<VerifyForgotPasswordLink/>}/>
>>>>>>> origin/main
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="signup" />
        <Route element={<ProductPage />} path="products" />
        <Route element={<ForgetPass />} path="forget-password" />
<<<<<<< HEAD
        <Route element={<NewPassword />} path="forget-password/new-password" />
=======
        <Route element={<NewPassword />} path="forget-password/new-password/:userId/:token" />
>>>>>>> origin/main
        <Route element={<MensSection />} path="mens-section" />
        <Route element={<WomensSection />} path="womens-section" />
        <Route element={<ProductDetails />} path="/product-section" />
        <Route element={<Cart />} path="cart" />
        <Route element={<Payment />} path="payment" />
        <Route element={<Shipping />} path="shipping" />
        <Route element={<Summary />} path="summary" />
        <Route element={<Wishlist />} path="wishlist" />
<<<<<<< HEAD
        <Route element={<Profile />} path="userProfile" />
       <Route element={<Delivery />} path="adddeliveryaddress" />
       <Route element={<MyOrders />} path="myOrders" />
       <Route element={<MyWishlist />} path="mywishlist" />
       <Route element={<UpdatePassword />} path="updatepassword" />
      </Routes>
   <Footer/>
=======
      </Routes>
      <Footer />
>>>>>>> origin/main
    </BrowserRouter>
  );
}
