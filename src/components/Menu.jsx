import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import '../assets/header.css';
import Logo from '../assets/images/logo.png';
import Navbar from "./Navbar";
import Languages from '../Languages/Languages';

function Menu() {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Menyu tugmasini bosish orqali menyuni ochish va yopish
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header">
            <div className="header-wrapper flex flex-col lg:flex-row items-center justify-between px-4 py-2">
                {/* Logo */}
                <a href="#logo">
                    <img className='header-img-logo h-12' src={Logo} alt="topic logo" />
                </a>

                {/* Mobil menyu tugmasi */}
                <button
                    className="lg:hidden p-2"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                {/* Menyu va kontakt */}
                <div className={`header-innerWrapper flex flex-col lg:flex-row items-center w-full lg:w-auto mt-3 lg:mt-0 ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
                    {/* Logo matni */}
                    <span className="header-span text-center lg:text-left mb-2 lg:mb-0">
                        {t("logo-text")}
                    </span>

                    {/* Menyu */}
                    <nav className="header-nav lg:ml-4">
                        <ul className="navbar-list flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                            <li className="nav-item">
                                <a href="#why-us">{t("Nega biz")}</a>
                            </li>
                            <li className="nav-item">
                                <a href="#results">{t("Natijalar")}</a>
                            </li>
                            <li className="nav-item">
                                <a href="#courses">{t("Kurslar")}</a>
                            </li>
                            <li className="nav-item">
                                <label htmlFor="languages">{t("Tillar")}:</label>
                                <Languages />
                            </li>
                            <li className="nav-item">
                                <a href="#faq">{t("Ko’p beriladigan savollar")}</a>
                            </li>
                        </ul>
                    </nav>

                    {/* Aloqa ma'lumotlari */}
                    <a href="tel:+998333060098" className="header-contact flex items-center mt-3 lg:mt-0">
                        <span className='contact-span font-semibold text-lg'>+998 (33) 306 00 98</span>
                        <span className="ml-2">{t("Hoziroq bog'laning")}</span>
                    </a>
                </div>
            </div>
            <Navbar />
        </div>
    );
}

export default Menu;