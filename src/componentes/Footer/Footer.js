import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='container'>
            <div className="text">
                <a className='link' href=''>
                    <p className='footer-title'> Testar o Premium de graça </p>
                    <p className='footer-subtitle'>  Inscreva-se para curtir música ilimitada e podcasts só com alguns
                        anúncios. Não precisa de cartão de crédito. </p>
                </a>
            </div>

            <button type='button'> Inscreva-se grátis. </button>

        </footer>
    );
};

export default Footer;
