import { useEffect } from "react";

const Shop = () => {

    useEffect(() => {

    })

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
                                <h2>Organi Shop</h2>
                                <div className="breadcrumb__option">
                                    <a href="javascript:void(0);">Home</a>
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <div className="sidebar">
                                <div className="sidebar__item">
                                    <h4>Department</h4>
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
                                    </ul>
                                </div>
                                <div className="sidebar__item">
                                    <h4>Price</h4>
                                    <div className="price-range-wrap">
                                        <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                            data-min="10" data-max="540">
                                            <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                                            <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                            <span tabindex="1" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                        </div>
                                        <div className="range-slider">
                                            <div className="price-input">
                                                <input type="text" id="minamount" />
                                                <input type="text" id="maxamount" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar__item sidebar__item__color--option">
                                    <h4>Colors</h4>
                                    <div className="sidebar__item__color sidebar__item__color--white">
                                        <label htmlFor="white">
                                            White
                                            <input type="radio" id="white" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--gray">
                                        <label htmlFor="gray">
                                            Gray
                                            <input type="radio" id="gray" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--red">
                                        <label htmlFor="red">
                                            Red
                                            <input type="radio" id="red" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--black">
                                        <label htmlFor="black">
                                            Black
                                            <input type="radio" id="black" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--blue">
                                        <label htmlFor="blue">
                                            Blue
                                            <input type="radio" id="blue" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--green">
                                        <label htmlFor="green">
                                            Green
                                            <input type="radio" id="green" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <h4>Popular Size</h4>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="large">
                                            Large
                                            <input type="radio" id="large" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="medium">
                                            Medium
                                            <input type="radio" id="medium" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="small">
                                            Small
                                            <input type="radio" id="small" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="tiny">
                                            Tiny
                                            <input type="radio" id="tiny" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <div className="latest-product__text">
                                        <h4>Latest Products</h4>
                                        <div className="latest-product__slider owl-carousel">
                                            <div className="latest-prdouct__slider__item">
                                                <a href="javascript:void(0);" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="ogani/img/latest-product/lp-1.jpg" alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0);" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="ogani/img/latest-product/lp-2.jpg" alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0);" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="ogani/img/latest-product/lp-3.jpg" alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="latest-prdouct__slider__item">
                                                <a href="javascript:void(0);" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="ogani/img/latest-product/lp-1.jpg" alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0);" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="ogani/img/latest-product/lp-2.jpg" alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0);" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="ogani/img/latest-product/lp-3.jpg" alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-7">
                            <div className="product__discount">
                                <div className="section-title product__discount__title">
                                    <h2>Sale Off</h2>
                                </div>
                                <div className="row">
                                    <div className="product__discount__slider owl-carousel">
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="ogani/img/product/discount/pd-1.jpg">
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="javascript:void(0);">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="ogani/img/product/discount/pd-2.jpg">
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Vegetables</span>
                                                    <h5><a href="javascript:void(0);">Vegetables’package</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="ogani/img/product/discount/pd-3.jpg">
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="javascript:void(0);">Mixed Fruitss</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="ogani/img/product/discount/pd-4.jpg">
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="javascript:void(0);">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="ogani/img/product/discount/pd-5.jpg">
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="javascript:void(0);">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="ogani/img/product/discount/pd-6.jpg">
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="javascript:void(0);">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter__item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-5">
                                        <div className="filter__sort">
                                            <span>Sort By</span>
                                            <select>
                                                <option value="0">Default</option>
                                                <option value="0">Default</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="filter__found">
                                            <h6><span>16</span> Products found</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-3">
                                        <div className="filter__option">
                                            <span className="icon_grid-2x2"></span>
                                            <span className="icon_ul"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="ogani/img/product/product-1.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="javascript:void(0);">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="ogani/img/product/product-2.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="javascript:void(0);">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="ogani/img/product/product-3.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="javascript:void(0);">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="ogani/img/product/product-4.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="javascript:void(0);">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="ogani/img/product/product-5.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="javascript:void(0);">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="ogani/img/product/product-6.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="javascript:void(0);">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="ogani/img/product/product-7.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="javascript:void(0);">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="ogani/img/product/product-8.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="javascript:void(0);">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="ogani/img/product/product-9.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="javascript:void(0);">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="ogani/img/product/product-10.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="javascript:void(0);">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="ogani/img/product/product-11.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="javascript:void(0);">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="ogani/img/product/product-12.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="javascript:void(0);"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="javascript:void(0);"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="javascript:void(0);">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product__pagination">
                                <a href="javascript:void(0);">1</a>
                                <a href="javascript:void(0);">2</a>
                                <a href="javascript:void(0);">3</a>
                                <a href="javascript:void(0);"><i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Shop;