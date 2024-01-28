import React from 'react';
import './Library.css';

const Library = () => {
    return (
        <div className='library'>
            <div className='library__content'>
                <button className='library__button'>
                    <span className='fa fas fa-book'></span>
                    <span>Sua biblioteca</span>
                </button>
                <span className='fa fa-plus'></span>
            </div>
            <div className='scroll-playlist-podcasts'>
                <section className='section-playlists'>
                    <div className='section-playlists__content'>
                        <span className='text title'>Crie sua primeira playlist</span>
                        <span className='text subtitle'>É fácil, vamos te ajudar.</span>
                        <button className='section__button'>Criar playlist</button>
                    </div>
                </section>
                <section className='section-podcasts'>
                    <div className='section-podcasts__content'>
                        <span className='text title'>Que tal seguir um podcast novo?</span>
                        <span className='text subtitle'>Avisaremos você sobre novos epsódios.</span>
                        <button className='section__button'>Explore podcasts</button>
                    </div>
                </section>
            </div>
            <section className='section-footer'>
                <ul className='section-footer__list'>
                    <li className='footer__item'>
                        <a className="footer__text" href=''>Legal</a>
                    </li>
                    <li className='footer__item'>
                        <a className="footer__text" href=''>Centro de Privacidade</a>
                    </li>
                    <li className='footer__item'>
                        <a className="footer__text" href=''>Política de privacidade</a>
                    </li>
                    <li className='footer__item'>
                        <a className="footer__text" href=''>Sobre anúncios</a>
                    </li>
                    <li className='footer__item'>
                        <a className="footer__text" href=''>Acessibilidade</a>
                    </li>
                    <li className='footer__item'>
                        <a className="footer__text" href=''>Notice at Collection</a>
                    </li>
                    <li className='footer__item'>
                        <a className="footer__text" href=''>Your Privacy Choices</a>
                    </li>
                    <li className='footer__item'>
                        <a className="footer__text cookies" href=''>Cookies</a>
                    </li>
                    <li className='footer__item'>
                        <a className="footer__text" href=''>Início</a>
                    </li>
                </ul>
            </section>
            <div className='languages'>
                <button className='languages__button'>
                    <span className='fa fa-globe'></span>
                    <span className='languages__text'>Português (Brasil)</span>
                </button>
            </div>
        </div>
    );
};

export default Library;
