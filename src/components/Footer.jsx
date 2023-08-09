import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-wrapper footer-layout1" data-bg-src="assets/img/shape/bg-footer-1-1.jpg">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm footer-info_group">
                            <div className="footer-info">
                                <div className="footer-info_icon"><i className="fal fa-map-marker-alt"></i></div>
                                <div className="media-body">
                                    <span className="footer-info_label">Office Address</span>
                                    <div className="footer-info_link">Kireka Lorry Park next to post bank</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm footer-info_group">
                            <div className="footer-info">
                                <div className="footer-info_icon"><i className="fal fa-clock"></i></div>
                                <div className="media-body">
                                    <span className="footer-info_label">Working Hours</span>
                                    <div className="footer-info_link">Weekdays 8am - 5:30pm</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm footer-info_group">
                            <div className="footer-info">
                                <div className="footer-info_icon"><i className="fal fa-phone-volume"></i></div>
                                <div className="media-body">
                                    <span className="footer-info_label">Contact Us</span>
                                    <div className="footer-info_link">
                                        <a href="mailto:info@techbiz.com">hello@comzine.com</a>
                                        <br />
                                        <a href="tel:+2597462153">(+256) 200928812</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="widget-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-lg-4 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">About Us</h3>
                                <div className="vs-widget-about">
                                    <p className="footer-text">
                                        We are Technology-driven company dedicated to levaraging digital innovation,creativity and community-centered thinking to make lives better.
                                    </p>
                                    <div className="footer-social">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-behance"></i></a>
                                        <a href="#"><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Links</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Our Mission</a></li>
                                        <li><a href="#">Meet The Teams</a></li>
                                        <li><a href="#">Our Projects</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Explore</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li><a href="#">What we Offer</a></li>
                                        <li><a href="#">Our Story</a></li>
                                        <li><a href="#">Latest Posts</a></li>
                                        <li><a href="#">Help Center</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Office Maps</h3>
                                <div className="footer-map">
                                    <iframe title="office location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0.3159016!2d32.5669267!3d0.3159016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba5eb76d9f0f%3A0xb89d3fb00d92b470!2sPost%20Bank%20Kireka!5e0!3m2!1sen!2sug!4v1651732317319!5m2!1sen!2sug" width="200" height="180" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> {currentYear} <a className="text-white" href="index.html">Comzine T & I</a>. All rights reserved by <a className="text-white" href="#">Comzine Tech & Investment Ltd</a>.</p>
                </div>
            </div>
            <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up"></i></a>
        </footer>
    );
}

export default Footer;
