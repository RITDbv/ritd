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
import {
  Container, Row,
  Col,
} from "reactstrap";

export default function MainHeader(variables) {
  console.log(variables)
  let effectContainer;
  let normalContainer;
  if (variables.splash === "true") {
    effectContainer =
  //   <div className="hero-container">
  //   <p className="hero-text">AL UW OPLOSSINGEN VOOR:</p>
  //   <p className="hero-text animation">
  //     <span className="color1">SOFTWARE ARCHITECTUUR</span>,  
  //     <span className="color2"> PRODUCT ONTWIKKELING</span>, 
  //     <span className="color3"> RPD</span>, 
  //     <span className="color4"> CONSULTANCY & ADVISERING</span>, 
  //     <span className="color5"> AI</span>
  //   </p>
  // </div>
  <div class="animation">
    <div class="box">
        <div class="title">
            <span class="block"></span>
            <h1>AL UW OPLOSSINGEN VOOR<span></span><span></span></h1>
        </div>

        <div class="role">
            <div class="block"></div>
            <p className="color-1">SOFTWARE ARCHITECTUUR</p>
        </div>
        <div class="role">
            <div class="block"></div>
            <p className="color-2">PRODUCT ONTWIKKELING</p>
        </div>
        <div class="role">
            <div class="block"></div>
            <p className="color-3">RPD TEAMS</p>
        </div>
        <div class="role">
            <div class="block"></div>
            <p className="color-4">CONSULTANCY</p>
        </div>
        {/* <div class="role">
            <div class="block"></div>
            <p className="color-5">AI AGENTS</p>
        </div> */}

    </div>
</div>
  }

  if (variables.splash !== "true") {
    normalContainer =
      <div className="hero-container">
        <h1 className="hero-title">{variables.title}</h1>
      </div>
  }
  return (
    <div className="page-header header-filter">
      {effectContainer}
      <div className={variables.color + " square1"} />
      <div className={variables.color + " square2"} />
      <div className={variables.color + " square3"} />
      <div className={variables.color + " square4"} />
      <div className={variables.color + " square5"} />
      <div className={variables.color + " square6"} />
      <div className={variables.color + " square7"} />
      <Container>
        {normalContainer}
      </Container>
    </div>
  );
}
