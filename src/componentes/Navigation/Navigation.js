import React from 'react';
import './Navigation.css';
import logo from './logo-spotify.png';

function Navigation() {
    return (
        <div class="sidebar">
            <nav class="sidebar__navigation">
                <div class="logo">
                    <a href="">
                        <img src={logo} alt="Logo do Spotify" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <span class="fa fa-home"></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="fa fa-search"></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>  
    );
}

export default Navigation;
