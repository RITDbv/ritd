/*!

=========================================================
* RITD - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <p className="header_top_text">Transformeer Technologie, Bevorder Innovatie</p>
          <h1 className="header_title">Welkom bij RITD</h1>
          <hr className="line-danger" />
          <p className="header_bottom_text">
          Leid de Toekomst met Geavanceerde IT-oplossingen, Detachering, Softwareontwikkeling, AI-integratie en Expert Consultancy
          </p>
        </div>
      </Container>
    </div>
  );
}
