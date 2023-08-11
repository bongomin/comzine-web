import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const MainMenu = () => {
    return (
        <div className="col-auto">
            <nav className="main-menu menu-style1 d-none d-lg-block">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/service">Services</Link></li>
                    {/* <li className="menu-item-has-children">
                        <Link to="/services">Service</Link>
                        <ul className="sub-menu">
                            <li><Link to="/services">Service1</Link></li>
                            <li><Link to="/service-details">Service2</Link></li>
                        </ul>
                    </li> */}
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
                <button className="vs-menu-toggle d-inline-block d-lg-none">
                    <i className="fal fa-bars"></i>
                </button>
            </nav>
        </div>
    );
}

export default MainMenu;
