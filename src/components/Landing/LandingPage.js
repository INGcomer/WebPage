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
import './Landing.css';

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
          <SectionDark 
            title="Sobre Nosotros"
            text1="Desde INGcomer nos enfocamos en explotar su
            potencial comercial, así poder desarrollar mejores
            vínculos de mercado, aumentar beneficios, generar
            nuevas oportunidades de negocios y despejar el
            camino hacia el crecimiento económico."
            text2="Aportamos tanto a empresas privadas como a ONG’s, la posibilidad de visibilizar y
            prestar todo el valor que tengan para ofrecer, a través del desarrollo de su propuesta
            comercial, de gestionar relaciones estratégicas de mercado, armado de plan de
            negocios y revalidación de su propuesta de valor.
            Gracias a nuestro trabajo, diferentes empresas y organizaciones logran el desarrollo y
            obtención de financiamiento de diferentes proyectos."
          />
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
          {/* <SectionDark 
            title="experiencia del equipo"
            text1="algun texto"
            text2="otro texto"
          /> */}
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
