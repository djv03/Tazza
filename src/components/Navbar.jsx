import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import '../App.css'
import './navbar.css'

import { FaTimes } from 'react-icons/fa'
import { AiOutlineMenu, AiFillGithub } from 'react-icons/ai'


 function Navbar({ darkMode, setDarkMode }) {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header >
            <div className="nav-container ">
                <Link id='logo' to="/" >Tazza</Link>
                <nav ref={navRef}>
                    <ul>
                        <li className="nav-item"><Link className="category" to="/">General</Link></li>
                        <li className="nav-item"><Link className="category" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="category" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="category" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="category" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="category" to="/sports">Sports</Link></li>
                    </ul>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <AiOutlineMenu />
                </button>
            </div>
            <div className="btn-container">
                <a href='https://github.com/djv03/Tazza' className="github">
                    <AiFillGithub />
                </a>
            </div>
        </header>
    )
}

export default Navbar