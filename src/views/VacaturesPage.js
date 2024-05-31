/*!

=========================================================
* RITD - Home page
=========================================================

*/
import React from "react";
import classnames from "classnames";
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import MainHeader from "components/PageHeader/MainHeader.js";
import Footer from "components/Footer/Footer.js";

let ps = null;

export default function VacaturesPage() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    document.documentElement.className += " perfect-scrollbar-on";
    document.documentElement.classList.remove("perfect-scrollbar-off");
    let tables = document.querySelectorAll(".table-responsive");
    for (let i = 0; i < tables.length; i++) {
      ps = new PerfectScrollbar(tables[i]);
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      //   if (navigator.platform.indexOf("Win") > -1) {
      //     ps.destroy();
      //     document.documentElement.className += " perfect-scrollbar-off";
      //     document.documentElement.classList.remove("perfect-scrollbar-on");
      //   }
      document.body.classList.toggle("profile-page");
    };
  }, []);
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
        <MainHeader color="squares" btn="color" title="Vacatures" />
        <div className="main">
          <div className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path2.png")}
            />
            <Container>
              <Row className="justify-content-between">
                <Col className="mb-5 mb-lg-0" lg="6">
                  <h2 className="text-white font-weight-bold uppercase">
                    Welkom bij RITD Careers
                  </h2>
                  <p className="text-white mt-4">
                    Bij RITD zijn we altijd op zoek naar getalenteerde en
                    gepassioneerde professionals die willen bijdragen aan
                    innovatieve en op maat gemaakte IT-oplossingen. We bieden
                    een dynamische werkomgeving waar creativiteit en technische
                    expertise samenkomen om de complexe IT-uitdagingen van onze
                    klanten op te lossen.
                  </p>

                  <h3 className="text-white font-weight-bold uppercase mt-5">
                    Onze Vacatures
                  </h3>
                  <p className="text-white mt-4">
                    We hebben momenteel openstaande posities voor verschillende
                    rollen binnen ons team. Of je nu een ervaren Full Stack
                    Engineer, een Data Engineer, of een IT Engineer Consultant
                    bent, we nodigen je uit om deel uit te maken van ons
                    groeiende team.
                  </p>
                  {/* <Button
                                        className="mt-4 btn-color-1"
                                        href="/architectuur"
                                    >
                                        Lees meer
                                    </Button> */}
                </Col>
                <Col lg="6">
                  <img src={require("assets/img/hiring.jpg")} />
                </Col>
              </Row>
            </Container>
          </div>

          <div className="section">
            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h3 className="profile-title text-left">
                    Full Stack Engineer Consultant
                  </h3>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description">
                    Als Full Stack Engineer Consultant speel je een cruciale rol
                    in het ontwerpen, implementeren en optimaliseren van zowel
                    front-end als back-end IT-oplossingen. Je werkt nauw samen
                    met onze klanten om hun behoeften te begrijpen en vertaalt
                    deze naar effectieve technologische oplossingen.
                  </p>
                  <Button className="mt-4" color="danger" href="/fullstackengineer">
                    Lees meer en solliciteer
                  </Button>
                </Col>


                <Col lg="6" md="6">
                  <h3 className="profile-title text-left">
                    Data Engineer Consultant
                  </h3>
                  <h5 className="text-on-back">02</h5>
                  <p className="profile-description">
                    Als Data Engineer Consultant ontwerp, implementeer en
                    optimaliseer je data-infrastructuren en oplossingen voor
                    onze klanten. Je zorgt ervoor dat gegevens efficiënt worden
                    beheerd en gebruikt, en adviseert over de beste
                    data-strategieën en -technologieën.
                  </p>
                  <Button className="mt-4" color="danger" href="/dataengineer">
                    Lees meer en solliciteer
                  </Button>
                </Col>



                <Col lg="6" md="6">
                  <h3 className="profile-title text-left">
                  IT Engineer Consultant
                  </h3>
                  <h5 className="text-on-back">03</h5>
                  <p className="profile-description">
                  IT Engineer Consultant
Als IT Engineer Consultant ben je verantwoordelijk voor het ontwerpen, implementeren en optimaliseren van IT-oplossingen op maat. Je werkt nauw samen met onze klanten om hun behoeften te begrijpen en vertaalt deze naar effectieve technologische oplossingen.

                  </p>
                  <Button className="mt-4" color="danger" href="/itengineer">
                    Lees meer en solliciteer
                  </Button>
                </Col>

            
              </Row>
            </Container>
          </div>

          <div className="section">
            {/* <img
              alt="..."
              className="path"
              src={require("assets/img/path2.png")}
            /> */}
            <Container>
              <Row className="justify-content-between">
                <Col className="mb-5 mb-lg-0" lg="12">
                  <h2 className="text-white font-weight-bold uppercase">
                  Solliciteren
                  </h2>
                  <p className="text-white mt-4">
                  Ben jij klaar voor de volgende stap in je carrière? Bekijk onze openstaande vacatures en solliciteer vandaag nog. Wij kijken ernaar uit om van je te horen en samen te werken aan de toekomst van IT-oplossingen.
                  </p>
                  {/* <Button
                                        className="mt-4 btn-color-1"
                                        href="/architectuur"
                                    >
                                        Lees meer
                                    </Button> */}
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
