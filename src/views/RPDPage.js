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

export default function RPDPage() {
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
            <MainNavbar color="line-diensten-3"/>
            <div className="wrapper">
                <MainHeader color="squares3" btn="color3" title="RPD Teams"/>
                <div className="main">
                    <div className="section">
                        {/* <img alt="..." className="path" src={require("assets/img/path1.png")} /> */}
                        <Container>
                            <Row className="justify-content-between">
                                <Col className="mb-5 mb-lg-0" lg="6">
                                    <h1 className="text-white font-weight-bold uppercase">
                                        Root Performance Developement Team
                                    </h1>
                                    <p className="text-white mt-4">
                                        Onze RPD-teams zijn geoptimaliseerd voor maximale resultaat en bestaan alleen uit ROOT PERFORMANCE DEVELOPERS. Een RPD Team kent geen traditionele functies zoals scrummaster, tester en business analist. Alle teamleden zijn namelijk gelijk. Testen, automatisering, optimalisatie, efficiëntie terugkoppeling naar stakeholders, budget, innovatie, documentatie, presentatie en het waarborgen van de processen wordt gezamenlijk gedragen waarbij de rollen onderling verdeeld zijn en rouleren.
                                    </p>
                                    <p className="text-white mt-4">
                                        Omdat onze ROOT PERFORMANCE DEVELOPERS op een hoog niveau met elkaar samenwerken, maakt RITD het mogelijk de bovenstaande verantwoordelijkheden gezamenlijk in een gelijke functie te dragen. De teamleden zijn perfect op elkaar afgestemd. Ieder RPD Team heeft een eigen Way of Working dat gebasseerd is op het Scaled agile framework. De teams zijn samengesteld op basis van verantwoordelijkheden en vertrouwen in elkaars bekwaamheid. Dit bevordert de productiesnelheid, efficiëntie en maximaliseert de verdeling van verantwoordelijkheden.
                                    </p>
                                </Col>
                                <Col lg="6">
                                    <img src={require("assets/img/img4.jpg")} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <br></br>
                                    <h2 className="text-white font-weight-bold uppercase">
                                        The RITD Way
                                    </h2>
                                    <p className="text-white mt-4">
                                        De root performance developers zijn niet alleen optimaal op elkaar ingespeeld, maar ieder teamlid is zorgvuldig geselecteerd op kennis, kunde en ervaring waardoor het RPD-team maximaal en efficiënt kan functioneren.
                                    </p>
                                    <ul>
                                        <li>
                                            <h4 className="text-white font-weight-bold uppercase">Wij luisteren</h4>
                                            <p className="text-white mt-4">Onze consultant komt bij u langs om naar uw behoefte te luisteren. Als wij een duidelijk beeld hebben van uw uitdagingen, doelen en inhoudelijke wensen checken wij met u of wij een duidelijk beeld hebben van uw project.</p>
                                            <p><br /></p>
                                        </li>
                                        <li>
                                            <h4 className="text-white font-weight-bold uppercase">Analyse</h4>
                                            <p className="text-white mt-4">Wij brengen geheel vrijblijvend de situatie voor u in kaart. Hierin nemen wij de probleemstelling,  doelstelling, pijnpunten mee en bekrachtigen wij de mogelijke oplossingen. Het adviesrapport krijgt u van ons geheel vrijblijvend.</p>
                                            <p><br /></p>
                                        </li>
                                        <li>
                                            <h4 className="text-white font-weight-bold uppercase">Uitvoeren</h4>
                                            <p className="text-white mt-4">Wij starten een RPD TEAM voor u op en voeren de werkzaamheden met maximale efficiëntie en snelheid voor u uit, conform de analyse die u van ons ontvangen heeft.</p>
                                            <p><br /></p>
                                        </li>
                                    </ul>
                                    <br />
                                    <h2 className="text-white font-weight-bold uppercase">
                                        Onze teamleden
                                    </h2>
                                    <p className="text-white mt-4">
                                        RITD neemt alleen genoegen met de beste software developers in Nederland. Onze experts moeten voldoen aan een flink aantal eisen voordat zij bij ons mogen starten. Zo hebben onze developers minimaal 7 jaar ervaring in het vakgebied, minimaal een HBO opleidingsniveau en ervaring in verschillende sectoren, van overheid tot bancaire evenals de commerciële sector. Daarnaast hebben zij kennis van verschillende programmeer talen en tooling technieken en methodieken. Doormiddel van deze hoge standaard kunnen wij garanderen dat onze developers voor elke uitdaging een oplossing vinden.                                    </p>
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
