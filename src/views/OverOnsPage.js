/*!

=========================================================
* RITD - Home page
=========================================================

*/
import React from "react";

// reactstrap components
import {
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import MainHeader from "components/PageHeader/MainHeader.js";
import Footer from "components/Footer/Footer.js";

export default function OverOnsPage() {
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
                <MainHeader color="squares" btn="color" title="Over ons"/>
                <div className="main">
                    <div className="section">
                        <img alt="..." className="path" src={require("assets/img/path3.png")} />
                        <Container>
                            <Row className="justify-content-between">
                                <Col className="mb-5 mb-lg-0" lg="6">
                                    <h1 className="text-white font-weight-bold">
                                        OVER RITD
                                    </h1>
                                    <p className="text-white mt-4">
                                        Wanneer alle teamleden binnen een IT project ervaren experts zijn in hun eigen vakgebied, ontstaat er iets moois. Het project loopt efficiënter, er is meer duidelijkheid en er wordt kwaliteit geleverd.
                                    </p>
                                    <p className="text-white mt-4">
                                        Door onze strenge eisen m.b.t. het aanname proces te waarborgen, kunnen wij u experts aanbieden die het verschil maken in uw project of technische IT uitdagingen. Daarnaast denkt RITD altijd aan uw wensen, of het nu gaat om budget, project uitvoer, structuur opzetten, een optimalisatie, automatisering, architectuur of consultancy. Wij kijken vrijblijvend naar uw wensen en bieden u alleen aan wat u echt nodig heeft. Zonder tussenschakels en onnodige kosten.
                                    </p>
                                </Col>
                                <Col lg="6">
                                    <img src={require("assets/img/overons-1.jpg")} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <br></br>
                                    <h2 className="text-white font-weight-bold">
                                    ONZE MISSIE
                                    </h2>
                                    <p className="text-white mt-4">
                                    RITD staat voor ROOT IT DEVELOPMENT. RITD is ontstaan uit een passie voor technologie en software ontwikkeling. Waar anderen zeggen dat het onmogelijk is, willen wij de pioniers zijn die de uitdagingen op het vlak van softwareontwikkeling aan gaan, om het onmogelijke, mogelijk te maken.                                    </p>
                               
                                    <p className="text-white mt-4">
                                    Onze missie is namelijk om de grenzen van technologie verleggen om software (producten) van het hoogste niveau te creëren. Wij zijn daarbij gefocust op de technologieën van de toekomst zoals; AI, machine learning, algoritmes, cloud, AR, VR en data.<br/><br/><br/></p>                                
                                </Col>
                            </Row>
                            <Row className="justify-content-between">
                            <Col lg="6">
                                    <img src={require("assets/img/overons-2.jpg")} />
                                </Col>
                                <Col className="mb-5 mb-lg-0 mt-5 mt-lg-0" lg="6">
                                    <h1 className="text-white font-weight-bold">
                                    ONZE EXPERTS
                                    </h1>
                                    <p className="text-white mt-4">
                                    RITD neemt alleen genoegen met de beste software developers in Nederland. Onze experts moeten voldoen aan een flink aantal eisen voordat zij bij ons mogen starten. Een aantal van deze voorwaarden zijn: minimaal 7 jaar ervaring in het vakgebied, minimaal een HBO opleidingsniveau, communicatief vaardig in woord en schrift, een groot verantwoordelijkheidsgevoel en de developers moeten een minimale score van 95% behalen op de RITD test.                                    </p>
                                    <p className="text-white mt-4">
                                    Onze software developers werken maximaal 36 uur per week aan uw project. De overige uren werken zij aan interne projecten van RITD. Onze developers hebben verschillende omgevingen gezien, van overheid tot bancaire evenals de commerciële sector. Ook hebben zij kennis van minimaal drie verschillende programmeer talen en de verschillen tooling technieken en methodieken die hieraan verbonden zijn.                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
