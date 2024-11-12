import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
function ContactCard() {
  const{t}=useTranslation()
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-00">
          <p style={{ textAlign: "right" }}>
            {t("contactpage.des1")}
            <br></br>
            {t("contactpage.des2")}
            <br />
            <br />
            <strong>{t("contactpage.email")}: </strong> s.m.cooperation.bus@gmail.com
            <br></br>
            <strong>{t("contactpage.phone")}: </strong> 
            <a href="tel:0525296220">0525296220</a>
            <br></br>
            <strong>{t("contactpage.phone")}: </strong> 
            <a href="tel:0525056571">0525056571</a>
            <br />
            <br />
          </p>



        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
