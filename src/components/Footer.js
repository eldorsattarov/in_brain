import React from 'react';
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <ul className="nav flex-column">
                            <li className="nav-item w-100"><Link to="/" className="nav-link footerLogo">
                                <img src="./imagess/logo 1.png" className="w-100"/>
                            </Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">

                                    <img src="./imagess/local.png"/>
                                    <span>39, Mukhammad Yusuf Street,<br/> Tashkent, 100077</span>

                            </Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link mt-2">

                                    <img src="./imagess/telefon.png"/>
                                    <span>+998 71 203 33 38<br/>+998 71 203 33 38</span>

                            </Link></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="nav flex-column">
                            <li className="nav-item"><Link to="/" className="nav-link">
                                Социальные сети:
                            </Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">
                                <img src="./imagess/telegram.png"/>
                                <span>Telegram</span>
                            </Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">
                                <img src="./imagess/instagram.png"/>
                                <span>Instagram</span>
                            </Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">
                                <img src="./imagess/you.png"/>
                                <span>YouTube</span>
                            </Link></li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul className="nav flex-column">
                            <li className="nav-item"><Link to="/" className="nav-link">
                                Пункты меню:
                            </Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">
                                О нас
                            </Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">
                                Курсы
                            </Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">
                                Трудоустроиство
                            </Link></li>
                        </ul>
                    </div>
                    <div className="col-4 text-end">
                        <ul className="nav flex-column">
                            <li className="nav-item"><Link to="/" className="nav-link">
                                Дополнительно:
                            </Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">
                              Политика конфиденциальности
                            </Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">
                               Правила пользование
                            </Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">
                                Форум
                            </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
