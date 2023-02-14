/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "./IndexNavbar.js";
import LandingPageHeader from "./LandingPageHeader.js";
import DemoFooter from "./DemoFooter.js";

import SectionDark from "../sections/SectionDark.js";
import SectionNucleoIcons from "components/sections/SectionNucleoIcons.js";
import SectionCarousel from "components/sections/SectionCarousel.js";

import PLACEHOLDER from '../../assets/img/landing/PLACE_HOLDER.jpg'

import vision from '../../assets/img/landing/vision.jpg'
import mision from '../../assets/img/landing/mision.jpg'
import valores from '../../assets/img/landing/valores.jpg'

import './logos.css';
import './servicios.css';

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
        
        <div className="section logos">
          <h2> Confian en Nosotros </h2>
          <div className="imgcontainer"> 
            <div className="img">
              <img src={PLACEHOLDER}/>
            </div>
            <div className="img">
              <img src={PLACEHOLDER}/>
            </div>
            <div className="img">
              <img src={PLACEHOLDER}/>
            </div>
            <div className="img">
              <img src={PLACEHOLDER}/>
            </div>
            <div className="img">
              <img src={PLACEHOLDER}/>
            </div>
            <div className="img">
              <img src={PLACEHOLDER}/>
            </div>
          </div>
        </div>
        <div className="section text-center" id="NuestrosServicios">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title"> Nuestros Servicios </h2>
                {/* <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button> */}
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title"> Consultoría Comercial </h4>
                    <p className="description">
                      Armado y validación de propuesta
                      de valor, desarrollo de plan de
                      negocios, estructura de relaciones
                      B2B, marco legal.
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title"> Gestión de Proyectos </h4>
                    <p>
                      relacionados a la ingeniería y
                      proyectos en general (Armado
                      de presupuestos, evaluación
                      financiera, análisis de
                      rentabilidad y armado
                      comercial).
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-hat-3" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Capacitaciones</h4>
                    <p>
                      (Equipos de ventas y captación de
                      partners, Storytelling, Coaching).
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-globe" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Captación de Partners</h4>
                    <p>
                      (A comisión o pre-acuerdo).
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <SectionCarousel/>
        
        
        <div className="section section-dark text-center">
          <h2 className="title"> Objetivos </h2>
        </div>

        <section id="Objetivos">
          
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
          empresas privadas"
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
          ING-comer pueden
          desarrollarse tanto
          profesionalmente, como
          también convertirse en
          mejores personas."
          img={valores}
        />
        </section>
        
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title"> El equipo</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section landing-section" id="Contacto">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form" action="mailto:contacto@ingcomer.com" method="post" enctype="text/plain">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg" type="submit">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
