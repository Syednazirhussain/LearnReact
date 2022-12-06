import { Link } from "react-router-dom";

const Header = ({ page }) => {
    return (
        <>
            <div id="preloder">
                <div className="loader"></div>
            </div>

            <div className="humberger__menu__overlay"></div>
            <div className="humberger__menu__wrapper">
                <div className="humberger__menu__logo">
                    <a href="javascript:void(0);">
                        <img src="ogani/img/logo.png" />
                    </a>
                </div>
                <div className="humberger__menu__cart">
                    <ul>
                        <li><a href="javascript:void(0);"><i className="fa fa-heart"></i> <span>1</span></a></li>
                        <li><a href="javascript:void(0);"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                    </ul>
                    <div className="header__cart__price">item: <span>$150.00</span></div>
                </div>
                <div className="humberger__menu__widget">
                    <div className="header__top__right__language">
                        <img src="ogani/img/language.png" />
                        <div>English</div>
                        <span className="arrow_carrot-down"></span>
                        <ul>
                            <li><a href="javascript:void(0);">Spanis</a></li>
                            <li><a href="javascript:void(0);">English</a></li>
                        </ul>
                    </div>
                    <div className="header__top__right__auth">
                        <a href="javascript:void(0);"><i className="fa fa-user"></i> Login</a>
                    </div>
                </div>
                <nav className="humberger__menu__nav mobile-menu">
                    <ul>
                        <li className="active">
                            <Link to="/">{page}</Link>
                        </li>
                        <li><a href="javascript:void(0);">Shop</a></li>
                        <li><a href="javascript:void(0);">Pages</a>
                            <ul className="header__menu__dropdown">
                                <li><a href="javascript:void(0);">Shop Details</a></li>
                                <li><a href="javascript:void(0);">Shoping Cart</a></li>
                                <li><a href="javascript:void(0);">Check Out</a></li>
                                <li><a href="javascript:void(0);">Blog Details</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0);">Blog</a></li>
                        <li><a href="javascript:void(0);">Contact</a></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
                <div className="header__top__right__social">
                    <a href="javascript:void(0);"><i className="fa fa-facebook"></i></a>
                    <a href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                    <a href="javascript:void(0);"><i className="fa fa-linkedin"></i></a>
                    <a href="javascript:void(0);"><i className="fa fa-pinterest-p"></i></a>
                </div>
                <div className="humberger__menu__contact">
                    <ul>
                        <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                        <li>Free Shipping for all Order of $99</li>
                    </ul>
                </div>
            </div>

            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>
                                        <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                        <li>Free Shipping for all Order of $99</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__right__social">
                                        <a href="javascript:void(0);"><i className="fa fa-facebook"></i></a>
                                        <a href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a href="javascript:void(0);"><i className="fa fa-linkedin"></i></a>
                                        <a href="javascript:void(0);"><i className="fa fa-pinterest-p"></i></a>
                                    </div>
                                    <div className="header__top__right__language">
                                        <img src="ogani/img/language.png" />
                                        <div>English</div>
                                        <span className="arrow_carrot-down"></span>
                                        <ul>
                                            <li><a href="javascript:void(0);">Spanis</a></li>
                                            <li><a href="javascript:void(0);">English</a></li>
                                        </ul>
                                    </div>
                                    <div className="header__top__right__auth">
                                        <a href="javascript:void(0);"><i className="fa fa-user"></i> Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <a href="javascript:void(0);">
                                    <img src="ogani/img/logo.png" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active">
                                        <Link to="/">{page}</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop">Shop</Link>
                                    </li>
                                    <li><a href="javascript:void(0);">Pages</a>
                                        <ul className="header__menu__dropdown">
                                            <li>
                                                <Link to="/shop-detail">Shop Detail</Link>
                                            </li>
                                            <li>
                                                <Link to="/cart">Shop</Link>
                                            </li>
                                            <li>
                                                <Link to="/checkout">Check Out</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><a href="javascript:void(0);"><i className="fa fa-heart"></i> <span>1</span></a></li>
                                    <li><a href="javascript:void(0);"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                                </ul>
                                <div className="header__cart__price">item: <span>$150.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;