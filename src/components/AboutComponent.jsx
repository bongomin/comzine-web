import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutComponent() {
    return (
        <section data-bg-src="assets/img/bg/about-bg-5-1.jpg">
            <div className="container container-style1">
                <div className="row flex-row-reverse align-items-center gx-70">
                    <div className="col-lg-6 col-xl">
                        <img src="assets/img/bg-5.jpg" alt="about image" />
                    </div>
                    <div className="col-lg-6 col-xl-auto wow fadeInUp" data-wow-delay="0.2s">
                        <div className="about-box2">
                            <span className="sec-subtitle"><i className="fas fa-bring-forward"></i>Harnessing Technology for Social Impact</span>
                            <h2 className="sec-title3 h1">About Comzine Tech & Investments Ltd</h2>
                            <p>Comzine Tech & Investments Ltd is a technology-driven company dedicated to leveraging digital innovation, creativity, and community-centered thinking to make lives better.</p>
                            <p>At our core, we are a purpose-driven technology company dedicated to shaping a better future for humanity. With a focus on Health, Humanitarian Crisis, and Climate Change, we strive to create profound and lasting impact through our digital innovations.</p>
                            <div className="row gx-0 align-items-center flex-row-reverse justify-content-end mt-sm-3 pt-sm-3 mb-30 pb-10">
                                <div className="col-sm-auto">
                                    <p className="author-degi">Founder & CEO</p>
                                    <h3 className="h5 author-name">Mulabbi Joseph</h3>
                                </div>
                                <div className="col-sm-auto">
                                    <div className="about-call">
                                        <div className="about-call__icon"><i className="fas fa-phone-alt"></i></div>
                                        <div className="media-body">
                                            <span className="about-call__label">Call To Ask Any Query</span>
                                            <p className="about-call__number"><a href="tel:+256701881619">+(256) 200 928812</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="/contact" className="vs-btn">Contact Us<i className="far fa-long-arrow-right"></i></Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
