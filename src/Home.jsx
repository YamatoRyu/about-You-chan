import './css/Home.css'

import { Link } from "react-router-dom";
import React, { useEffect } from 'react'
import { Menu } from 'react-feather'

import Logo from './images/Logo.png'
import feather from 'feather-icons'

function Home() {
    useEffect(() => {
        feather.replace();
    }, [])

    return (
        <>
            <div className="you-chan_image"></div>

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

                <button className="menu_bar">
                    <Menu className="menu" />
                </button>
            </nav>

            <h1 className="you-chan_title">Watanabe You (渡辺 曜)</h1>
        </>
    );
}

export default Home;