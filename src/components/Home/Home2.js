import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/tech.svg";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";
function Home2() {
  const{t}=useTranslation()
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em", textAlign: "right" }}>
          {t("homeabout.title")}
          </h1>

            <p className="home-about-body">
            {t("homeabout.line1")}
                <br />
                <i>
                    <b className="purple">{t("homeabout.line2")}</b>
                </i>
                <br />
                {t("homeabout.line3")}
                <br />
                {t("homeabout.line4")}
            </p>
            </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Tech" />
            </Tilt>
          </Col>

        </Row>
       
      </Container>
    </Container>
  );
}
export default Home2;
