import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css'


export default function Navbar() {

     function toggleDarkMode(){
        console.log("dark mode on");
        if (document.body.style.backgroundColor==="black") {
            document.body.style.backgroundColor="white";
        } else {
            document.body.style.backgroundColor="black";
        }
        
     }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/" style={{fontSize:"2rem",marginLeft:"11px"}}>Tazza</Link>
                    
                    <div className="collapse navbar-collapse " id="navbarSupportedContent" style={{marginLeft:"3rem"}}>
                        <ul className="navbar-nav ml-auto" >
                            <li className="nav-item"><Link className="nav-link" to="/">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>

                            
                        </ul>
                       
                    </div>
                    <button type="button" class="btn btn-light" onClick={toggleDarkMode}>Lights off</button>
                </div>
            </nav>
        </div>
    )
}
