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
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title"> Sobre Nosotros </h2>
              <p className="description">
                <b>
                Desde INGcomer nos enfocamos en explotar su
                potencial comercial, así poder desarrollar mejores
                vínculos de mercado, aumentar beneficios, generar
                nuevas oportunidades de negocios y despejar el
                camino hacia el crecimiento económico.
                </b>
              </p>
              <p className="description">
                Aportamos tanto a empresas privadas como a ONG’s, la posibilidad de visibilizar y
                prestar todo el valor que tengan para ofrecer, a través del desarrollo de su propuesta
                comercial, de gestionar relaciones estratégicas de mercado, armado de plan de
                negocios y revalidación de su propuesta de valor.
                Gracias a nuestro trabajo, diferentes empresas y organizaciones logran el desarrollo y
                obtención de financiamiento de diferentes proyectos.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
