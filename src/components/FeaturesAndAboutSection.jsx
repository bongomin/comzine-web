import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesAndAboutSection = () => {
    const divStyle = {
        backgroundImage: `url(${'assets/img/bg/ab-bg-1-1.jpg'})`,
    };

    const featDiv = {
        height: '550px',
    };

    const featuresData = [
        {
            title: "Digital Health Solutions",
            icon: "assets/img/icon/fe-1-1.png",
            description: "Develop innovative digital health platforms...",
            link: "/service-details",
        },
        {
            title: "Climate Change Technology",
            icon: "assets/img/icon/fe-1-2.png",
            description: "Create technology-driven solutions to address...",
            link: "/service-details",
        },
        {
            title: "Humanitarian Tech Solutions",
            icon: "assets/img/icon/fe-1-3.png",
            description: "Build technology solutions to support humanitarian...",
            link: "/service-details",
        },
    ];

    return (
        <div style={divStyle}>
            <section className="feature-wrap1 space-top space-extra-bottom">
                <div className="container wow fadeInUp" data-wow-delay="0.2s">
                    <div className="row vs-carousel" data-slide-show="3" data-lg-slide-show="2" data-md-slide-show="2">
                        {featuresData.map((feature, index) => (
                            <div key={index} className="col-xl-4">
                                <div className="feature-style1" style={featDiv}>
                                    <div className="feature-icon"><img src={feature.icon} alt="Features" /></div>
                                    <h3 className="feature-title h5"><a className="text-inherit" href={feature.link}>{feature.title}</a></h3>
                                    <p className="feature-text">{feature.description}</p>
                                    <Link to={feature.link} className="vs-btn style3">Read More<i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="position-relative space-bottom">
                <span className="about-shape1 d-none d-xl-block">Comzinetech</span>
                <div className="container z-index-common">
                    <div className="row gx-60">
                        <div className="col-lg-6 col-xl-5 mb-50 mb-lg-0 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="img-box1">
                                <div className="img-1">
                                    <img src="assets/img/about-1.jpg" alt="About image" />
                                </div>
                                <div className="img-2">
                                    <img src="assets/img/about/about1.png" alt="About image" width={344} height={282} />
                                    <a className="play-btn style2 position-center popup-video" href="#"><i className=""><i className="fas fa-play"></i></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7 align-self-center wow fadeInUp" data-wow-delay="0.3s">
                            <span className="sec-subtitle"><i className="fas fa-bring-forward"></i>Empowering Innovation, Collaboration, and Impact</span>
                            <h2 className="sec-title h2">Comzine Tech & Investments</h2>
                            <p className="mb-4 mt-1 pb-3">
                                At Comzine Tech & Investments, we strive to cultivate a workplace environment that fosters innovation, collaboration, and a shared commitment to making a meaningful impact in the fields of health, climate change, and humanitarian initiatives. Our workplace policy is built upon the following principles:
                            </p>
                            <span className="sec-subtitle"><i className="fas fa-bring-forward"></i>Motto</span>
                            <p className="mb-4 mt-1 pb-3">
                                "Harnessing Technology for Social Impact."
                                This slogan clearly communicates our company's commitment to leveraging technology for the betterment of society and aligns well with our focus on health, climate change, and humanitarian causes. It conveys a strong message of purpose and social responsibility, which can resonate with our target audience and create a compelling brand image.
                            </p>
                            <div className="call-media">
                                <div className="call-media__icon"><img src="assets/img/icon/tel-1-1.png" alt="icon" /></div>
                                <div className="media-body">
                                    <span className="call-media__label">8 HOURS SERVICE AVAILABLE</span>
                                    <p className="call-media__info">Call Us: <a href="tel:+256200928812">(+256) 200928812</a></p>
                                </div>
                            </div>
                            <Link to="/about" className="vs-btn">
                                About Us<i className="far fa-long-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturesAndAboutSection;
