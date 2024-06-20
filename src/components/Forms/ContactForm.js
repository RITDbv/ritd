import React, { useRef, useState } from "react";
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
  // const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    file: null,
    message: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "application/pdf" || file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
        setFormData({
            ...formData,
            file: file
        });
    } else {
        alert("Please upload a PDF or Word document");
    }
};


const handleSubmit = async (e) => {
  e.preventDefault();
  const formDataToSend = new FormData();
  Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
  });

  try {
      const response = await fetch('http://localhost:5000/submit-form', {
          method: 'POST',
          body: formDataToSend
      });
      const result = await response.json();
      console.log('Server response:', result);
  } catch (error) {
      console.error('Error submitting form:', error);
  }
};


  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_0t3cwrn", "template_95076h7", form.current, {
  //       publicKey: "MbG2TAgPekgQL02Du",
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //         alert("Message sent successfully!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //         alert("Failed to send message. Please try again.");
  //       }
  //     );
  // };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md="12">
            <Card className="card-plain">
              <CardBody>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>NAAM</label>
                        <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>EMAIL ADRES</label>
                        <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>TELEFOONNUMMER</label>
                        <Input type="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>BEDRIJF</label>
                        <Input type="text" name="company" value={formData.company} onChange={handleChange} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>File upload (PDF or Word):</label>
                        <Input type="file" name="file" onChange={handleFileChange} required />
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
                          value={formData.message} onChange={handleChange} required
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
