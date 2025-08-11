import './css/Home.css';

import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { Menu } from 'react-feather';

import Logo from './images/Logo.png';

import feather from 'feather-icons';

function Home() {
    useEffect(() => {
        feather.replace();
    }, [])

    return (
        <>
            <div className="you-chan_image">
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

            <h1 className="you-chan_title">Watanabe You (渡辺 曜)</h1>

            <div className="about">
                <p>
                    <span style={{color: '#66c0ff'}}>Watanabe You</span> is a main character in Love Live! Sunshine!!.
                    She is a second-year student at Numazu High School. She is a member of <span
                    style={{color: '#ff9547'}}>CYaRon!</span> and <span style={{color: '#CBEFFF'}}>YYY</span>,
                    two sub-units under <span style={{color: '#009fe8'}}>Aqours</span>. Her image color is <span
                    style={{color: '#add8e6'}}>light blue</span>. <br/><br/>

                    She was a second-year student at both Uranohoshi Girls' High School prior to its closure and
                    Seishin High School (albeit temporarily) before fully integrated into Numazu High.
                </p>
            </div>

            <hr style={{marginTop: '50px', marginBottom: '20px'}} />

            <h2 className="statistics">Statistics</h2>

            <div className="you-chan_static">
                <hr className="statistics_line" />

                <div className="school_name">
                    <p style={{color: '#0077e8'}}>School</p>
                    <p>Uranohoshi Girls' High School</p>
                </div>

                <hr className="statistics_line" />

                <div className="school_years">
                    <p style={{color: '#0077e8'}}>School Years</p>
                    <p>2nd years</p>
                </div>

                <hr className="statistics_line" />

                <div className="birthday">
                    <p style={{color: '#0077e8'}}>Birthday</p>
                    <p>April 17</p>
                </div>

                <hr className="statistics_line" />

                <div className="astrological_sign">
                    <p style={{color: '#0077e8'}}>Astrological sign</p>
                    <p>Aries</p>
                </div>

                <hr className="statistics_line" />

                <div className="blood_type">
                    <p style={{color: '#0077e8'}}>Blood Type</p>
                    <p>AB</p>
                </div>

                <hr className="statistics_line" />

                <div className="height">
                    <p style={{color: '#0077e8'}}>Height</p>
                    <p>1m 57cm</p>
                </div>

                <hr className="statistics_line" />

                <div className="measurements">
                    <p style={{color: '#0077e8'}}>Measurements</p>

                    <div className="measurements_text">
                        <p><span style={{color: 'aqua'}}>Bust</span> 82cm</p>
                        <p><span style={{color: "aqua"}}>Waist</span> 57cm</p>
                        <p><span style={{color: "aqua"}}>Hips</span> 81cm</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;