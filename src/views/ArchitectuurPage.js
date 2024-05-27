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

export default function ArchitectuurPage() {
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
            <MainNavbar color="line-diensten-1"/>
            <div className="wrapper">
                <MainHeader color="squares1" btn="color1" title="Software Architectuur"/>
                <div className="main">
                    <div className="section">
                        {/* <img alt="..." className="path" src={require("assets/img/path5.png")} /> */}
                        <Container>
                            <Row className="justify-content-between">
                                <Col className="mb-5 mb-lg-0" lg="6">
                                    <h1 className="text-white font-weight-bold uppercase">
                                    Software Architectuur
                                    </h1>
                                    <p className="text-white mt-4">
                                    Onze developers staan voor u klaar om op basis van conceptuele ideeën, concrete software oplossingen te bedenken. Tijdens dit proces kijken wij uitgebreid naar de mogelijkheden voor het ontwikkelen van de software. Op basis van uw wensen leveren wij een totaalontwerp. U kan achteraf altijd beslissen of u ook wilt dat wij het plan uitvoeren.
                                    </p>
                                    <p className="text-white mt-4">Deze dienst focust zich op het ontwikkelen van een compleet plan van aanpak voor de ontwikkeling van een concrete software oplossing. Dit betekend dat onze developers de richtlijnen opstellen, toetsen en/of doorontwikkelen en procedures voor de software-ontwikkeling opstellen. Met als eindresultaat een totaalontwerp voor de de ontwikkeling van de software.</p>
                                    <p className="text-white mt-4">De architectuur van een softwaresysteem is vaak complex. Daarom kijken wij tijdens het proces uitgebreid naar de opbouw en samenhang van de verschillende componenten in combinatie met de wensen van een softwareproduct. Daarnaast houden wij ook rekening met de eisen die aan dit soort systemen verbonden zijn, zoals een korte time-to-market, een extreme betrouwbaarheid en robuustheid, en/of harde real-time constraints. Overige onderwerpen die aan bod komen zijn de REST architectural style, cloud computing, service-oriented architectures, variability en software product lines.</p>
                                    </Col>
                                <Col lg="6">
                                    <img src={require("assets/img/img2.jpg")} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <p className="text-white mt-4">Een inschattingsfout in het initiële ontwerp kan leiden tot complicaties in het eindproduct. Onze software architecten nemen zowel de uitdagingen in techniek als business onder de loep. Hierbij worden de belangen van de verschillende betrokken partijen geïnventariseerd zodat we een compleet beeld hebben van uw visie. Als u zoekt naar een dienst waar de ontwikkeling van de software wordt uitgevoerd dan is “Product Ontwikkeling” beschikbaar als aanvullende keuze.</p>
                                    <br></br>
                                    <h2 className="text-white font-weight-bold uppercase">Onze software ontwikkelaars</h2>
                                    <p className="text-white mt-4">RITD neemt alleen genoegen met de beste software developers in Nederland. Onze experts moeten voldoen aan een flink aantal eisen voordat zij bij ons mogen starten. Zo hebben onze developers minimaal 7 jaar ervaring in het vakgebied, minimaal een HBO opleidingsniveau en ervaring in verschillende sectoren, van overheid tot bancaire evenals de commerciële sector. Daarnaast hebben zij kennis van verschillende programmeer talen en tooling technieken en methodieken. Doormiddel van deze hoge standaard kunnen wij garanderen dat onze developers voor elke uitdaging een oplossing vinden.</p>
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
