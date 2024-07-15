import React from 'react'
import './Membership.css'
import sale from '../../images/sale.png'
import shop from '../../images/priorshop.png'
import women from '../../images/women.jpg'
import mask1 from '../../images/mask1.jpg'
import star from '../../images/star.png'

function Membership() {
    return (
        <div class="desktop-13">
            <section class="desktop-15">
                <div class="desktop-15-child"></div>
                <h1 class="just-drop">JUST DROP</h1>
                <div class="product-display">
                    <img
                        class="product-details-icon"
                        loading="lazy"
                        alt=""
                        src={women}
                    />

                    <img
                        class="product-details-icon1"
                        loading="lazy"
                        alt=""
                        src={women}
                    />

                    <div class="product-display-inner">
                        <img
                            class="frame-child"
                            loading="lazy"
                            alt=""
                            src={women}
                        />
                    </div>



                </div>
                <div class="follow-us-container">
                    <div class="follow-us-parent">
                        <b class="follow-us">FOLLOW US </b>
                        <div class="frame-item"></div>
                    </div>
                    <div class="image-grid">
                        <div class="image-row">
                            <div class="rectangle-parent">
                                <img
                                    class="frame-inner"
                                    alt=""
                                    src="./public/rectangle-32@2x.png"
                                />

                                <img
                                    class="image-placeholder-icon"
                                    loading="lazy"
                                    alt=""
                                    src="./public/rectangle-32@2x.png"
                                />
                            </div>
                            <div class="rectangle-group">
                                <img
                                    class="rectangle-icon"
                                    alt=""
                                    src="./public/rectangle-33@2x.png"
                                />

                                <img
                                    class="frame-child1"
                                    loading="lazy"
                                    alt=""
                                    src="./public/rectangle-33@2x.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="single-image-container">
                        <div class="rectangle-container">
                            <img
                                class="frame-child2"
                                alt=""
                                src="./public/rectangle-34@2x.png"
                            />

                            <img
                                class="single-image-icon"
                                loading="lazy"
                                alt=""
                                src="./public/rectangle-34@2x.png"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div class="desktop-14">
                <div class="desktop-14-child"></div>
                <div class="desktop-14-item"></div>
                <div class="desktop-14-inner"></div>
                <div class="ellipse-div"></div>
                <div class="membership">
                    <div class="memberbenefit">
                        <div class="memberbenefit-child"></div>
                        <div class="weekendsale">
                            <div class="weekendsale-child"></div>
                            <img class="vector-icon" alt="" src={sale} />

                            <div class="weekend-sale">WEEKEND SALE</div>
                        </div>
                        <div class="specialdiscounts">
                            <div class="weekendsale-child"></div>
                            <img class="vector-icon1" alt="" src="./public/vector.svg" />

                            <div class="special-discounts">SPECIAL DISCOUNTS</div>
                        </div>
                        <div class="priorityshop">
                            <div class="weekendsale-child"></div>
                            <img class="vector-icon2" alt="" src={shop} />

                            <div class="priority-shopping">PRIORITY SHOPPING</div>
                        </div>
                        <div class="birthdaydiscounts">
                            <div class="weekendsale-child"></div>
                            <div class="birthday-discounts">BIRTHDAY DISCOUNTS</div>
                            <img class="gift-icon" alt="" src="./public/gift.svg" />
                        </div>
                        <b class="enjoy-these-benefits">ENJOY THESE BENEFITS!</b>
                    </div>
                    <div class="membership1">MEMBERSHIP</div>
                </div>
                <div class="reviewsection">
                    <div class="reviewsection-child"></div>
                    <div class="review-images">
                        <img
                            class="mask-group-icon"
                            alt=""
                            src={mask1}
                        />

                        <img
                            class="mask-group-icon1"
                            alt=""
                            src={mask1}
                        />

                        <img
                            class="mask-group-icon2"
                            alt=""
                            src={mask1}
                        />

                        <img
                            class="mask-group-icon3 Mask3"
                            alt=""
                            src={mask1}
                        />

                        <img
                            class="mask-group-icon4"
                            alt=""
                            src={mask1}
                        />

                        <img
                            class="mask-group-icon5"
                            alt=""
                            src={mask1}
                        />

                        <div class="review-images-child"></div>
                        <div class="review-images-item"></div>
                    </div>
                    <div class="review1">
                        <div class="review1-child"></div>
                        <div class="quality-is-good-container">
                            <p class="quality-is-good">
                                Quality is good colour is very bright and value for money. Love
                                the fabric
                            </p>
                        </div>
                        <img class="vector-icon3" alt="" src={star} />

                        <img class="vector-icon4" alt="" src={star} />

                        <img class="vector-icon5" alt="" src={star} />

                        <img class="vector-icon6" alt="" src={star} />

                        <b class="udit">UDIT</b>
                    </div>
                    <div class="review2">
                        <div class="review2-child"></div>
                        <div class="such-a-beautiful-container">
                            <p class="quality-is-good">
                                Such a beautiful t-shirt
                                with awesome fabric and price!
                            </p>
                        </div>
                        <img class="vector-icon7" alt="" src={star} />

                        <img class="vector-icon8" alt="" src={star} />

                        <img class="vector-icon9" alt="" src={star} />

                        <img class="vector-icon10" alt="" src={star} />

                        <img class="vector-icon11" alt="" src={star} />

                        <b class="tania">TANIA</b>
                    </div>
                    <div class="review3">
                        <div class="review3-child"></div>
                        <div class="colour-matches-with-container">
                            <p class="quality-is-good">Colour matches with the picture,</p>
                            <p class="quality-is-good">Quality is good,</p>
                            <p class="quality-is-good">Fabric is skin friendly</p>
                        </div>
                        <img class="vector-icon12" alt="" src={star} />

                        <img class="vector-icon13" alt="" src={star} />

                        <img class="vector-icon14" alt="" src={star} />

                        <b class="sam">SAM</b>
                    </div>
                    <div class="review4">
                        <div class="review2-child"></div>
                        <div class="nice-t-shirt-and-container">
                            <p class="quality-is-good">
                                Nice t-shirt and the quality same as shown in ad
                            </p>
                        </div>
                        <img class="icon-star" alt="" src={star} />

                        <img class="icon-star1" src={star} alt="" />
                        <img class="icon-star2" src={star} alt="" />

                        <img class="icon-star3" src={star} alt="" />

                        <b class="tan">TAN</b>


                    </div>
                    <span class="reviewhead">
                        <div class="reviewhead-child"></div>
                        <b class="reviews">REVIEWS</b>
                    </span>
                </div>
            </div>


        </div>
    )
}

export default Membership;