import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiFlutter,
  SiWordpress,
  SiMysql,
} from "react-icons/si";
import { FaJava, FaCuttlefish, FaDatabase, FaCog } from "react-icons/fa";

function Techstack() {
  return (
    <Row className="justify-content-center" style={{ paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="d-flex justify-content-center align-items-center tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="d-flex justify-content-center align-items-center tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="d-flex justify-content-center align-items-center tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="d-flex justify-content-center align-items-center tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="d-flex justify-content-center align-items-center tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="d-flex justify-content-center align-items-center tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="d-flex justify-content-center align-items-center tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="d-flex justify-content-center align-items-center tech-icons">
        <DiPython />
      </Col>
      {/* Additional Tech Stack Icons */}
      <Col xs={4} md={2} className="d-flex justify-content-center align-items-center tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="d-flex justify-content-center align-items-center tech-icons">
        <FaCuttlefish />
      </Col>
      <Col xs={4} md={2} className="d-flex justify-content-center align-items-center tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="d-flex justify-content-center align-items-center tech-icons">
        <SiWordpress />
      </Col>
      <Col xs={4} md={2} className="d-flex justify-content-center align-items-center tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="d-flex justify-content-center align-items-center tech-icons">
        <FaDatabase />
      </Col>
      <Col xs={4} md={2} className="d-flex justify-content-center align-items-center tech-icons">
        <FaCog />
      </Col>
    </Row>
  );
}

export default Techstack;
