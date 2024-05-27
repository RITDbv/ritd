/*!

=========================================================
* RITD - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useRef } from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import emailjs from '@emailjs/browser';
// reactstrap components
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

// core components
import MainHeader from "components/PageHeader/MainHeader";
import Footer from "components/Footer/Footer.js";
import MainNavbar from "components/Navbars/MainNavbar";

export default function ContactPage() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    document.body.classList.toggle("body-red");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
      document.body.classList.toggle("body-red");
    };
  }, []);

  const form = useRef();

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   company: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // emailjs.send(
  //   //   'service_0t3cwrn', // Replace with your EmailJS service ID
  //   //   'template_95076h7', // Replace with your EmailJS template ID
  //   //   formData,
  //   //   'your_user_id' // Replace with your EmailJS user ID
  //   // ).then((response) => {
  //   //   console.log('SUCCESS!', response.status, response.text);
  //   //   alert('Message sent successfully!');
  //   // }, (err) => {
  //   //   console.log('FAILED...', err);
  //   //   alert('Failed to send message. Please try again.');
  //   // });


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0t3cwrn', 'template_95076h7', form.current, {
        publicKey: 'MbG2TAgPekgQL02Du',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };
  return (
    <>
      <MainNavbar />
      <div className="wrapper">
        <MainHeader color="squares" btn="color" title="Contact" />
        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg="10">
                <h1 className="text-center font-weight-bold">
                  WAAR KUNNEN WIJ U MEE HELPEN?
                </h1>
                <p className="text-center">
                  Heeft u een uniek project? Of twijfelt u welke service het
                  beste bij uw uitdaging past? Neem gerust contact met ons op en
                  wij helpen u met vrijblijvend advies gericht op uw situatie.
                  <br />
                  Ook als u verdere vragen heeft over bijv. onze experts,
                  werkwijze of projecten, neem dan vooral contact met ons op.
                  Wij geven u graag een volledig beeld van wat onze experts u te
                  bieden hebben.
                </p>
                <br />
              </Col>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h5 className="text-on-back">RITD</h5>
                  </CardHeader>
                  <CardBody>
                    <form ref={form} onSubmit={sendEmail}>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>NAAM</label>
                            <Input
                              type="text"
                              name="name"
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>EMAIL ADRES</label>
                            <Input
                              type="email"
                              name="email"
                              required
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>TELEFOONNUMMER</label>
                            <Input
                              type="phone"
                              name="phone"
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>BEDRIJF</label>
                            <Input
                              type="text"
                              name="company"
                              required
                            />
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
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">ADRES:</h4>
                    <p>
                    Zilverparkkade 33
                      <br />
                      8232 WJ Lelystad
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">TELEFOONNUMMER:</h4>
                    <p>0320 859 935</p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="tim-icons icon-email-85" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">EMAIL:</h4>
                    <p>info@ritd.nl</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
