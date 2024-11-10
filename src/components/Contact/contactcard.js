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
            <strong>{t("contactpage.email")}: </strong>example@yourdomain.com
            <br></br>
            <strong>{t("contactpage.phone")}: </strong> +123 456 7890
            <br></br>
            <strong>{t("contactpage.address")}: </strong> 123 Your Street, City, Country
            <br />
            <br />
          </p>



        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
