import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


//manager imports
import employeeList from "../../Assets/ManagerProject/employee list.png";
import homePage2 from "../../Assets/ManagerProject/home page 2.png";
import homePage from "../../Assets/ManagerProject/home page.png";
import workSchedulePage from "../../Assets/ManagerProject/work schedule page.png";
import { useTranslation } from "react-i18next";

//Riyda app imports
import login from "../../Assets/RiydaApp/login.png";
import map from "../../Assets/RiydaApp/map.png";
import paying from "../../Assets/RiydaApp/paying.png";
import reservationsSchedule from "../../Assets/RiydaApp/reservations schedule.png";
import serviceInfo from "../../Assets/RiydaApp/service info.png";
import services from "../../Assets/RiydaApp/services.png";
import sidebar from "../../Assets/RiydaApp/sidebar.png";


// Tmrdparts imports
import aboutUs from "../../Assets/Tmrdparts/about us.png";
import contactUs from "../../Assets/Tmrdparts/contact us.png";
import Homepage from "../../Assets/Tmrdparts/homepage.png";
import Homepage2 from "../../Assets/Tmrdparts/homepage2.png";
import Homepage3 from "../../Assets/Tmrdparts/homepage3.png";
import pickingTruckModel from "../../Assets/Tmrdparts/picking truck model.png";
import productsPage from "../../Assets/Tmrdparts/products page.png";

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
              imgPaths={[map,services, sidebar, paying, reservationsSchedule,login, serviceInfo]} // Array of images for RiydaApp
              title="Riyda App"
              description="A convenient app for booking services like stadiums, swimming pools, and more, built using Flutter and Firebase. Users can reserve, pay securely, and view past bookings with ease"
              status="Coming Soon" // Status of the project
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[homePage,employeeList, homePage2,workSchedulePage]} // Array of images for Bits-0f-C0de
              title="Manager System"
              description="A streamlined website for managing employee data, schedules, salaries, and vacation requests with visual insights for efficient workforce management."
              status="Private" // Status of the project
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[Homepage,aboutUs, contactUs, Homepage2, Homepage3, pickingTruckModel, productsPage]} // Array of images for Tmrdparts
              title="Tmrdparts Website"
              description="A comprehensive catalog showcasing truck parts for sale, organized into easy-to-navigate categories, helping customers quickly find parts they need for various truck models."
              status="Published" // Status of the project
              liveUrl="https://tmrdparts.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
