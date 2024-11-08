import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { useTranslation } from "react-i18next";
function Projects() {
  const{t}=useTranslation()
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("projects.title")} <strong className="purple">{t("projects.title2")} </strong>
        </h1>
        <p style={{ color: "white" }}>
        {t("projects.des")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[chatify, leaf, emotion]} // Array of images for Chatify
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Has features for real-time messaging, image sharing, and message reactions."
              status="Published" // Status of the project
              liveUrl="https://chatify-49.web.app/" // Live URL for the project
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[bitsOfCode, editor, suicide]} // Array of images for Bits-0f-C0de
              title="Bits-0f-C0de"
              description="My personal blog page built with Next.js and Tailwind CSS that renders markdown content. Supports dark mode and easy blogging."
              status="Published" // Status of the project
              liveUrl="https://blogs.soumya-jit.tech/" // Live URL for the project
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[editor, chatify, leaf]} // Array of images for Editor.io
              title="Editor.io"
              description="Online code and markdown editor built with React.js. Supports HTML, CSS, and JS with instant preview and auto-save via Local Storage."
              status="Coming Soon" // Status of the project
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
