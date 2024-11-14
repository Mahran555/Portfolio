import React, { useState } from "react";
import { Card, Carousel, Modal, Button } from "react-bootstrap";
import "./ProjectCard.css";
import { useTranslation } from "react-i18next";

function ProjectCard({ imgPaths, title, description, status, liveUrl, direction }) {
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const handleShow = (index) => {
    setCurrentIndex(index);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgPaths.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgPaths.length - 1 : prevIndex - 1
    );
  };

  // Determine if RTL to apply conditional styling
  const isRTL = direction === "rtl";

  return (
    <>
      <Card className={`project-card-view ${isRTL ? "rtl" : ""}`}>
        <Carousel>
          {imgPaths.map((imgPath, index) => (
            <Carousel.Item key={index}>
              <Card.Img
                variant="top"
                src={imgPath}
                alt={`slide ${index}`}
                onClick={() => handleShow(index)}
                style={{ cursor: "pointer" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className={`project-card-footer ${!liveUrl ? "center-status" : ""}`}>
            {status === t("prevprojects.statuspublished") && liveUrl ? (
              <>
                <Button
                  variant="primary"
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-button"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: '20px', // Adjust this value as needed
                    fontSize: "20px"

                  }}
                >
                  {t("prevprojects.btnlive")}
                </Button>
                <p style={{ fontSize: "20px" }}><strong style={{ fontSize: "20px" }}>{t("prevprojects.statustitle")}</strong> :{status}</p>
              </>
            ) : (
              <p style={{ fontSize: "20px" }}><strong style={{ fontSize: "20px" }}>{t("prevprojects.statustitle")}:</strong> :{status}</p>
            )}
          </div>
        </Card.Body>
      </Card>

      {/* Modal with transparent background and larger image */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="custom-modal"
      >
        <Modal.Body className="d-flex justify-content-center align-items-center">
          <Button variant="secondary" onClick={handlePrev}>&lt;</Button>
          <img
            src={imgPaths[currentIndex]}
            alt="Large view"
            className="enlarged-image"
          />
          <Button variant="secondary" onClick={handleNext}>&gt;</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCard;
