import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-00">
          <p style={{ textAlign: "right" }}>
            שלום לכולם , אנחנו <span className="purple"> חברת ש.מ</span>

            <br />
            I .
            <br />
            I .
            <br />
            <br />
          </p>



        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
