import Hero from '../Hero/Hero'
import React, { useContext, useState } from "react";
import ProductPage from "../ProductPage/ProductPage";
import ProductBar from "../../components/ProductBar/ProductBar";
import ShopSections from "../../pages/Shop/ShopSections";
import './Home.css'
import Poster from '../Hero/Poster.jsx'
import DealsOfTheMonth from '../Products/DealsOfTheMonth.jsx'
import NewArrivals from '../Products/NewArrivals.jsx'
import Membership from '../../components/Membership/Membership.jsx';
import { WebContext } from '../../providers/WebProvider.jsx';

function Home() {

    const {webData} = useContext(WebContext)


    return (
        <div className='home-container'>
            <Hero webData={webData} />
            <ProductBar webData={webData} />
            <DealsOfTheMonth webData={webData} />
            <NewArrivals />
            <ShopSections />
            <Membership />
        </div>
    )
}

export default Home