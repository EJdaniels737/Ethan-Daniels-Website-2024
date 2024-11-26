import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-me">About Me</Link></li>
                <li><Link to="/discovery">Discovery</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact-me">Contact Me</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>

        </nav>
    );
}

export default Header;
