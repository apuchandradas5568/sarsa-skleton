import Hero from '../Hero/Hero'
import React, { useState } from "react";
import ProductPage from "../ProductPage/ProductPage";
import ProductBar from "../../components/ProductBar/ProductBar";
import ShopSections from "../../pages/Shop/ShopSections";
import './Home.css'
import Poster from '../Hero/Poster.jsx'
import DealsOfTheMonth from '../Products/DealsOfTheMonth.jsx'
import NewArrivals from '../Products/NewArrivals.jsx'
import Membership from '../../components/Membership/Membership.jsx';

function Home() {
    return (
        <div className='home-container'>
            <Hero />
            <ProductBar />
            <DealsOfTheMonth />
            <NewArrivals />
            <ShopSections />
            <Membership />
        </div>
    )
}

export default Home