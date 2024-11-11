import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useTranslation } from "react-i18next";

function Home() {
  const{t}=useTranslation()
  const{line1,line2} = t("homedescription");
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{ paddingBottom: 20 }} className="heading">
                {t("greeting")}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
               {line1}
                <strong className="main-name"> {line2}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

       
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
