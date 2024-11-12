import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Using react-icons for the WhatsApp icon
import "./WhatsAppButton.css"; // Create a CSS file for styling

const WhatsAppButton = () => {
  const [showNumbers, setShowNumbers] = useState(false);
  const menuRef = useRef(null);

  // Toggle the visibility of the numbers
  const toggleNumbers = () => setShowNumbers((prev) => !prev);

  // Close the menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowNumbers(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // WhatsApp links with country code and phone number
  const phoneNumbers = [
    { number: "0525296220", link: "https://wa.me/972525296220" },
    { number: "0525056571", link: "https://wa.me/972525056571" },
  ];

  return (
    <div className="whatsapp-container" ref={menuRef}>
      <button className="whatsapp-icon" onClick={toggleNumbers}>
        <FaWhatsapp size={60} color="#25D366" /> {/* Adjust size */}
      </button>
      {showNumbers && (
        <div className="whatsapp-numbers">
          {phoneNumbers.map((contact, index) => (
            <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer">
              {contact.number}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
