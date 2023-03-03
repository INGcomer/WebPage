import React from "react";

// COMPONETS
import ExamplesNavbar from "./IndexNavbar.js";
import LandingPageHeader from "./LandingPageHeader.js";
import DemoFooter from "./DemoFooter.js";

import SectionDark from "../sections/SectionDark.js";
import SectionCarousel from "components/sections/SectionCarousel.js";

import LogosCarrusel from "./Logos_carrusel/LogosCarrusel.jsx"
import NuestrosServicios from "./NuestrosServicios/NuestrosServicios.jsx";
import Objetivos from "./Objetivos/Objetivos.jsx";
import Team from "./Team/Team.jsx";
import Contacto from "./Contacto/Contacto.jsx"



// STYLES
import './logos.css';

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />

      <section  id="Header">
        <LandingPageHeader/>
      </section>

      <div className="main">
        <section id="Nosotros">
          <SectionDark/>
        </section>

        <section id="Logos">
          <LogosCarrusel/>
        </section>

        <section id="NuestrosServicios">
          <NuestrosServicios/>
        </section>

        {/* <SectionCarousel/> */}
        
        <section id="Objetivos">
          <Objetivos/>
        </section>

        <section id="Team">
          <Team/>
        </section>

        <section id="Contact">
          <Contacto/>
        </section>
      </div>

      <DemoFooter />
    </>
  );
}

export default LandingPage;
