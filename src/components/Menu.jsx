import { useTranslation } from "react-i18next";
import React from "react";
import '../assets/header.css';
import Logo from '../assets/images/logo.png';
import Languages from '../Languages/Languages';

function Menu() {
    const { t } = useTranslation();
    return (
        <div className="header ">
            <div className="header-wrapper container mx-auto flex flex-col lg:flex-row items-center justify-between">
                <a href="#logo">
                    <img className='header-img-logo' src={Logo} alt="topic logo" />
                </a>
                <div className="header-innerWrapper flex mt-3 items-center">
                    <span className="header-span">{t("logo-text")}</span>
                    <nav className="header-nav navbar">
                        <ul className="navbar-list">
                            <li className="nav-item">{t("Nega biz")}</li>
                            <li className="nav-item">{t("Natijalar")}</li>
                            <li className="nav-item">{t("Kurslar")}</li>
                            <li className="nav-item">{t("Ko’p beriladigan savollar")}</li>
                            
                        </ul>
                    </nav>
                    <Languages/>
                </div>
            </div>
        </div>
    );
}

export default Menu;