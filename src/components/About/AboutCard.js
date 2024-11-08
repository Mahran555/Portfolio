import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
function AboutCard() {
  const{t}=useTranslation()
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-00">
          <p style={{ textAlign: "right" }}>
          {t("aboutus.par1")}
            <br />
            <br />
            {t("aboutus.par2")}
            <br />
            <br />
            {t("aboutus.par3")}
            <br />
            <br />
          </p>



        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
