/*!

=========================================================
* RITD - Home page
=========================================================

*/
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import PageHeader from "components/PageHeader/PageHeader";
import Footer from "components/Footer/Footer.js";
import {
  Mousewheel,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function HomePage() {
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
        <PageHeader color="squares" btn="color" splash="true" />
        <div className="main">
          {/* <div className="section">
                        <img alt="..." className="path" src={require("assets/img/path3.png")} />
                        <h1 className="text-center">ONZE KLANTEN</h1>
                        <div className="blog-slider">
                            <Swiper
                                modules={[Mousewheel, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={1}
                                effect="fade"
                                autoplay={true}
                                mousewheel={{ invert: false }}
                                pagination={{ clickable: true, el: '.blog-slider__pagination' }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <div className="blog-slider__wrp swiper-wrapper">
                                    <SwiperSlide>
                                        <Row>
                                            <Col lg="6">
                                                <img src="https://mybrand.nl/wp-content/uploads/2012/11/KPN.jpg" alt="" />

                                            </Col>
                                            <Col lg="6">
                                                <div className="blog-slider__title">KPN</div>
                                                <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                                                <Button
                                                    className="mt-4"
                                                    color="danger"
                                                    href="/kpn"
                                                >
                                                    Lees meer
                                                </Button>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Row>
                                            <Col lg="6">
                                                <img src="https://www.politie.nl/binaries/w800h450/content/gallery/politie/onderwerpen/o/over-de-politie/over-de-politie-001cms.jpg" alt="" />
                                            </Col>
                                            <Col lg="6">
                                                <div className="blog-slider__title">Politie</div>
                                                <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                                                <Button
                                                    className="mt-4"
                                                    color="danger"
                                                    href="/kpn"
                                                >
                                                    Lees meer
                                                </Button>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Row>
                                            <Col lg="6">
                                                <img src="https://www.banken.nl/illustrations/news/detail/2021-11-16-203801269-DNB-tikt-Rabobank-opnieuw-op-vingers-vanwege-tekortkomende-witwascontroles.jpg" alt="" />

                                            </Col>
                                            <Col lg="6">
                                                <div className="blog-slider__title">Rabobank</div>
                                                <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                                                <Button
                                                    className="mt-4"
                                                    color="danger"
                                                    href="/kpn"
                                                >
                                                    Lees meer
                                                </Button>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                                </div>
                            </Swiper>


                            <div className="blog-slider__pagination"></div>
                        </div>
                    </div> */}
          <div className="section pt-5">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path2.png")}
            />
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <p className="text-center mb-5">
                    Bij Root IT Development B.V. (RITD) verleggen we de grenzen
                    van IT-detachering om de samenwerking tussen mens en
                    technologie te verbeteren. Onze missie is om door middel van
                    innovatie, hoogwaardige kwaliteit en betrouwbaarheid
                    IT-oplossingen te leveren die de verwachtingen van onze
                    klanten overtreffen. Onze visie is gericht op het creëren
                    van ongeëvenaarde waarde door complexe problemen op te
                    lossen en vooruitgang voor bedrijven wereldwijd te
                    bevorderen. We zijn trots op onze USP's: voortdurende
                    innovatie, levering van hoogwaardige IT-diensten, flexibele
                    inzet van ervaren en junior IT-specialisten, consistente
                    naleving van afspraken en het opbouwen van hechte
                    partnerschappen met klanten en medewerkers.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center mt-5">
                <Col lg="12">
                  <h2 className="text-center font-weight-bold uppercase">
                    Onze Missie en Visie
                  </h2>
                </Col>
              </Row>
              <Row className="justify-content-center mt-3 mb-5">
                <Col lg="6" className="light-blue-background">
                  <h4 className="text-center font-weight-bold uppercase">
                    Onze Missie:
                    <br />
                  </h4>
                  <p className="text-center font-weight-bold uppercase">
                    Verleggen van Grenzen in IT-Detachering en
                    Softwareontwikkeling
                    <hr className="line-danger" />
                  </p>
                  <p className="text-left mt-5">
                    Bij Root IT Development B.V. (RITD) is het onze missie om de
                    grenzen van IT-detachering en softwareontwikkeling te
                    verleggen. Wij creëren innovatieve oplossingen die niet
                    alleen voldoen aan de huidige behoeften, maar ook
                    anticiperen op toekomstige uitdagingen. Onze focus ligt op
                    het ontwikkelen van software en het leveren van
                    IT-specialisten die de samenwerking tussen mens en
                    technologie versterken, waardoor bedrijven efficiënter en
                    effectiever kunnen opereren.
                  </p>
                </Col>
                <Col lg="6" className="light-blue-background">
                  <h4 className="text-center font-weight-bold uppercase">
                    Onze Visie:
                  </h4>
                  <p className="text-center font-weight-bold uppercase">
                    Waarde Leveren en Problemen Oplossen
                    <p>
                      <span>
                        <br />
                      </span>
                    </p>
                    <hr className="line-danger" />
                  </p>
                  <p className="text-left mt-5">
                    Onze visie is om ongeëvenaarde waarde te leveren door
                    complexe problemen voor onze klanten op te lossen. Wij
                    geloven dat technologie een krachtig hulpmiddel is om
                    vooruitgang te stimuleren en zakelijke obstakels te
                    overwinnen. Door nauw samen te werken met onze klanten en
                    hun unieke behoeften te begrijpen, bieden we op maat
                    gemaakte oplossingen die hun bedrijfsdoelen ondersteunen en
                    de operationele efficiëntie verhogen.
                  </p>
                </Col>
              </Row>
            </Container>

            <div class="features-2">
              <div class="container">
                <div class="align-items-center row">
                  <div class="mr-auto text-left col-md-8 col-lg-3">
                    <h2 class="title font-weight-bold uppercase">
                      Waarom Kiezen voor RITD?
                    </h2>
                    <p class="description">
                      Bij Root IT Development B.V. (RITD) geloven we dat ons
                      succes wordt gedreven door onze unieke waardeproposities
                      die ons onderscheiden in de markt. Hier zijn de
                      belangrijkste redenen waarom klanten voor RITD kiezen:
                    </p>
                  </div>
                  <div class="col-md-12 col-lg-8">
                    <div class="row">
                      <div class="col-md-4 col-lg-4">
                        <div class="info text-left bg-info">
                          <div class="icon icon-white">
                            <i class="tim-icons icon-satisfied"></i>
                          </div>
                          <h4 class="info-title uppercase">
                            Detachering als Kernactiviteit:
                          </h4>
                          <p class="description">
                            Wij zijn gespecialiseerd in het leveren van
                            flexibele en ervaren IT-specialisten die perfect
                            aansluiten op de specifieke behoeften van uw
                            organisatie.
                          </p>
                        </div>
                      </div>
                      <div class="col-md-4 col-lg-4">
                        <div class="info text-left bg-danger info-raised">
                          <div class="icon icon-white">
                            <i class="tim-icons icon-palette"></i>
                          </div>
                          <h4 class="info-title uppercase">Innovatie:</h4>
                          <p class="description">
                            We zijn voortdurend op zoek naar nieuwe en
                            verbeterde technologieën om onze klanten de meest
                            geavanceerde oplossingen te bieden.
                          </p>
                        </div>
                      </div>
                      <div class="col-md-4 col-lg-4">
                        <div class="info text-left bg-default">
                          <div class="icon icon-white">
                            <i class="tim-icons icon-check-2"></i>
                          </div>
                          <h4 class="info-title uppercase">Kwaliteit:</h4>
                          <p class="description">
                            We staan garant voor de levering van hoogwaardige
                            IT-oplossingen en diensten, waarbij we streven naar
                            perfectie in elke opdracht.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4 col-lg-4">
                        <div class="info text-left bg-primary">
                          <div class="icon icon-white">
                            <i class="tim-icons icon-heart-2"></i>
                          </div>
                          <h4 class="info-title uppercase">Samenwerking:</h4>
                          <p class="description">
                            Wij bouwen hechte en duurzame partnerschappen met
                            zowel onze klanten als medewerkers, gebaseerd op
                            vertrouwen en gedeelde doelstellingen.
                          </p>
                        </div>
                      </div>
                      <div class="col-md-4 col-lg-4">
                        <div class="info text-left bg-warning info-raised">
                          <div class="icon icon-white">
                            <i class="tim-icons icon-bulb-63"></i>
                          </div>
                          <h4 class="info-title uppercase">
                            Betrouwbaarheid:{" "}
                          </h4>
                          <p class="description">
                            Consistente naleving van afspraken en tijdige
                            leveringen zijn essentieel voor ons, zodat u altijd
                            op ons kunt rekenen.
                          </p>
                        </div>
                      </div>
                      <div class="col-md-4 col-lg-4">
                        <div class="info text-left bg-success">
                          <div class="icon icon-white">
                            <i class="tim-icons icon-paper"></i>
                          </div>
                          <h4 class="info-title uppercase">
                            Opleiding van Junioren:
                          </h4>
                          <p class="description text-muted">
                            Gain access to the demographics, psychographics, and
                            location of unique people.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4 col-lg-4">
                        <div class="info text-left alert-danger">
                          <div class="icon icon-white">
                            <i class="tim-icons icon-atom"></i>
                          </div>
                          <h4 class="info-title uppercase">
                            AI-Implementatie:
                          </h4>
                          <p class="description">
                            Wij bieden maatwerkoplossingen voor AI-behoeften,
                            variërend van advies en experts ter plaatse tot het
                            ontwikkelen van eigen software.
                          </p>
                        </div>
                      </div>
                      <div class="col-md-4 col-lg-4">
                        <div class="info text-left bg-info info-raised">
                          <div class="icon icon-white">
                            <i class="tim-icons icon-tag"></i>
                          </div>
                          <h4 class="info-title uppercase">
                            Preferred Supplier:
                          </h4>
                          <p class="description">
                            Dankzij onze samenwerking met gerenommeerde brokers
                            zijn wij preferred supplier voor diverse
                            IT-aanbestedingen en werken we direct samen met de
                            IT Enterprise Omgeving van Nederland.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="features-3">
              <img
                alt="..."
                className="path"
                src={require("assets/img/path1.png")}
              />
              <div class="container-fluid">
                <div class="row">
                  <div class="mr-auto ml-auto col-md-6">
                    <h1 className="text-center font-weight-bold">DIENSTEN</h1>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-5">
                    <div class="info info-horizontal">
                      <div class="icon icon-danger">
                        <i class="tim-icons icon-badge"></i>
                      </div>
                      <div class="description">
                        <h3 class="info-title uppercase">Detachering:</h3>
                        <p className="text-left font-weight-bold uppercase">
                          Flexibele Inzet van IT-Specialisten
                        </p>
                        <p>
                          Bij RITD bieden wij flexibele detacheringsoplossingen
                          die zijn afgestemd op de specifieke behoeften van uw
                          bedrijf. Onze IT-specialisten hebben 5 tot 10 jaar
                          werkervaring en zijn experts in hun vakgebied.
                          Daarnaast bieden we ook junior IT-engineers en
                          consultants aan die we hebben opgeleid...
                        </p>
                        <a href="#pablo" class="btn-link btn btn-info">
                          Lees meer
                          <i class="tim-icons icon-minimal-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="info info-horizontal">
                      <div class="icon icon-diensten-1">
                        <i class="tim-icons icon-vector"></i>
                      </div>
                      <div class="description">
                        <h3 class="info-title uppercase">
                          Software Architectuur:
                        </h3>
                        <p className="text-left font-weight-bold uppercase">
                          Ontwerp en Implementatie van Robuuste
                          Softwareoplossingen
                        </p>
                        <p>
                          Bij RITD ontwerpen en implementeren we naadloze
                          softwareoplossingen die zijn afgestemd op de unieke
                          behoeften van uw bedrijf. Onze expertise in
                          softwarearchitectuur stelt ons in staat om duurzame en
                          schaalbare systemen te bouwen die uw operationele
                          efficiëntie verbeteren.
                        </p>
                        <a href="#pablo" class="btn-link btn btn-info">
                          Lees meer
                          <i class="tim-icons icon-minimal-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row justify-content-center ">
                  <div class="col-md-5">
                    <div class="info info-horizontal">
                      <div class="icon icon-diensten-2">
                        <i class="tim-icons icon-puzzle-10"></i>
                      </div>
                      <div class="description">
                        <h3 class="info-title uppercase">
                          Productontwikkeling:
                        </h3>
                        <p className="text-left font-weight-bold uppercase">
                          In-house Ontwikkeling van Op Maat Gemaakte Applicaties
                        </p>
                        <p>
                          Ons team van deskundige ontwikkelaars creëert op maat
                          gemaakte applicaties die zijn ontworpen om de
                          specifieke uitdagingen van uw bedrijf aan te pakken.
                          Van concept tot implementatie, wij zorgen voor een
                          naadloze integratie en optimale prestaties.
                        </p>
                        <a href="#pablo" class="btn-link btn btn-info">
                          Lees meer
                          <i class="tim-icons icon-minimal-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="info info-horizontal">
                      <div class="icon icon-diensten-3">
                        <i class="tim-icons icon-single-02"></i>
                      </div>
                      <div class="description">
                        <h3 class="info-title uppercase">RPD-Teams:</h3>
                        <p className="text-left font-weight-bold uppercase">
                          Versnelde Ontwikkeling met Gespecialiseerde Teams
                        </p>
                        <p>
                          Onze Rapid Performance Development (RPD) teams zijn
                          gespecialiseerd in het snel en efficiënt leveren van
                          hoogwaardige softwareoplossingen. Door gebruik te
                          maken van agile methodologieën kunnen wij snel
                          inspelen op veranderende behoeften en tijdige
                          resultaten leveren.
                        </p>
                        <a href="#pablo" class="btn-link btn btn-info">
                          Lees meer
                          <i class="tim-icons icon-minimal-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row justify-content-center ">
                  <div class="col-md-5">
                    <div class="info info-horizontal">
                      <div class="icon icon-diensten-5">
                        <i class="tim-icons icon-atom"></i>
                      </div>
                      <div class="description">
                        <h3 class="info-title uppercase">AI-Implementatie:</h3>
                        <p className="text-left font-weight-bold uppercase">
                          Integratie van AI-agents in Bedrijfsprocessen
                        </p>
                        <p>
                          Bij RITD helpen we uw bedrijf te profiteren van de
                          nieuwste ontwikkelingen op het gebied van kunstmatige
                          intelligentie. Onze AI-implementaties zijn ontworpen
                          om uw bedrijfsprocessen te optimaliseren en nieuwe
                          mogelijkheden voor groei en innovatie te creëren.
                        </p>
                        <a href="#pablo" class="btn-link btn btn-info">
                          Lees meer
                          <i class="tim-icons icon-minimal-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="info info-horizontal">
                      <div class="icon icon-diensten-4">
                        <i class="tim-icons icon-heart-2"></i>
                      </div>
                      <div class="description">
                        <h3 class="info-title uppercase">
                          RITD Onderdeel van CC Group:
                        </h3>
                        <p className="text-left font-weight-bold uppercase">
                          <br />
                        </p>
                        <p>
                          RITD is onderdeel van CC Group, waardoor we in staat
                          zijn om dankzij onze partnerschappen oplossingen te
                          bieden van kleine tot zeer grote schaal. We zijn
                          "Powered by CC Group," wat ons de middelen en
                          ondersteuning geeft om aan de meest veeleisende
                          IT-behoeften te voldoen.
                        </p>
                        <a href="#pablo" class="btn-link btn btn-info">
                          Lees meer
                          <i class="tim-icons icon-minimal-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row justify-content-center ">
                  <a href="/diensten" class="mt-4 btn btn-warning">
                    Ontdek Onze Diensten
                  </a>
                  <a href="/contact" class="mt-4 btn btn-primary">
                    Neem Contact op voor een Consult
                  </a>
                </div>
              </div>
            </div>

            <div class="features-4">
              <img
                alt="..."
                className="path"
                src={require("assets/img/path3.png")}
              />
              <div class="container">
                <div class="align-items-center row">
                  <div class="mr-auto text-left col-lg-3">
                    <h3 class="font-weight-bold uppercase">
                      Voordelen van het Junior IT Professionals Programma
                    </h3>
                    <p class="description">
                      Enterprise-omgevingen in Nederland hebben vaak te maken
                      met hoge toelatingseisen voor IT-professionals, wat het
                      moeilijk maakt voor junioren om aan de bak te komen. Dit
                      programma biedt een oplossing door:
                    </p>
                  </div>
                  <div class="p-sm-0 col-lg-8">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="info info-primary">
                          <div class="icon icon-white">
                            <i class="tim-icons icon-satisfied"></i>
                          </div>
                          <h4 class="info-title uppercase">
                            Verlagen van Toelatingseisen:
                          </h4>
                          <p class="description">
                            Dankzij de intensieve training en voorbereiding
                            kunnen bedrijven hun toelatingseisen tijdelijk
                            verlagen en toch verzekerd zijn van goed opgeleide
                            medewerkers die snel waarde toevoegen.
                          </p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="info info-primary">
                          <div class="icon icon-white">
                            <i class="tim-icons icon-palette"></i>
                          </div>
                          <h4 class="info-title uppercase">
                            Kostenefficiëntie:
                          </h4>
                          <p class="description">
                            Bedrijven kunnen junior IT-professionals inhuren
                            tegen een lager tarief dan ervaren professionals,
                            wat leidt tot significante kostenbesparingen zonder
                            in te boeten op kwaliteit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="info info-primary">
                          <div class="icon icon-white">
                            <i class="tim-icons icon-user-run"></i>
                          </div>
                          <h4 class="info-title uppercase">
                            Kwaliteit en Toegevoegde Waarde:
                          </h4>
                          <p class="description">
                            Door middel van deze gestructureerde training en
                            begeleiding worden de junioren voorbereid om
                            effectief te functioneren in de enterprise-omgeving,
                            wat hun inzetbaarheid en productiviteit verhoogt.
                          </p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="info info-primary">
                          <div class="icon icon-white">
                            <i class="tim-icons icon-bulb-63"></i>
                          </div>
                          <h4 class="info-title uppercase">
                            Maatschappelijk Verantwoord Ondernemen:
                          </h4>
                          <p class="description">
                            Door te investeren in de opleiding en ontwikkeling
                            van junioren dragen bedrijven bij aan
                            maatschappelijke verantwoordelijkheid en verbeteren
                            ze hun imago als werkgever die kansen biedt aan
                            jonge professionals.
                          </p>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="info info-primary">
                          <div class="icon icon-white">
                            <i class="tim-icons icon-bulb-63"></i>
                          </div>
                          <h4 class="info-title uppercase">
                            Langetermijninvestering:
                          </h4>
                          <p class="description">
                            Bedrijven creëren een pool van goed getrainde en
                            loyale werknemers die kunnen doorgroeien binnen de
                            organisatie, wat de continuïteit en stabiliteit op
                            de lange termijn waarborgt.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-md-12">
                    <p className="text-center">
                      Dit programma speelt in op de huidige marktsituatie waarin
                      veel junior IT-professionals moeite hebben om de
                      arbeidsmarkt te betreden. Door de samenwerking met RITD en
                      Novi kunnen bedrijven een waardevolle bijdrage leveren aan
                      de ontwikkeling van deze jonge professionals en
                      tegelijkertijd profiteren van hun talent en energie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    Doel van het Lesplan
                  </h2>
                  <p className="text-white mt-4">
                    Het doel van dit lesplan is om junior IT-professionals die
                    zijn afgestudeerd aan de Hogeschool van Novi voor te
                    bereiden op een succesvolle carrière in de Nederlandse
                    enterprise-IT-omgeving. Het programma is ontworpen om hen te
                    voorzien van de nodige hard skills, soft skills, en
                    professionele competenties die vereist zijn om te voldoen
                    aan de hoge eisen van deze omgeving. Door middel van
                    intensieve training en praktische ervaring zal het lesplan
                    de kloof dichten tussen academische kennis en de praktische
                    vaardigheden die nodig zijn in het bedrijfsleven.
                  </p>
                  <ul className="mt-5">
                    <li>
                      <p>
                        <spann className="font-weight-bold pr-1">
                          Hard Skills:
                        </spann>
                        Ontwikkelen van technische vaardigheden zoals
                        programmeren, DevOps, T-Shaped, databasebeheer, en
                        cybersecurity.
                      </p>
                    </li>
                    <li>
                      <p>
                        <spann className="font-weight-bold pr-1">
                          Soft Skills:
                        </spann>
                        Verbeteren van communicatie, samenwerking,
                        probleemoplossing, en presentatievaardigheden.
                      </p>
                    </li>
                    <li>
                      <p>
                        <spann className="font-weight-bold pr-1">
                          Competenties:
                        </spann>
                        Beheersing van agile en scrum-methodologieën, en het
                        vermogen om effectief te functioneren in
                        multidisciplinaire teams.
                      </p>
                    </li>
                    <li>
                      <p>
                        <spann className="font-weight-bold pr-1">
                          Praktische Ervaring:
                        </spann>
                        Het toepassen van opgedane kennis in real-world
                        scenario's en projectwerk, inclusief een intern
                        AI-project (DJano-project).
                      </p>
                    </li>
                    <li>
                      <p>
                        <spann className="font-weight-bold pr-1">
                          Professionele Voorbereiding:
                        </spann>
                        Voorbereiding op sollicitaties, interviews, en het
                        bouwen van een professioneel netwerk.
                      </p>
                    </li>
                  </ul>
                  <p>
                    Het lesplan streeft ernaar om de studenten niet alleen
                    technisch bekwaam te maken, maar ook te voorzien van de
                    professionele vaardigheden en attitudes die hen in staat
                    stellen om succesvol te zijn in een dynamische en
                    veeleisende IT-omgeving.
                  </p>
                </Col>
                <Col lg="6">
                  <img src={require("assets/img/123.jpg")} />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
            {/* <img alt="..." className="path" src={require("assets/img/path4.png")} /> */}
            <div class="features-6">
              <div class="container">
                <div class="align-items-center row">
                  <div class="col-lg-6">
                    <h2 className="text-white font-weight-bold uppercase">
                      De Driehoeksverhouding: Novi, IT Enterprise Omgevingen en
                      RITD
                    </h2>
                    <p>
                      Bij RITD werken we in een unieke driehoeksverhouding samen
                      met de Hogeschool van Novi en diverse IT Enterprise
                      Omgevingen. Deze samenwerking stelt ons in staat om het
                      lesplan en de internship zo te ontwerpen dat het perfect
                      aansluit bij de eisen en verwachtingen van de markt:
                    </p>
                    <div class="info info-horizontal info-default">
                      <div class="icon icon-warning">
                        <i class="tim-icons icon-atom"></i>
                      </div>
                      <div class="description">
                        <h3 class="info-title">Hogeschool van Novi:</h3>
                        <p>
                          Biedt een sterke academische basis en zorgt voor de
                          initiële opleiding van de studenten.
                        </p>
                      </div>
                    </div>
                    <div class="info info-horizontal info-default">
                      <div class="icon icon-info">
                        <i class="tim-icons icon-app"></i>
                      </div>
                      <div class="description">
                        <h3 class="info-title">IT Enterprise Omgevingen:</h3>
                        <p>
                          Onze klanten die opereren in complexe IT-omgevingen.
                          Zij geven ons inzicht in de specifieke eisen, wensen
                          en competenties die nodig zijn in de praktijk.
                        </p>
                      </div>
                    </div>
                    <div class="info info-horizontal info-default">
                      <div class="icon icon-success">
                        <i class="tim-icons icon-bell-55"></i>
                      </div>
                      <div class="description">
                        <h3 class="info-title">RITD (Detacheerder):</h3>
                        <p>
                          Met onze uitgebreide kennis en ervaring als
                          detacheerder weten wij precies wat onze klanten
                          verwachten. Hierdoor kunnen wij het lesplan en de
                          stages in samenspraak met zowel de IT Enterprise
                          Omgevingen als Novi opstellen, zodat de studenten
                          optimaal worden voorbereid op hun toekomstige rollen.
                        </p>
                      </div>
                    </div>
                    <p className="mt-5">
                      Deze samenwerking zorgt ervoor dat wij als detacheerder in
                      staat zijn om een brug te slaan tussen de academische
                      wereld en de praktijk, en daarmee een effectieve oplossing
                      te bieden voor het probleem van hoge toelatingseisen en de
                      kloof tussen onderwijs en werkveld.
                    </p>
                  </div>
                  <div class="col-10 col-lg-6">
                    <img
                      alt="..."
                      class="shape img-width"
                      src={require("assets/img/office.jpg")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section section-basic text-center"
            id="basic-elements"
          >
            <Container>
              <h2 className="text-white font-weight-bold">
                MEER WETEN OVER <span className="text-red">RITD?</span>
              </h2>
              <Button className="mt-4" color="danger" href="/over-ons">
                Lees meer
              </Button>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
