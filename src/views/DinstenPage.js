/*!

=========================================================
* RITD - Home page
=========================================================

*/
import React from "react";

// reactstrap components
import {
    Button,
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
} from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import MainHeader from "components/PageHeader/MainHeader.js";
import Footer from "components/Footer/Footer.js";

export default function DienstenPage() {
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
                <MainHeader color="squares" btn="color" title="Diensten"/>
                <div className="main">
                    <div className="section">
                        <img alt="..." className="path" src={require("assets/img/path2.png")} />
                        <Container>
                            <Row className="justify-content-between">
                                <Col className="mb-5 mb-lg-0" lg="6">
                                    <h2 className="text-white font-weight-bold">
                                    SOFTWARE ARCHITECTUUR
                                    </h2>
                                    <p className="text-white mt-4">
                                    Onze developers staan voor u klaar om op basis van conceptuele ideeën, concrete software oplossingen voor u te bedenken. Tijdens dit proces kijken wij uitgebreid naar de mogelijkheden voor het ontwikkelen van de software. Aan de hand van uw wensen leveren wij een totaalontwerp voor het ontwikkelen van de software.
                                    </p>
                                    <Button
                                        className="mt-4 btn-color-1"
                                        href="/architectuur"
                                    >
                                        Lees meer
                                    </Button>
                                </Col>
                                <Col lg="6">
                                    <img src={require("assets/img/img2.jpg")} />
                                </Col>
                            </Row>
                        </Container>
                    </div>


                    <div className="section">
                        <Container>
                            <Row className="justify-content-between">
                            <Col lg="6">
                                    <img src={require("assets/img/img3.jpg")} />
                                </Col>
                                <Col className="mb-0 mb-lg-5 mt-4 mt-lg-0" lg="6">
                                    <h2 className="text-white font-weight-bold">
                                    PRODUCT ONTWIKKELING
                                    </h2>
                                    <p className="text-white mt-4">
                                    Onze software developers kunnen bij lopende projecten bijspringen of software totaalontwerpen uitvoeren. Zij kunnen zelfstandig te werk gaan of met uw huidige team samen werken om het concept te ontwikkelen tot een volwaardig eindproduct.
                                    </p>
                                    <Button
                                        className="mt-4 btn-color-2"
                                        href="/product-ontwikkeling"
                                    >
                                        Lees meer
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>


                    <div className="section">
                        {/* <img alt="..." className="path" src={require("assets/img/path5.png")} /> */}
                        <Container>
                            <Row className="justify-content-between">
                                <Col className="mb-5 mb-lg-0" lg="6">
                                    <h2 className="text-white font-weight-bold">
                                    RPD TEAMS
                                    </h2>
                                    <p className="text-white mt-4">
                                    Het Root Performance Development team is een team dat bestaat uit alleen senior full stack software engineers die samen te werk gaan om grote en gecompliceerde IT-projecten te volbrengen. RITD heeft dit team ontwikkeld met als visie om alleen de beste developers bij elkaar te brengen om op deze manier zo efficiënt mogelijk software te ontwikkelen.
                                    </p>
                                    <Button
                                        className="mt-4 btn-color-3"
                                        href="/rpd"
                                    >
                                        Lees meer
                                    </Button>
                                </Col>
                                <Col lg="6">
                                    <img src={require("assets/img/img4.jpg")} />
                                </Col>
                            </Row>
                        </Container>
                    </div>


                    <div className="section">
                        <Container>
                            <Row className="justify-content-between">
                            <Col lg="6">
                                    <img src={require("assets/img/img5.jpg")} />
                                </Col>
                                <Col className="mb-5 mb-lg-0 mt-4 mt-lg-0" lg="6">
                                    <h2 className="text-white font-weight-bold">
                                    CONSULTANCY & ADVISERING
                                    </h2>
                                    <p className="text-white mt-4">
                                    Voor meer behoefte aan specialistische kennis hebben wij de beste software engineers voor u beschikbaar met elk zijn eigen specialisme. Onze consultants kunnen u adviseren op het gebied van AI, Machine Learning, data, cloud of Automatisering. Wat uw uitdaging ook is, onze consultants staan voor u klaar.
                                    </p>
                                    <Button
                                        className="mt-4 btn-color-4"
                                        href="/consultancy"
                                    >
                                        Lees meer
                                    </Button>
                                </Col>
                                
                            </Row>
                        </Container>
                    </div>

                    {/* <div className="section">
                        <Container>
                            <Row className="justify-content-between">
                                <Col className="mb-5 mb-lg-0" lg="6">
                                    <h2 className="text-white font-weight-bold">
                                    AI Agents
                                    </h2>
                                    <p className="text-white mt-4">
                                    Het Root Performance Development team is een team dat bestaat uit alleen senior full stack software engineers die samen te werk gaan om grote en gecompliceerde IT-projecten te volbrengen. RITD heeft dit team ontwikkeld met als visie om alleen de beste developers bij elkaar te brengen om op deze manier zo efficiënt mogelijk software te ontwikkelen.
                                    </p>
                                    <Button
                                        className="mt-4 btn-color-5"
                                        href="/ai"
                                    >
                                        Lees meer
                                    </Button>
                                </Col>
                                <Col lg="6">
                                    <img src={require("assets/img/img4.jpg")} />
                                </Col>
                            </Row>
                        </Container>
                    </div> */}
                </div>
                <Footer />
            </div>
        </>
    );
}
