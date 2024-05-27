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

export default function ConsultancyPage() {
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
            <MainNavbar color="line-diensten-4"/>
            <div className="wrapper">
                <MainHeader color="squares4" btn="color4" title="Consultancy"/>
                <div className="main">
                    <div className="section">
                        {/* <img alt="..." className="path" src={require("assets/img/path1.png")} /> */}
                        <Container>
                            <Row className="justify-content-between">
                                <Col className="mb-5 mb-lg-0" lg="6">
                                    <h1 className="text-white font-weight-bold uppercase">
                                        Consultancy & Advisering
                                    </h1>
                                    <p className="text-white mt-4">
                                        Onze consultants beschikken over zeer specialistische kennis. Wij hebben de beste software engineers voor u beschikbaar met elk zijn eigen specialisme, of dat nou is op het gebied van AI, machine learning, data, cloud of automatisering, wat uw uitdaging ook is onze consultants staan voor u klaar. Ook voor begeleiding bij een migratie of implementatie kunnen wij u helpen.                                    </p>
                                    <p className="text-white mt-4">
                                        Onze consultants kunnen extra hulp of advies bieden bij vooruitstrevende of gecompliceerde projecten. Zij bieden ondersteuning doormiddel van hun unieke inzichten, jaren ervaring en specialistische kennis. Met hun begeleiding bent u verzekerd van een soepel verloop van uw project. Dit kan gaan om nieuwe projecten waar u graag iemand bij aanwezig heeft voor een adviserende of leidende rol maar ook voor projecten die al lopen waar toch extra ondersteuning bij nodig is. Onze consultants kunnen op elk moment inspringen en uw project verzekeren van succes.</p>                                    </Col>
                                <Col lg="6">
                                    <img src={require("assets/img/img5.jpg")} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <br></br>
                                    <h2 className="text-white font-weight-bold uppercase">
                                        Onze consultants
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
