/*!

=========================================================
* RITD - Home page
=========================================================

*/
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactForm from 'components/Forms/ContactForm';

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

export default function FullStackEngineer() {
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
        <MainHeader color="squares" btn="color" title="Full Stack Engineer" />
        <div className="main">
          <div className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path2.png")}
            />
            <Container>
              <Row className="justify-content-between">
                <Col className="mb-5 mb-lg-0" lg="12">
                  <h2 className="text-white font-weight-bold uppercase mt-5">
                    Vacature: Full Stack Engineer Consultant
                  </h2>
                  <ul>
                    <li>Locatie: Lelystad</li>
                    <li>Dienstverband: Fulltime</li>
                    <li>Bedrijf: RITD</li>
                  </ul>

                  <h2 className="text-white font-weight-bold uppercase mt-5">
                    Over RITD:
                  </h2>
                  <p className="text-white mt-4">
                    RITD is een toonaangevend bedrijf op het gebied van
                    IT-diensten en -consultancy. We bieden innovatieve
                    oplossingen voor complexe IT-uitdagingen in diverse
                    sectoren. Onze focus ligt op het leveren van maatwerk en het
                    behalen van meetbare resultaten voor onze klanten.
                  </p>

                  <h2 className="text-white font-weight-bold uppercase mt-5">
                    Functieomschrijving:
                  </h2>
                  <p className="text-white mt-4">
                    Als Full Stack Engineer Consultant bij RITD speel je een
                    cruciale rol in het ontwerpen, implementeren en
                    optimaliseren van zowel front-end als back-end
                    IT-oplossingen voor onze klanten. Je werkt nauw samen met
                    onze klanten om hun behoeften te begrijpen en vertaalt deze
                    naar effectieve technologische oplossingen. Ethisch en
                    verantwoord coderen staat centraal in ons werk, en we
                    streven ernaar om technologie te ontwikkelen die veilig,
                    eerlijk en transparant is.
                  </p>

                  <h2 className="text-white font-weight-bold uppercase mt-5">
                    Taken en Verantwoordelijkheden:
                  </h2>
                  <ul>
                    <li>
                      <p className="text-white mt-4">
                        Ontwerpen en implementeren van complete IT-oplossingen
                        op maat voor klanten in verschillende sectoren.
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Analyseren van bedrijfsprocessen en identificeren van
                        verbeterpunten.
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Adviseren van klanten over de beste IT-strategieën en
                        -technologieën.
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Beheren en optimaliseren van zowel front-end als
                        back-end systemen en infrastructuur.
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Ondersteunen van klanten bij de implementatie van nieuwe
                        technologieën en oplossingen.
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Verzorgen van documentatie en training voor
                        eindgebruikers.
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Zorgen voor ethisch en verantwoord coderen in alle
                        ontwikkelingsfasen.
                      </p>
                    </li>
                  </ul>

                  <h2 className="text-white font-weight-bold uppercase mt-5">
                    Beschik jij over de volgende vaardigheden en kennis?
                  </h2>
                  <ul>
                    <li>
                      <p className="text-white mt-4">
                        Front-End: HTML, CSS, JavaScript, Angular, React, Vue.js
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Back-End: Java, Python, Node.js, SQL, MongoDB,
                        PostgreSQL
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        CI/CD: Jenkins, GitLab CI, CircleCI
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Testing & QA: Selenium, Cucumber, Robot Framework
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Methodieken: Agile, Scrum
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        OOP: Object-Oriented Programming, ontwerppatronen
                      </p>
                    </li>
                  </ul>

                  <h2 className="text-white font-weight-bold uppercase mt-5">
                    Beschik jij over de volgende zachte vaardigheden?
                  </h2>
                  <ul>
                    <li>
                      <p className="text-white mt-4">
                        Uitstekende communicatievaardigheden, zowel schriftelijk
                        als mondeling?
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Sterke analytische en probleemoplossende vaardigheden?
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Vermogen om effectief te werken in teamverband en
                        zelfstandig?
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Proactieve houding en klantgerichte instelling?
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Flexibiliteit en aanpassingsvermogen in een dynamische
                        werkomgeving?
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Bewustzijn en toepassing van ethische overwegingen bij
                        codering en technologiegebruik?
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Vaardigheid in projectmanagement en het leiden van
                        cross-functionele teams?
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Vermogen om technische concepten en oplossingen
                        duidelijk uit te leggen aan niet-technische
                        stakeholders?
                      </p>
                    </li>
                  </ul>

                  <h2 className="text-white font-weight-bold uppercase mt-5">
                    Opleiding en Ervaring:
                  </h2>
                  <ul>
                    <li>
                      <p className="text-white mt-4">
                        Heb je een bachelor- of masterdiploma in Informatica,
                        IT, of een gerelateerd vakgebied?
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Heb je minimaal 3-5 jaar werkervaring in een
                        vergelijkbare functie?
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        Heb je aantoonbare ervaring met IT-projectmanagement (is
                        een pluspunt)?
                      </p>
                    </li>
                  </ul>

                  <h2 className="text-white font-weight-bold uppercase mt-5">
                    Wat Wij Bieden:
                  </h2>
                  <ul>
                    <li>
                      <p className="text-white mt-4">
                        <span className="font-weight-bold uppercase pr-2">
                          Professionele Groei:
                        </span>
                        Een uitdagende en afwisselende functie in een groeiend
                        bedrijf met volop mogelijkheden voor professionele
                        ontwikkeling en carrièregroei. Wij investeren in jouw
                        toekomst met trainingen, certificeringen en toegang tot
                        de nieuwste technologieën.
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        <span className="font-weight-bold uppercase pr-2">
                          Innovatieve Projecten:
                        </span>
                        De kans om te werken aan toonaangevende projecten die de
                        toekomst van technologie en bedrijfsprocessen vormgeven.
                        Bij RITD krijg je de mogelijkheid om jouw vaardigheden
                        toe te passen en te ontwikkelen in innovatieve
                        omgevingen.
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        <span className="font-weight-bold uppercase pr-2">
                          Competitief Salaris en Voordelen:
                        </span>
                        Een competitief salaris en uitstekende secundaire
                        arbeidsvoorwaarden, inclusief een pensioenregeling,
                        ziektekostenverzekering en bonussen gebaseerd op
                        prestaties.
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        <span className="font-weight-bold uppercase pr-2">
                          Inspirerende Werkomgeving:
                        </span>
                        Een inspirerende en collaboratieve werkomgeving met een
                        hecht team van professionals die gepassioneerd zijn over
                        technologie en innovatie. Wij waarderen een cultuur van
                        open communicatie en teamwork.
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        <span className="font-weight-bold uppercase pr-2">
                          Ethisch en Verantwoord Coderen:
                        </span>
                        Een cultuur die ethisch en verantwoord coderen hoog in
                        het vaandel heeft. Bij RITD streven we ernaar om
                        technologie te ontwikkelen die veilig, eerlijk en
                        transparant is, en die een positieve impact heeft op de
                        samenleving.
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        <span className="font-weight-bold uppercase pr-2">
                          Bijdrage aan Toekomst:
                        </span>
                        De kans om een significante bijdrage te leveren aan de
                        toekomst van RITD en onze klanten. Je speelt een
                        cruciale rol in het realiseren van onze visie om de
                        go-to partner te zijn voor op maat gemaakte
                        AI-oplossingen.
                      </p>
                    </li>
                    <li>
                      <p className="text-white mt-4">
                        <span className="font-weight-bold uppercase pr-2">
                          Flexibele Werkregeling:
                        </span>
                        Wij begrijpen het belang van een goede werk-privébalans
                        en bieden flexibele werkregelingen, waaronder de
                        mogelijkheid om deels vanuit huis te werken.
                      </p>
                    </li>
                  </ul>

                  <h2 className="text-white font-weight-bold uppercase mt-5">
                    Solliciteren:
                  </h2>
                  <p className="text-white mt-4">
                    Ben jij de Full Stack Engineer Consultant die wij zoeken?
                    Stuur dan je cv en motivatiebrief naar info@ritd.nl of
                    solliciteer via ons contactformulier.
                  </p>
                </Col>
              </Row>
            </Container>
            <ContactForm/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
