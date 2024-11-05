import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "אנחנו מהנדסי תוכנה המספקים שירותים כמו:",
          "בניית אתרים מקצועית",
          "פיתוח אפליקציות",
          "פיתוח מערכות תוכנה מותאמות אישית",
          "פתרונות אינטרנט מתקדמים",
          "אפליקציות ייחודיות בהתאם לצרכי הלקוח"
        ],
        
        
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
