import './css/Home.css';

import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { Menu } from 'react-feather';

import Idol from './images/You-chan_idol.png'
import Logo from './images/logo.png';
import SignIn from './images/sign.png'

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

                <hr className="statistics_line" />

                <div className="signature">
                    <p style={{color: '#0077e8'}}>Signature</p>

                    <img style={{width: '28%'}} src={SignIn} alt="You-chan SignIn logo" />
                </div>

                <hr className="statistics_line" />

                <div className="skills">
                    <p style={{color: '#0077e8'}}>Skills</p>
                    <p>High Diving</p>
                </div>

                <hr className="statistics_line" />

                <div className="hobbies">
                    <p style={{color: '#0077e8'}}>Hobbies</p>
                    <p>Weight Training, Running, Uniforms</p>
                </div>

                <hr className="statistics_line" />

                <div className="like_food">
                    <p style={{color: '#0077e8'}}>Like Food</p>
                    <p>Salisbury Steak, Oranges</p>
                </div>

                <hr className="statistics_line" />

                <div className="dislike_food">
                    <p style={{color: '#0077e8'}}>Dislike Food</p>
                    <p>Sashimi, Anything too dry</p>
                </div>
            </div>

            <hr style={{marginTop: '50px', marginBottom: '20px'}} />

            <Description />
        </>
    );
}

function Description() {
    return (
        <div className="description">
            <div className="idol">
                <img src={Idol} alt="You-chan idol style" style={{width: '45%'}} />
            </div>

            <p className="description_text">
                Aye aye! Full speed ahead!! Hey there, this is Watanabe You!♪ Whoops, maybe I surprised you <br/>
                with the sudden loud voice. Sorry about that. <br/>
                Ah, “aye aye” is sailing lingo. I really like ships, so it kinda comes out whenever I get excited~. <br/>
                Yeah! I heard a new stage was about to begin, and I’ve been super excited since morning~! <br/>
                I couldn’t contain it, and before I knew it I dove into the sea!☆ <br/>
                Ehehe, it felt great!♪ <br/>
                Being invited by Chika and becoming a school idol, learning songs and dances, it all felt like an <br/>
                unknown world, but after starting, it was just so fun… <br/>
                Hehe, and I’ve gotten to the point where I can make our costumes! <br/>
                Pulling off lots of live shows, delivering our music to so many people, and now from here… <br/>
                I think we are gonna continue to grow even more. <br/>
                Aqours is gonna level up on this new stage, too. <br/>
                To that end, it’d be swell if you cheered us on!♪
            </p>

            <div></div>
        </div>
    )
}

export default Home;