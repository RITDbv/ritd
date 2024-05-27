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

export default function ProductOntwikkelingPage() {
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
            <MainNavbar color="line-diensten-2"/>
            <div className="wrapper">
                <MainHeader color="squares2" btn="color2" title="Product ontwikkeling"/>
                <div className="main">
                    <div className="section">
                        {/* <img alt="..." className="path" src={require("assets/img/path1.png")} /> */}
                        <Container>
                            <Row className="justify-content-between">
                                <Col className="mb-5 mb-lg-0" lg="6">
                                    <h1 className="text-white font-weight-bold uppercase">
                                        Product ontwikkeling
                                    </h1>
                                    <p className="text-white mt-4">
                                        Wij voeren het productontwikkelingsproces voor u uit. Onze software developers kunnen bij lopende projecten bijspringen of software ontwerpen uitvoeren. Zij kunnen zelfstandig te werk gaan of met uw huidige team samen werken om het concept te ontwikkelen tot een volwaardig eindproduct. Heeft u een idee voor software maar nog geen uitgewerkt plan van aanpak, kijk dan naar de dienst Software Architectuur.
                                    </p>
                                    <p className="text-white mt-4">
                                        Voordat ons team begint aan de productontwikkeling wordt het product in verschillende delen uitgeschreven. Tijdens de product ontwikkeling nemen wij u mee in het proces. In verschillende fases wordt er steeds een deel van het eindproduct aangeleverd, waarna er uitgebreid feedback op kan worden gegeven.                                    </p>
                                    <p className="text-white mt-4">
                                        In de daaropvolgende fase word er niet alleen doorontwikkeld, maar word ook de eerdere feedback verwerkt. Dit proces gaan wij af tot er een volledig eindproduct is afgeleverd. Hierdoor komt u niet voor verassingen te staan. Ook nadat een product op de markt is zijn doorontwikkeling en onderhoud beschikbaar als aanvullende diensten.                                    </p>
                                </Col>
                                <Col lg="6">
                                    <img src={require("assets/img/img3.jpg")} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <br></br>
                                    <h2 className="text-white font-weight-bold uppercase">
                                        Onze software ontwikkelaars
                                    </h2>
                                    <p className="text-white mt-4">
                                        RITD neemt alleen genoegen met de beste software developers in Nederland. Onze experts moeten voldoen aan een flink aantal eisen voordat zij bij ons mogen starten. Zo hebben onze developers minimaal 7 jaar ervaring in het vakgebied, minimaal een HBO opleidingsniveau en ervaring in verschillende sectoren, van overheid tot bancaire evenals de commerciële sector. Daarnaast hebben zij kennis van verschillende programmeer talen en tooling technieken en methodieken. Doormiddel van deze hoge standaard kunnen wij garanderen dat onze developers voor elke uitdaging een oplossing vinden.
                                    </p>
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
