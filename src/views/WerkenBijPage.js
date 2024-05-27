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
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Footer from "components/Footer/Footer.js";
import MainNavbar from "components/Navbars/MainNavbar";

export default function WerkenBijPage() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)"
    );
  };
  return (
    <>
      <MainNavbar />
      <div className="wrapper werkenbij">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">

            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />

                </Col>
                <Col className="mt-5 mb-lg-0" lg="12">
                  <h1 className="text-white font-weight-bold werkenbij_title">
                    DE IDEALE MIX TUSSEN LOONDIENST EN ZZP
                  </h1>
                  <p className="text-white mt-5">WERKEN BIJ RITD</p>
                  <Row className="mt-5">
                    <Col lg="3">
                      <p className="text-white mt-4"><strong>ZEKERHEID</strong></p>
                      <hr className="line-danger" />
                      <p className="text-white mt-4">DIRECT VAST CONTRACT</p>
                    </Col>
                    <Col lg="3">
                      <p className="text-white mt-4"><strong>GELIJKHEID</strong></p>
                      <hr className="line-danger" />
                      <p className="text-white mt-4">COLLEGA’S VAN NIVEAU</p>
                    </Col>
                    <Col lg="3">
                      <p className="text-white mt-4"><strong>UITDAGING</strong></p>
                      <hr className="line-danger" />
                      <p className="text-white mt-4">INNOVATIEVE PROJECTEN</p>
                    </Col>
                    <Col lg="3">
                      <p className="text-white mt-4"><strong>COMPENSATIE</strong></p>
                      <hr className="line-danger" />
                      <p className="text-white mt-4">AANGEPASTE SALARIS</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {/* <div
                    className="square square-1"
                    id="square1"
                    style={{ transform: squares1to6 }}
                  /> */}
              {/* <div
                    className="square square-2"
                    id="square2"
                    style={{ transform: squares1to6 }}
                  /> */}

              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
        <div className="section">
          <img alt="..." className="path" src={require("assets/img/path1.png")} />
          <Container>
            <h1 className="text-white font-weight-bold">
              WAAROM RITD?
            </h1>
            <Row className="justify-content-between">
              <Col className="mb-5 mb-lg-0" lg="6">
                <h3 className="text-white font-weight-bold">RITD REGELT OPDRACHTEN</h3>
                <p className="text-white mt-4">
                  Om de stress weg te nemen van het zoeken naar projecten, zorgt RITD voor het binnen halen van alle projecten. Wij zorgen voor het werk en zelfs zonder project krijg jij altijd salaris. Daarnaast hebben wij ook interne projecten lopen die gefocust zijn op de technologie van de toekomst. Daar zal je ook bij betrokken zijn.                                    </p>
              </Col>
              <Col lg="6">
                <img src={require("assets/img/werkenbij-1.jpeg")} />
                <p><br/><br/><br/></p>
              </Col>
            </Row>
            <Row className="justify-content-between">
              <Col lg="6">
                <img src={require("assets/img/werkenbij-2.jpg")} />
                <p><br/><br/><br/></p>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="6">
                <h3 className="text-white font-weight-bold">RITD REGELT PAPIERWERK</h3>
                <p className="text-white mt-4">
                  Als werkgever regelt RITD alle het administratieve papierwerk. Jij hoeft niet langer je tijd te verdoen met zorgen over btw-aangiftes of het opstellen van facturen. Op deze manier kan jij je weer focussen op wat jij het liefste doet, software ontwikkelen.</p>                                    </Col>
            </Row>
            <Row className="justify-content-between">
              <Col className="mb-5 mb-lg-0" lg="6">
                <h3 className="text-white font-weight-bold">RITD ZORGT VOOR ZEKERHEID</h3>
                <p className="text-white mt-4">
                  Bij RITD willen we zorgen voor stabiliteit voor onze software developers. Naast een stabiel salaris zorgen wij onder andere voor verzekeringen en doorbetaling bij ziekte. Op deze manier verminderen we niet alleen de zorgen van nu, maar ook de zorgen van later.</p>
              </Col>
              <Col lg="6">
                <img src={require("assets/img/werkenbij-3.jpg")} />
                <p><br/><br/><br/></p>
              </Col>
            </Row>
            <Row className="justify-content-between">
              <Col lg="6">
                <img src={require("assets/img/werkenbij-4.jpg")} />
              </Col>
              <Col className="mb-5 mb-lg-0 mt-5 mt-lg-0" lg="6">
                <h3 className="text-white font-weight-bold">JIJ BEHOUDT JE VRIJHEID</h3>
                <p className="text-white mt-4">
                  Wij werken op basis van vertrouwen, wat jou de mogelijkheid geeft om flexibel om te gaan met je werktijden. Wij geloven dat iedereen zelfstandig is en de verantwoordelijkheid draagt van zijn of haar eigen werkzaamheden.
                </p>
              </Col>

            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
