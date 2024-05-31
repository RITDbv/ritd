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
import ContactForm from "components/Forms/ContactForm";

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
                    <ContactForm />
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
