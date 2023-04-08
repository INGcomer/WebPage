import SectionNucleoIcons from "components/sections/SectionNucleoIcons.js";

// IMGS
import vision from '../../../assets/img/Objetivos/vision.jpg'
import mision from '../../../assets/img/Objetivos/mision.jpg'
import valores from '../../../assets/img/Objetivos/valores.jpg'

export default function Objetivos() {
    return (
      <>
      <div className="section section-dark text-center">
          <h2 className="title"> Objetivos </h2>
        </div>
          
        <SectionNucleoIcons 
          titulo="Visión"
          descripcion="INGcomer aspira a ser la
          mayor compañía de servicios
          de consultoría de la región,
          contribuyendo en un cambio
          social y de mercado que
          incremente en gran medida
          el bienestar económico y
          social, mediante facilitarles a
          los grandes proyectos
          florecer, y a las grandes ideas
          a explotar su potencial."
          img={vision}
        />
        <SectionNucleoIcons 
          titulo="Misión"
          descripcion="Ofrecemos soluciones que
          permiten capitalizar el 100%
          del valor que las empresas
          tienen para aportar,
          fortaleciendo su propuesta
          comercial, optimizando la
          organización y apoyándola
          en el desarrollo de sus
          proyectos. También
          prestamos apoyo a ONG's,
          con el objeto de que se
          desplieguen a la altura de
          empresas privadas."
          img={mision}
        />
        <SectionNucleoIcons 
          titulo="Valores"
          descripcion="Nuestro objetivo es crear una
          cultura organizacional
          donde se persiga el
          crecimiento permanente de
          sus miembros, el aprendizaje
          constante y el desarrollo de
          nuevos talentos. Creemos
          fielmente que con el trabajo
          necesario, los miembros de
          INGcomer pueden
          desarrollarse tanto
          profesionalmente, como
          también convertirse en
          mejores personas."
          img={valores}
        />
      </>
    )
  }