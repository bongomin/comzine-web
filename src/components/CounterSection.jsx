import React from 'react';

const CounterSection = () => {
    return (
        <div className="position-relative">
            <div className="counter-shape1"></div>
            <div className="bg-black z-index-common space" data-bg-src="assets/img/bg/counter-bg-1-1.jpg">
                <div className="container wow fadeInUp" data-wow-delay="0.2s">
                    <div className="row justify-content-between gy-4">
                        <div className="col-6 col-lg-auto">
                            <div className="counter-media">
                                <div className="counter-media__icon"><img src="assets/img/icon/count-1-1.png" alt="icon" /></div>
                                <div className="media-body">
                                    <span className="counter-media__number h1 text-orange">15</span>
                                    <p className="counter-media__title text-white">Successful Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-auto">
                            <div className="counter-media">
                                <div className="counter-media__icon"><img src="assets/img/icon/count-1-2.png" alt="icon" /></div>
                                <div className="media-body">
                                    <span className="counter-media__number h1 text-orange">650</span>
                                    <p className="counter-media__title text-white">Media Activities</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-auto">
                            <div className="counter-media">
                                <div className="counter-media__icon"><img src="assets/img/icon/count-1-3.png" alt="icon" /></div>
                                <div className="media-body">
                                    <span className="counter-media__number h1 text-orange">567</span>
                                    <p className="counter-media__title text-white">Skilled Experts</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-auto">
                            <div className="counter-media">
                                <div className="counter-media__icon"><img src="assets/img/icon/count-1-4.png" alt="icon" /></div>
                                <div className="media-body">
                                    <span className="counter-media__number h1 text-orange">28k</span>
                                    <p className="counter-media__title text-white">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterSection;
