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
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import HomePage from "views/HomePage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import DienstenPage from "views/DinstenPage";
import ArchitectuurPage from "views/ArchitectuurPage";
import ProductOntwikkelingPage from "views/ProductOntwPage";
import RPDPage from "views/RPDPage";
import ConsultancyPage from "views/ConsultancyPage";
import AIPage from "views/AIPage";
import OverOnsPage from "views/OverOnsPage";
import WerkenBijPage from "views/WerkenBijPage";
import ContactPage from "views/ContactPage";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import KPNPage from "views/KPNPage";

library.add(fas)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/components" element={<Index />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/diensten" element={<DienstenPage />} />
      <Route path="/architectuur" element={<ArchitectuurPage />} />
      <Route path="/product-ontwikkeling" element={<ProductOntwikkelingPage />} />
      <Route path="/rpd" element={<RPDPage />} />
      <Route path="/consultancy" element={<ConsultancyPage />} />
      <Route path="/ai" element={<AIPage />} />
      <Route path="/kpn" element={<KPNPage />} />
      <Route path="/over-ons" element={<OverOnsPage />} />
      <Route path="/werken-bij" element={<WerkenBijPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  </BrowserRouter>
);
