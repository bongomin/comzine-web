import React from 'react';

const HeaderTop = () => {
    const containerStyle = {
        borderBottom: '8px solid orange'
    };
    return (
        <div className="header-top" style={containerStyle}>
            <div className="container">
                <div className="row align-items-center justify-content-between gy-1 text-center text-lg-start">
                    <div className="col-lg-auto d-none d-lg-block">
                        <p className="header-text">
                            <span className="fw-medium">
                                Now Hiring:
                            </span> Are you a social activist, creative and innovative ?
                        </p>
                    </div>
                    <div className="col-lg-auto">
                        <div className="header-social style-white">
                            <span className="social-title">Follow Us On: </span>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/Comzinetec"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            {/* <a href="#"><i className="fab fa-behance"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
