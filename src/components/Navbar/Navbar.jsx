import React from 'react';
import "./Navbar.css"

function Navbar() {
    return (
        <div className="n-wrapper">
            <div className='n-left'>
                <div className="n-name">Snehadeep</div>
                <span>Toggle</span>
            </div>
            <div className='n-right'>
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testmonials</li>
                    </ul>
                </div>
                <button className='button n-button'>contact me</button>
            </div>
        </div>
    );
}

export default Navbar;