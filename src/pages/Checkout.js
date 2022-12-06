const Checkout = () => {
    return (
        <>

            <section className="hero hero-normal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                    <i className="fa fa-bars"></i>
                                    <span>All departments</span>
                                </div>
                                <ul>
                                    <li><a href="javascript:void(0);">Fresh Meat</a></li>
                                    <li><a href="javascript:void(0);">Vegetables</a></li>
                                    <li><a href="javascript:void(0);">Fruit & Nut Gifts</a></li>
                                    <li><a href="javascript:void(0);">Fresh Berries</a></li>
                                    <li><a href="javascript:void(0);">Ocean Foods</a></li>
                                    <li><a href="javascript:void(0);">Butter & Eggs</a></li>
                                    <li><a href="javascript:void(0);">Fastfood</a></li>
                                    <li><a href="javascript:void(0);">Fresh Onion</a></li>
                                    <li><a href="javascript:void(0);">Papayaya & Crisps</a></li>
                                    <li><a href="javascript:void(0);">Oatmeal</a></li>
                                    <li><a href="javascript:void(0);">Fresh Bananas</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="javascript:void(0);">
                                        <div className="hero__search__categories">
                                            All Categories
                                            <span className="arrow_carrot-down"></span>
                                        </div>
                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" className="site-btn">SEARCH</button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>+65 11.188.888</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="breadcrumb-section set-bg" data-setbg="ogani/img/breadcrumb.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Checkout</h2>
                                <div className="breadcrumb__option">
                                    <a href="javascript:void(0);">Home</a>
                                    <span>Checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="checkout spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h6><span className="icon_tag_alt"></span> Have a coupon? <a href="javascript:void(0);">Click here</a> to enter your code
                            </h6>
                        </div>
                    </div>
                    <div className="checkout__form">
                        <h4>Billing Details</h4>
                        <form action="javascript:void(0);">
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Fist Name<span>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Last Name<span>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Country<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>Address<span>*</span></p>
                                        <input type="text" placeholder="Street Address" className="checkout__input__add" />
                                        <input type="text" placeholder="Apartment, suite, unite ect (optinal)" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>Town/City<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>Country/State<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>Postcode / ZIP<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Phone<span>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label for="acc">
                                            Create an account?
                                            <input type="checkbox" id="acc" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <p>Create an account by entering the information below. If you are a returning customer
                                        please login at the top of the page</p>
                                    <div className="checkout__input">
                                        <p>Account Password<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label for="diff-acc">
                                            Ship to a different address?
                                            <input type="checkbox" id="diff-acc" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Order notes<span>*</span></p>
                                        <input type="text" placeholder="Notes about your order, e.g. special notes for delivery." />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4>Your Order</h4>
                                        <div className="checkout__order__products">Products <span>Total</span></div>
                                        <ul>
                                            <li>Vegetable Package <span>$75.99</span></li>
                                            <li>Fresh Vegetable <span>$151.99</span></li>
                                            <li>Organic Bananas <span>$53.99</span></li>
                                        </ul>
                                        <div className="checkout__order__subtotal">Subtotal <span>$750.99</span></div>
                                        <div className="checkout__order__total">Total <span>$750.99</span></div>
                                        <div className="checkout__input__checkbox">
                                            <label for="acc-or">
                                                Create an account?
                                                <input type="checkbox" id="acc-or" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua.</p>
                                        <div className="checkout__input__checkbox">
                                            <label for="payment">
                                                Check Payment
                                                <input type="checkbox" id="payment" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkout__input__checkbox">
                                            <label for="paypal">
                                                Paypal
                                                <input type="checkbox" id="paypal" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <button type="submit" className="site-btn">PLACE ORDER</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Checkout;