import './css/Home.css'

import {Link} from "react-router-dom";
import Logo from './images/Logo.png'

function Home() {
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
            </nav>

            <h1 className="you-chan_title">Watanabe You-chan (渡辺 曜)</h1>
        </>
    );
}

export default Home;