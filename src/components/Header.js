import React from 'react'
import Logo from './logo2.jpg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar">
                <div className="max-width">
                    
                    <div className="logo">
                        <a href="index.html">
                            <img src={Logo} alt="Logo"/>
                        </a>
                    </div>
                    <ul className="menu">
                        <li><Link to="/" className="menu-btn">Home</Link></li>
                        <li><Link to="/images" className="menu-btn">Images</Link></li>
                        <li><Link to="/posts" className="menu-btn">Posts</Link></li>
                        <li><Link to="/albums" className="menu-btn">Albums</Link></li>
                    </ul>
                    
                </div>
            </nav>
        </div>
        
    );
    
}

export default Header;