import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import translationIcon from "../Assets/translation.png";

const languages = [
    { code: "en", lang: "English" },
    { code: "ar", lang: "Arabic" },
    { code: "he", lang: "Hebrew" },
];

const LanguageSelector = ({ onLanguageSelect }) => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const selectorRef = useRef(null);

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
        onLanguageSelect(); // Collapse navbar on language selection
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n.language]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectorRef.current && !selectorRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="language-selector" ref={selectorRef}>
            <div onClick={toggleDropdown} className="dropdown-toggle" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <img src={translationIcon} alt="Language Icon" className="language-icon" style={{ marginRight: "2px" }} />
                {i18n.language.toUpperCase()}
            </div>
            {isOpen && (
                <div className="language-menu">
                    {languages.map((lng) => (
                        <div
                            key={lng.code}
                            className="language-option"
                            onClick={() => changeLanguage(lng.code)}
                        >
                            {lng.lang}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
