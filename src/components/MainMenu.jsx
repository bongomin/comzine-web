import React from 'react';

const MainMenu = () => {
    return (
        <div className="col-auto">
            <nav className="main-menu menu-style1 d-none d-lg-block">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li className="menu-item-has-children">
                        <a href="service.html">Service</a>
                        <ul className="sub-menu">
                            <li><a href="service.html">Service1</a></li>
                            <li><a href="service-details.html">Service2</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">Contact</a></li>
                    <li><a href="about.html">Projects</a></li>
                </ul>
                <button className="vs-menu-toggle d-inline-block d-lg-none">
                    <i className="fal fa-bars"></i>
                </button>
            </nav>
        </div>
    );
}

export default MainMenu;
