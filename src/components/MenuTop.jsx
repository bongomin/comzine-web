import React from 'react';

const MenuTop = () => {
    const logoStyle = {
        height: '100px',
        display: 'block',
        maxWidth: '100%',
    };

    return (
        <div className="container">
            <div className="menu-top">
                <div className="row justify-content-between align-items-center gx-sm-0">
                    <div className="col">
                        <div className="header-logo">
                            <a href="index.html"><img src="/logo1.png" alt="Comzine T & I" className="logo" style={logoStyle} /></a>
                        </div>
                    </div>
                    <div className="col-auto header-info ">
                        <div className="header-info_icon"><i className="fas fa-phone-alt"></i></div>
                        <div className="media-body">
                            <span className="header-info_label">Call Anytime 24/7</span>
                            <div className="header-info_link"><a href="tel:+256200928812">(+256) 200928812</a></div>
                        </div>
                    </div>
                    <div className="col-auto header-info d-none d-lg-flex">
                        <div className="header-info_icon"><i className="fas fa-envelope"></i></div>
                        <div className="media-body">
                            <span className="header-info_label">Mail Us For Support</span>
                            <div className="header-info_link"><a href="hello@comzine.com">hello@comzine.com</a></div>
                        </div>
                    </div>
                    <div className="col-auto header-info d-none d-xl-flex">
                        <div className="header-info_icon"><i className="fas fa-map-marker-alt"></i></div>
                        <div className="media-body">
                            <span className="header-info_label">Office Address</span>
                            <div className="header-info_link">Kireka Lorry Park next to post bank</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuTop;
