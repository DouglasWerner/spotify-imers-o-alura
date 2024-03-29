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
            <div className='playlist-container'>
                <div className='result-playlist'>
                    <div className='playlist'>
                        <h1 id='greeting'></h1>
                        <h2>Playlists do Spotify</h2>
                    </div>
                </div>

                <div class="offer__scroll-container">
                    <div class="offer__list">
                        <section class="offer__list-item">
                            <a href="" class="cards">
                                <div class="cards card1">
                                    <img src="./src/assets/playlist/1.jpeg" alt="" />
                                    <span>Boas festas</span>
                                </div>
                            </a>

                            <a href="" class="cards">
                                <div class="cards card2">
                                    <img src="./src/assets/playlist/2.png" alt="" />
                                    <span>Feitos para você</span>
                                </div>
                            </a>

                            <a href="" class="cards">
                                <div class="cards card3">
                                    <img src="./src/assets/playlist/3.jpeg" alt="" />
                                    <span>Lançamentos</span>
                                </div>
                            </a>

                            <a href="" class="cards">
                                <div class="cards card4">
                                    <img src="./src/assets/playlist/4.jpeg" alt="" />
                                    <span>Creators</span>
                                </div>
                            </a>

                            <a href="" class="cards">
                                <div class="cards card5">
                                    <img src="./src/assets/playlist/5.jpeg" alt="" />
                                    <span>Para treinar</span>
                                </div>
                            </a>

                            <a href="" class="cards">
                                <div class="cards card6">
                                    <img src="./src/assets/playlist/6.jpeg" alt="" />
                                    <span>Podcasts</span>
                                </div>
                            </a>

                            <a href="" class="cards">
                                <div class="cards card7">
                                    <img src="./src/assets/playlist/7.jpeg" alt="" />
                                    <span>Sertanejo</span>
                                </div>
                            </a>

                            <a href="" class="cards">
                                <div class="cards card8">
                                    <img src="./src/assets/playlist/8.jpeg" alt="" />
                                    <span>Samba e pagode</span>
                                </div>
                            </a>

                            <a href="" class="cards">
                                <div class="cards card9">
                                    <img src="./src/assets/playlist/9.jpeg" alt="" />
                                    <span>Funk</span>
                                </div>
                            </a>

                            <a href="" class="cards">
                                <div class="cards card10">
                                    <img src="./src/assets/playlist/10.jpeg" alt="" />
                                    <span>MPB</span>
                                </div>
                            </a>

                            <a href="" class="cards">
                                <div class="cards card11">
                                    <img src="./src/assets/playlist/11.jpeg" alt="" />
                                    <span>Rock</span>
                                </div>
                            </a>

                            <a href="" class="cards">
                                <div class="cards card12">
                                    <img src="./src/assets/playlist/12.jpeg" alt="" />
                                    <span>Hip Hop</span>
                                </div>
                            </a>

                            <a href="" class="cards">
                                <div class="cards card13">
                                    <img src="./src/assets/playlist/13.jpeg" alt="" />
                                    <span>Indie</span>
                                </div>
                            </a>

                            <a href="" class="cards">
                                <div class="cards card14">
                                    <img src="./src/assets/playlist/14.jpeg" alt="" />
                                    <span>Relax</span>
                                </div>
                            </a>

                            <a href="" class="cards">
                                <div class="cards card15">
                                    <img src="./src/assets/playlist/15.jpeg" alt="" />
                                    <span>Música Latina</span>
                                </div>
                            </a>
                        </section>
                    </div>

                    <div id="result-artist" class="hidden">
                        <div class="grid-container">
                            <div class="artist-card" id="">
                                <div class="card-img">
                                    <img id="artist-img" class="artist-img" />
                                    <div class="play">
                                        <span class="fa fa-solid fa-play"></span>
                                    </div>
                                </div>
                                <div class="card-text">
                                    <a title="Foo Fighters" class="vst" href=""></a>
                                    <span class="artist-name" id="artist-name"></span>
                                    <span class="artist-categorie">Artista</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
