import React from 'react';
import './Navigation.css';
import logo from '../assets/icons/logo-spotify.png';
import Library from '../Library/Library';

function Navigation() {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <img src={logo} alt="Logo do Spotify" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <span className="fa fa-home"></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span className="fa fa-search"></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <Library />
        </div>  
    );
}

export default Navigation;
