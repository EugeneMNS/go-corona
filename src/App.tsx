import React from 'react';
import './App.css';

function App() {
    return (
        <div className="wrapper">
            <header className="header">
                <div className="header__container">
                   <a href="" className="header__logo"></a>
                    <nav className="header__menu menu">
                        <li className="menu__item"><a href="" className='menu__link'>HOME</a></li>
                        <li className="menu__item"><a href="" className='menu__link'>FEATURES</a></li>
                        <li className="menu__item"><a href="" className='menu__link'>SUPPORT</a></li>
                        <li className="menu__item"><a href="" className='menu__link'>CONTACT US</a></li>
                    </nav>
                    <div className="header__button">
                        <a href="" className="button button_blue">DOWNLOAD</a>
                    </div>
                </div>
            </header>
            <main className="main">
                Content
            </main>
            <footer className="footer">
                Footer
            </footer>
        </div>
    );
}

export default App;
