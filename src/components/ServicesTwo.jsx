import React from 'react';

export default function ServicesTwo() {
    return (
        <section className="space-top space-extra-bottom">
            <div className="container wow fadeInUp" data-wow-delay="0.2s">
                <div className="row vs-carousel" data-slide-show="3" data-md-slide-show="2">
                    <div className="col-md-6 col-lg-4">
                        <div className="service-style1 layout3">
                            <div className="service-bg" data-bg-src="assets/img/bg/sr-box-bg-1.jpg"></div>
                            <div className="service-top">
                                <div className="service-icon"><img src="assets/img/icon/sr-icon-1-1.png" alt="Features" /></div>
                                <span className="service-number">01</span>
                            </div>
                            <h3 className="service-title h5"><a href="service-details.html">Digital Health Solutions</a></h3>
                            <p className="service-text">Develop innovative digital health platforms and applications to improve healthcare accessibility, enhance patient experiences, and enable remote healthcare services.</p>
                            <a href="service-details.html" className="link-btn">Read More<i className="far fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="service-style1 layout3">
                            <div className="service-bg" data-bg-src="assets/img/bg/sr-box-bg-1.jpg"></div>
                            <div className="service-top">
                                <div className="service-icon"><img src="assets/img/icon/sr-icon-1-2.png" alt="Features" /></div>
                                <span className="service-number">02</span>
                            </div>
                            <h3 className="service-title h5"><a href="service-details.html">Climate Change Technology</a></h3>
                            <p className="service-text">Create technology-driven solutions to address climate change challenges, including developing platforms for environmental monitoring, renewable energy management systems, and sustainable transportation solutions.</p>
                            <a href="service-details.html" className="link-btn">Read More<i className="far fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="service-style1 layout3">
                            <div className="service-bg" data-bg-src="assets/img/bg/sr-box-bg-1.jpg"></div>
                            <div className="service-top">
                                <div className="service-icon"><img src="assets/img/icon/sr-icon-1-3.png" alt="Features" /></div>
                                <span className="service-number">03</span>
                            </div>
                            <h3 className="service-title h5"><a href="service-details.html">Humanitarian Tech Solutions</a></h3>
                            <p className="service-text">Build technology solutions to support humanitarian efforts during crises and emergencies, including developing disaster response platforms, crowd-sourced mapping tools, and communication systems.</p>
                            <a href="service-details.html" className="link-btn">Read More<i className="far fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
