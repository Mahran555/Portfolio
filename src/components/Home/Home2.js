import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em", textAlign: "right" }}>
              הרשו לנו <span className="purple"> להציג </span> את עצמנו
          </h1>

            <p className="home-about-body">
                אנחנו חברת, מהנדסי תוכנה אנו מתמחים במתן שירותים
                <br />
                <br />שירותים כמו
                <i>
                    <b className="purple">בניית אתרים, פיתוח אפליקציות לנייד ולווב, מערכות תוכנה מותאמות אישית ופתרונות אינטרנט מתקדמים </b>
                </i>
                <br />
                <br />
                עם ניסיון עשיר בתחום, אנו מחויבים לספק פתרונות מקצועיים ואיכותיים המותאמים לצרכי הלקוח
                <br />
            </p>
            </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>

        </Row>
       
      </Container>
    </Container>
  );
}
export default Home2;
