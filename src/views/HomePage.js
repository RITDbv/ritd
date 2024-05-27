/*!

=========================================================
* RITD - Home page
=========================================================

*/
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import { Mousewheel, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

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
                <MainHeader color="squares" btn="color" splash="true" />
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
                    <div className="section">
                        <img alt="..." className="path" src={require("assets/img/path3.png")} />
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="12">
                                    <h1 className="text-center font-weight-bold">DIENSTEN</h1>
                                    <p className="text-center">Wij bieden innoverende software oplossingen op maat,
                                        onze IT-diensten zijn verdeeld in de onderstaande categorieën.
                                        Heeft u een unieke opdracht? Neem dan vrijblijvend
                                        contact met ons op om de mogelijkheden te bespreken.</p>
                                        <br/>
                                    <Row className="row-grid justify-content-center homepage-info">
                                        <Col>
                                            <a
                                                href="/architectuur"
                                            >
                                                <div className="info text-center">
                                                    <div className="icon icon-diensten-1">
                                                        <FontAwesomeIcon icon="fa-solid fa-sitemap" />
                                                    </div>
                                                    <h4 className="info-title">SOFTWARE ARCHITECTUUR</h4>
                                                    <hr className="line-diensten-1" />
                                                    <p>
                                                        Onze developers staan voor u klaar om op basis van conceptuele ideeën, concrete software oplossingen vo...
                                                    </p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col>
                                            <a
                                                href="/product-ontwikkeling"
                                            >
                                                <div className="info text-center">
                                                    <div className="icon icon-diensten-2">
                                                        <FontAwesomeIcon icon="fa-solid fa-chart-pie" />
                                                    </div>
                                                    <h4 className="info-title">PRODUCT ONTWIKKELING</h4>
                                                    <hr className="line-diensten-2" />
                                                    <p>
                                                        Onze software developers kunnen bij lopende projecten bijspringen of software totaalontwerpen uitvoer...
                                                    </p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col>
                                            <a
                                                href="/rpd"
                                            >
                                                <div className="info text-center">
                                                    <div className="icon icon-diensten-3">
                                                        <FontAwesomeIcon icon="fa-solid fa-people-group" />
                                                    </div>
                                                    <h4 className="info-title">RPD TEAMS</h4>
                                                    <hr className="line-diensten-3" />
                                                    <p>
                                                        Het Root Performance Development team is een team dat bestaat uit alleen senior full stack software engineers die...
                                                    </p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col>
                                            <a
                                                href="/consultancy"
                                            >
                                                <div className="info text-center">
                                                    <div className="icon icon-diensten-4">
                                                        <FontAwesomeIcon icon="fa-solid fa-comments-dollar" />
                                                    </div>
                                                    <h4 className="info-title">CONSULTANCY</h4>
                                                    <hr className="line-diensten-4" />
                                                    <p>
                                                        Voor meer behoefte aan specialistische kennis hebben wij de beste software engineers voor u beschikbaar met elk...
                                                    </p>
                                                </div>
                                            </a>
                                        </Col>
                                        {/* <Col>
                                            <a
                                                href="/ai"
                                            >
                                                <div className="info text-center">
                                                    <div className="icon icon-diensten-5 glitch">
                                                        <FontAwesomeIcon icon="fa-solid fa-microchip" />
                                                    </div>
                                                    <h4 className="info-title glitch">AI Agents</h4>
                                                    <hr className="line-diensten-5" />
                                                    <p>
                                                        Voor meer behoefte aan specialistische kennis hebben wij de beste software engineers voor u beschikbaar met elk...
                                                    </p>
                                                </div>
                                            </a>
                                        </Col> */}
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="section">
                        <Container>
                            <Row className="justify-content-between">
                                <Col className="mb-5 mb-lg-0" lg="6">
                                    <h2 className="text-white font-weight-bold">
                                        DE KRACHT VAN RITD
                                    </h2>
                                    <p className="text-white mt-4">
                                        RITD heeft krachtige oplossingen en innovaties tot stand gebracht door een nieuwe weg in
                                        te slaan en alleen te werken met de meest ervaren en beste developers van Nederland. Hierdoor
                                        kan RITD next level software oplossingen aanbieden voor elke uitdaging.
                                        <br />Onze senior developers zijn allemaal getoetst op hun vaardigheden en kunde om kwaliteit
                                        en innovatie te kunnen garanderen. Wij willen u niet alleen een oplossing bieden voor vandaag
                                        maar een die nog jaren mee kan draaien. Ook voor AI, machine learning, cloud technology of
                                        automatisering staan onze developers voor u klaar. Ontdek wat RITD voor u kan betekenen.
                                    </p>
                                    <Button
                                        className="mt-4"
                                        color="danger"
                                        href="/diensten"
                                    >
                                        Lees meer
                                    </Button>
                                </Col>
                                <Col lg="6">
                                    <img src={require("assets/img/img1.png")} />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="section">
                        {/* <img alt="..." className="path" src={require("assets/img/path4.png")} /> */}
                        <Container>
                            <Row className="justify-content-between">
                                <Col lg="5" className="mb-5">
                                    <img src={require("assets/img/123.jpg")} />
                                </Col>
                                <Col className="mb-5 mb-lg-0" lg="7">
                                    <h2 className="text-white font-weight-bold">
                                        WAT BIED RITD JOU?
                                    </h2>
                                    <p className="text-white mt-4">
                                        RITD staat voor ‘ROOT IT DEVELOPMENT’. Wij hebben als doel om de grens van software ontwikkeling
                                        te verleggen met de meest elite developers van Nederland. Wij leggen de focus op innovatie en de
                                        technologieën van de toekomst. Daarom heeft RITD vooruitstrevende interne en externe projecten
                                        waarbij wij werken met AI, ML, Big Data, Cloud en AR.<br /><br />Een doorbraak van revolutionaire
                                        technologische proportie is alleen mogelijk als wij samen de grenzen van software ontwikkeling
                                        verleggen. Dit is waar RITD voor staat. Waar anderen stoppen omdat het ”niet kan” gaan wij door en
                                        creëren wij het ”onmogelijke”.<br /><br />Naast een bijzonder innovatieve werkomgeving heeft RITD nog meer
                                        te bieden.
                                    </p>
                                    <div className="accordionTabs">
                                        <div className="accordionTab">
                                            <input type="checkbox" id="chck7" />
                                            <label className="accordionTab-label" htmlfor="chck7">Opmaat gemaakt salaris</label>
                                            <div className="accordionTab-content">
                                                {/* Het RITD 70/30 model houdt in dat 70% van het klant tarief aan de werknemer wordt uitbetaald en 30% aan RITD. Wij streven altijd naar transparantie. */}
                                            </div>
                                        </div>
                                        <div className="accordionTab">
                                            <input type="checkbox" id="chck8" />
                                            <label className="accordionTab-label" htmlfor="chck8">Direct een vast contract</label>
                                            <div className="accordionTab-content">
                                                Kom jij bij ons in dienst? Dan gaan wij met elkaar een samenwerking aan waar wij beiden sterker van worden en daar hoort een stuk vertrouwen en vastigheid bij. RITD ziet de waarde van haar werknemers en laat dat ook merken.
                                            </div>
                                        </div>
                                        <div className="accordionTab">
                                            <input type="checkbox" id="chck9" />
                                            <label className="accordionTab-label" htmlfor="chck9">Sparren met de top 5%</label>
                                            <div className="accordionTab-content">
                                                Omdat RITD alleen met de beste developers van Nederland werkt, hebben wij een unieke groep van hoog niveau waar men zich aan elkaar kan optrekken en kan sparren over uitdagende onderwerpen.
                                            </div>
                                        </div>
                                        <div className="accordionTab">
                                            <input type="checkbox" id="chck10" />
                                            <label className="accordionTab-label" htmlfor="chck10">Innovatieve projecten</label>
                                            <div className="accordionTab-content">
                                                RITD werkt aan eigen projecten waarmee wij de grenzen van software ontwikkeling verleggen en next level software te creëren. Innovatie staat bij ons centraal.
                                            </div>
                                        </div>
                                        <Button
                                        className="mt-4"
                                        color="danger"
                                        href="/werken-bij"
                                    >
                                        Lees meer
                                    </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="section section-basic text-center" id="basic-elements">
                        <Container>
                            <h2 className="text-white font-weight-bold">
                                MEER WETEN OVER <span className="text-red">RITD?</span>
                            </h2>
                            <Button
                                        className="mt-4"
                                        color="danger"
                                        href="/over-ons"
                                    >
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
