import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import "../Contact/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-page-wrapper">
      <Container fluid className="contact-page-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={8}
              className="contact-page-description"
              style={{
                paddingTop: "30px",
                paddingBottom: "50px",
                textAlign: "right",
              }}
            >
              <h1 style={{ fontSize: "2.6em" }} className="contact-page-title">
                Contact Us
              </h1>
              <p className="contact-page-body">
                We would love to hear from you! Please fill out the form below to get in touch with us.
              </p>
              <div className="contact-page-info">
                <p>
                  <strong>Email:</strong> example@yourdomain.com
                </p>
                <p>
                  <strong>Phone:</strong> +123 456 7890
                </p>
                <p>
                  <strong>Address:</strong> 123 Your Street, City, Country
                </p>
              </div>
            </Col>
            <Col md={4} className="contact-form">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label className="contact-page-label">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label className="contact-page-label">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label className="contact-page-label">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="contact-btn">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Contact;
