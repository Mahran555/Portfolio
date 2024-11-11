import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
function Type() {
  const{t}=useTranslation()
  return (
    <Typewriter
      options={{
        strings: [
          t("companydescription.line1"),
          t("companydescription.line2"),
          t("companydescription.line3"),
          t("companydescription.line4"),
        ],
        
        
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
        delay: 80, // Adjust this to increase typing speed (lower = faster)
        
      }}
    />
  );
}

export default Type;
