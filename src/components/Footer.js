const Footer = () => {
    return (
        <>
            <footer className="footer spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__about">
                                <div className="footer__about__logo">
                                    <a href="javascript:void(0);">
                                        <img src="ogani/img/logo.png" />
                                    </a>
                                </div>
                                <ul>
                                    <li>Address: 60-49 Road 11378 New York</li>
                                    <li>Phone: +65 11.188.888</li>
                                    <li>Email: hello@colorlib.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                            <div className="footer__widget">
                                <h6>Useful Links</h6>
                                <ul>
                                    <li><a href="javascript:void(0);">About Us</a></li>
                                    <li><a href="javascript:void(0);">About Our Shop</a></li>
                                    <li><a href="javascript:void(0);">Secure Shopping</a></li>
                                    <li><a href="javascript:void(0);">Delivery infomation</a></li>
                                    <li><a href="javascript:void(0);">Privacy Policy</a></li>
                                    <li><a href="javascript:void(0);">Our Sitemap</a></li>
                                </ul>
                                <ul>
                                    <li><a href="javascript:void(0);">Who We Are</a></li>
                                    <li><a href="javascript:void(0);">Our Services</a></li>
                                    <li><a href="javascript:void(0);">Projects</a></li>
                                    <li><a href="javascript:void(0);">Contact</a></li>
                                    <li><a href="javascript:void(0);">Innovation</a></li>
                                    <li><a href="javascript:void(0);">Testimonials</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="footer__widget">
                                <h6>Join Our Newsletter Now</h6>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <form action="javascript:void(0);">
                                    <input type="text" name="email" placeholder="Enter your mail" />
                                    <button type="submit" className="site-btn">Subscribe</button>
                                </form>
                                <div className="footer__widget__social">
                                    <a href="javascript:void(0);"><i className="fa fa-facebook"></i></a>
                                    <a href="javascript:void(0);"><i className="fa fa-instagram"></i></a>
                                    <a href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                    <a href="javascript:void(0);"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer__copyright">
                                <div className="footer__copyright__text">
                                    <p>
                                        Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                                        All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com/" target="_blank">Colorlib</a>
                                    </p>
                                </div>
                                <div className="footer__copyright__payment">
                                    <img src="ogani/img/payment-item.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;