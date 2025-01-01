import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import "../privacypolicy/privacy.css"; // Ensure the CSS path is correct

const ListaPolicy = () => {
  return (
    <Container fluid className="contact-page-section">
      <Particle />
      <Container>
        <Row className="justify-content-center" style={{ padding: "10px" }}>
          <Col md={8}>
            <Card className="contact-form">
              <Card.Body>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                  <strong className="purple">Privacy Policy & Terms of Service</strong>
                </h1>
                <section>
                  <h2 className="contact-page-label">Privacy Policy</h2>
                  <p>
                    <strong>Last updated:</strong> December 18, 2024
                  </p>
                  <p>
                    At Lista - Shopping List, we value your privacy and are committed to being
                    transparent about how we handle your data. This Privacy Policy explains our
                    practices regarding data collection, storage, and usage.
                  </p>
                  <h3 className="contact-page-label">No Data Collection or Storage</h3>
                  <p>
                    We do not collect, store, use, or share any personal information or usage data
                    from users of our application. Your shopping lists and any data entered into the
                    app remain entirely private and are stored locally on your device.
                  </p>
                  <ul>
                    <li>
                      <strong>Personal Data:</strong> We do not request or collect any personal data
                      such as your name, email, or contact details.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> We do not collect any information about how you
                      use the app, your device details, or your browsing activities.
                    </li>
                  </ul>
                  <h3 className="contact-page-label">Permissions</h3>
                  <p>
                    Our app does not request any device permissions (e.g., access to your camera,
                    location, or storage) except as necessary for its core functionality. Any data
                    accessed is not transmitted, collected, or shared.
                  </p>
                  <h3 className="contact-page-label">Third-Party Services</h3>
                  <p>
                    We do not use any third-party services, libraries, or frameworks that track,
                    collect, or process user data. This includes analytics services, advertising
                    platforms, or cloud storage providers.
                  </p>
                  <h3 className="contact-page-label">Children's Privacy</h3>
                  <p>
                    Our application does not collect any data and is safe for users of all ages,
                    including children under the age of 13.
                  </p>
                  <h3 className="contact-page-label">Changes to this Privacy Policy</h3>
                  <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted
                    on this page with an updated "Last updated" date. We encourage you to review
                    this Privacy Policy periodically to stay informed.
                  </p>
                  <h3 className="contact-page-label">Contact Us</h3>
                  <p>
                    If you have any questions or concerns about this Privacy Policy, you can contact
                    us at:
                  </p>
                  <p>Email: <a href="mailto:vynix.s.m@gmail.com">vynix.s.m@gmail.com</a></p>
                </section>
                <section>
                  <h2 className="contact-page-label">Terms of Service</h2>
                  <p>
                    <strong>Last updated:</strong> December 18, 2024
                  </p>
                  <p>
                    These Terms of Service ("Terms") govern your use of the Lista - Shopping List
                    application ("App"). By using the App, you agree to these Terms. If you do not
                    agree, please do not use the App.
                  </p>
                  <h3 className="contact-page-label">1. Use of the App</h3>
                  <p>
                    Lista - Shopping List is provided for creating and managing shopping lists. You
                    are responsible for using the app in compliance with these Terms and applicable
                    laws.
                  </p>
                  <h3 className="contact-page-label">2. No Warranties</h3>
                  <p>
                    The App is provided "as is" and without warranties of any kind. We do not
                    guarantee that the App will be error-free, uninterrupted, or meet your
                    expectations.
                  </p>
                  <h3 className="contact-page-label">3. Governing Law</h3>
                  <p>
                    These Terms are governed by the laws of Israel. By using the App, you agree to
                    submit to the jurisdiction of the courts in Israel for resolving any disputes.
                  </p>
                  <h3 className="contact-page-label">Contact Us</h3>
                  <p>
                    For any questions or concerns regarding these Terms, please contact us at:
                  </p>
                  <p>Email: <a href="mailto:vynix.s.m@gmail.com">vynix.s.m@gmail.com</a></p>
                </section>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ListaPolicy;
