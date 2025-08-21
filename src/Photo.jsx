import { Menu } from "react-feather";
import { Link } from "react-router-dom";

import Logo from "./images/logo.png";
import React from "react";

import "./css/Photo.css"

function Photo() {
    return (
        <>
            <div className="you-chan_image_clothes">
                <button className="menu_bar">
                    <Menu className="menu" />
                </button>
            </div>

            <nav className="navbar">
                <div className="you-chan_logo">
                    <Link to="/" className="logo">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>

                <div className="navbar_item">
                    <li>
                        <Link to="/" className="you-chan_home">Home</Link>
                    </li>

                    <li>
                        <Link to="/photo" className="you-chan_photo">Photo</Link>
                    </li>

                    <li>
                        <Link to="/clothes" className="you-chan_clothes">Clothes</Link>
                    </li>
                </div>
            </nav>
        </>
    );
}

export default Photo;