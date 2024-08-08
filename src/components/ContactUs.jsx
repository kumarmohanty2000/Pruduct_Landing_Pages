import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const ContactUs = () => {
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      setSubmitted(true);
    }
    setValidated(true);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center my-5">
        <Col md={8} lg={6} >
          <h2 className="text-center mb-4">Contact Us</h2>
          {submitted && (
            <Alert variant="success">Thank you for your message!</Alert>
          )}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your email"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                required
                placeholder="Your message"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a message.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
