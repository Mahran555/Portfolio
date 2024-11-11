// components/AccessibilityWidget.js
import React, { useState, useEffect, useRef } from "react";
import "./AccessibilityWidget.css";
import { FaUniversalAccess } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function AccessibilityWidget({ direction = "LTR" }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isNegativeContrast, setIsNegativeContrast] = useState(false);
  const [isUnderlineLinks, setIsUnderlineLinks] = useState(false);
  const [isReadableFont, setIsReadableFont] = useState(false);

  const panelRef = useRef(null); // Reference for the accessibility panel
  const iconRef = useRef(null); // Reference for the accessibility icon

  const toggleWidget = () => setIsOpen((prev) => !prev);

  const increaseFontSize = () => setFontSize((size) => Math.min(size + 2, 24));
  const decreaseFontSize = () => setFontSize((size) => Math.max(size - 2, 12));

  const toggleGrayscale = () => {
    setIsGrayscale(!isGrayscale);
    document.body.classList.toggle("grayscale");
  };
  
  const toggleHighContrast = () => {
    setIsNegativeContrast(false);
    document.body.classList.remove("negative-contrast");
    setIsHighContrast(!isHighContrast);
    document.body.classList.toggle("high-contrast");
  };
  
  const toggleNegativeContrast = () => {
    setIsHighContrast(false);
    document.body.classList.remove("high-contrast");
    setIsNegativeContrast(!isNegativeContrast);
    document.body.classList.toggle("negative-contrast");
  };
  
  const toggleUnderlineLinks = () => {
    setIsUnderlineLinks(!isUnderlineLinks);
    document.body.classList.toggle("underline-links");
  };

  const toggleReadableFont = () => {
    setIsReadableFont(!isReadableFont);
    document.body.classList.toggle("readable-font");
  };

  const resetAccessibility = () => {
    setFontSize(16);
    setIsGrayscale(false);
    setIsHighContrast(false);
    setIsNegativeContrast(false);
    setIsUnderlineLinks(false);
    setIsReadableFont(false);
    document.body.classList.remove(
      "grayscale",
      "high-contrast",
      "negative-contrast",
      "underline-links",
      "readable-font"
    );
    document.body.style.fontSize = "16px";
  };

  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Close the panel if clicked outside of both icon and panel
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`accessibility-widget ${direction === "RTL" ? "rtl" : "ltr"}`}>
      <button ref={iconRef} className="accessibility-icon" onClick={toggleWidget}>
        <FaUniversalAccess size={24} />
      </button>
      {isOpen && (
        <div className="accessibility-panel" ref={panelRef}>
          <h3>{t("accessibility.title")}</h3>
          <button onClick={increaseFontSize} className={fontSize > 16 ? "active" : ""}>
            🔍 {t("accessibility.increasetext")}
          </button>
          <button onClick={decreaseFontSize} className={fontSize < 16 ? "active" : ""}>
            🔍 {t("accessibility.decreasetext")}
          </button>
          <button onClick={toggleGrayscale} className={isGrayscale ? "active" : ""}>
            📏 {t("accessibility.grayscale")}
          </button>
          <button onClick={toggleHighContrast} className={isHighContrast ? "active" : ""}>
            ⚫ {t("accessibility.highcont")}
          </button>
          <button onClick={toggleNegativeContrast} className={isNegativeContrast ? "active" : ""}>
            👁 {t("accessibility.negativecont")}
          </button>
          <button onClick={toggleUnderlineLinks} className={isUnderlineLinks ? "active" : ""}>
            🔗 {t("accessibility.linksunderline")}
          </button>
          <button onClick={toggleReadableFont} className={isReadableFont ? "active" : ""}>
            🅰 {t("accessibility.readablefont")}
          </button>
          <button onClick={resetAccessibility} className="reset-button">
            🔄 {t("accessibility.reset")}
          </button>
        </div>
      )}
    </div>
  );
}

export default AccessibilityWidget;
