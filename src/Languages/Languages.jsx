import React from 'react';
import "./language.css";
import { useTranslation } from "react-i18next";
import { TbWorld } from "react-icons/tb";

function Languages() {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language; // Get current language directly from i18n

    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div className="translate flex items-center gap-1">
            <TbWorld className='translate-icon' />
            <select
                className='translate-select'
                name="lng"
                id="ln"
                onChange={handleChange}
                value={currentLanguage}
            >
                <optgroup label="Uzbek">
                    <option value="uz">Uzbek</option>
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                </optgroup>
            </select>
        </div>
    );
}

export default Languages;