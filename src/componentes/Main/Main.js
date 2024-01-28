import React from 'react';
import './Main.css';
import arrowLeft from '../assets/icons/small-left.png';
import arrowRight from '../assets/icons/small-right.png';
import search from '../assets/icons/search.png';

const Main = () => {
    return (
        <main className='main-container'>
            <nav className='header__navigation'>
                <div className='navigation'>
                    <button className='arrow-left'>
                        <img src={arrowLeft} alt="Seta para a esquerda" />
                    </button>
                    <butto className="arrow-right">
                        <img src={arrowRight} alt="Seta para a direita" />
                    </butto>

                    <div className='header__search'>
                        <img src={search} alt='Lupa' />
                        <input id='search-input' type="text" maxLength="800" placeholder='O que você quer ouvir?' />
                    </div>
                </div>
                <div className='header__login'>
                    <button className='subscribe'>Inscrever-se</button>
                    <button className='login'>Entrar</button>
                </div>
            </nav>
        </main>
    );
};

export default Main;
