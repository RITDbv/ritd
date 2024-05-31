import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0t3cwrn", "template_95076h7", form.current, {
        publicKey: "MbG2TAgPekgQL02Du",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md="12">
            <Card className="card-plain">
              <CardBody>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>NAAM</label>
                        <Input type="text" name="name" required />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>EMAIL ADRES</label>
                        <Input type="email" name="email" required />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>TELEFOONNUMMER</label>
                        <Input type="phone" name="phone" required />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>BEDRIJF</label>
                        <Input type="text" name="company" required />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>BERICHT</label>
                        <textarea
                          className="form-control"
                          name="message"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* <input
                            type="submit"
                            value="VERZENEDEN"
                            className="btn-round float-right"
                            color="danger"
                          /> */}
                  <Button
                    className="btn-round float-right"
                    color="danger"
                    data-placement="right"
                    id="tooltip341148792"
                    type="submit"
                    // onClick={handleSubmit}
                  >
                    VERZENDEN
                  </Button>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
