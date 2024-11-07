import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", lang: "English" },
    { code: "ar", lang: "Arabic" },
    { code: "he", lang: "Hebrew" },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };
    useEffect (()=>{
        document.body.dir = i18n.dir()
    },[i18n,i18n.language])
    return (
        <div className="language-selector">
            <select
                value={i18n.language}
                onChange={changeLanguage}
                className="language-dropdown"
            >
                {languages.map((lng) => (
                    <option key={lng.code} value={lng.code}>
                        {lng.lang}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;
