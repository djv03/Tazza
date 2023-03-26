import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css'
import './navbar.css'


export default function Navbar() {

    function toggleDarkMode() {
        if (document.body.style.backgroundColor === "black") {
            document.body.style.backgroundColor = "white";
            document.querySelector('.navbar').style.backgroundColor = 'rgb(200, 200, 200)';
            document.querySelector('#darkmodebtn').innerHTML="Lights off"
            
            //  console.log("dark mode off");
            
        } else {
            document.body.style.backgroundColor = "black";
            document.querySelector('.navbar').style.backgroundColor = 'black';
            document.querySelector('#darkmodebtn').innerHTML="Lights on"
            // console.log("dark mode on");
        }

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                
                    <Link id='logo'  to="/" >Tazza</Link>
                    
                    <div className=" " id="link-container" >
                        <ul className="" id='alllinks'>
                            <li className="nav-item"><Link className="category" to="/">General</Link></li>
                            <li className="nav-item"><Link className="category" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="category" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="category" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="category" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="category" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="category" to="/technology">Technology</Link></li>    
                        </ul>
                    </div>
                
                    <button type="button" className="btn btn-dark" id='darkmodebtn' onClick={toggleDarkMode}>Lights off</button>
            </nav>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/" >Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto" >
                        <li className="nav-item"><Link className="category" to="/">General</Link></li>
                        <li className="nav-item"><Link className="category" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="category" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="category" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="category" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="category" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="category" to="/technology">Technology</Link></li>
                    </ul>
                </div>
            </nav> */}
        </div>
    )
}
