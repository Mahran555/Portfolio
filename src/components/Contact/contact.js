import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import "../Contact/contact.css";
import ContactCard from "../Contact/contactcard.js";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
function Contact() {
  const{t}=useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email syntax validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        setErrorMessage(t("contactpagealert.erroremail"));
        return;
    }

    // Check if message is empty
    if (!formData.message.trim()) {
        setErrorMessage(t("contactpagealert.errormsg"));
        return;
    }

    // Check if name is empty
    if (!formData.name.trim()) {
        setErrorMessage(t("contactpagealert.errorname"));
        return;
    }

    emailjs.send(
      "service_6nogbev", // Replace with your EmailJS service ID
      "template_9po5jas", // Replace with your EmailJS template ID
      formData,
      "-eJi2l4HYwiLpoZTr" // Replace with your EmailJS user ID (or public key if configured)
    ).then(
      (result) => {
        setSuccessMessage(t("contactpagealert.succalert"));
        setErrorMessage(""); // Clear any previous error messages
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => setSuccessMessage(""), 5000); // Clear the message after 5 seconds
      },
      (error) => {
        setErrorMessage(t("contactpagealert.failedalert"));
        setSuccessMessage(""); // Clear any previous success messages
        setTimeout(() => setErrorMessage(""), 5000); // Clear the error message after 5 seconds
      }
    );
  };

  return (
      <Container fluid className="contact-page-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
               md={7}
               style={{
                 justifyContent: "center",
                 paddingTop: "30px",
                 paddingBottom: "50px",
               }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">{t("contactpage.title")}</strong>
            </h1>
            <ContactCard/>
            </Col>
            <Col md={5} 
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
            className="contact-form">
              
              {/* Success Message */}
              {successMessage && (
                <Alert className="custom-alert">
                  {successMessage}
                </Alert>
              )}

              {/* Error Message */}
              {errorMessage && (
                <Alert className="custom-alert">
                  {errorMessage}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
              <Form.Label className="contact-page-label">{t("contactpagecard.nametitle")}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onInvalid={(e) => e.target.setCustomValidity(t("contactpagealert.errorname1"))}
                onInput={(e) => e.target.setCustomValidity("")} // Reset custom validity message on input
                required
                className="contact-input"
                placeholder={t("contactpagecard.nameplaceholder")}
              />
            </Form.Group>
                <Form.Group controlId="formEmail">
                <Form.Label className="contact-page-label">{t("contactpagecard.emailtitle")}</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onInvalid={(e) => e.target.setCustomValidity(t("contactpagealert.erroremail"))}
                  onInput={(e) => e.target.setCustomValidity("")} // Reset custom validity message on input
                  required
                  className="contact-input"
                  placeholder={t("contactpagecard.emailplaceholder")}
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
              <Form.Label className="contact-page-label">{t("contactpagecard.messagetitle")}</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                onInvalid={(e) => e.target.setCustomValidity(t("contactpagealert.errormsg"))}
                onInput={(e) => e.target.setCustomValidity("")} // Reset custom validity message on input
                required
                className="contact-input"
                placeholder={t("contactpagecard.messageplaceholder")}
              />
            </Form.Group>
                <Button type="submit" className="contact-btn">
                {t("contactpagecard.sendbtn")}
                </Button>
              </Form>
            </Col>
          </Row>
          <Row className="justify-content-center" style={{ paddingBottom: "250px" }}></Row>
        </Container>
      </Container>
  );
}

export default Contact;
