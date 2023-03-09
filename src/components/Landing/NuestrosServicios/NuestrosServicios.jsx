// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// STYLES
import './servicios.css';

export default function NuestrosServicios() {
  return (
    <div className="section text-center" >
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
                <h4 className="info-title"> <b>Consultoría y gestión comercial</b> </h4>
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
                <h4 className="info-title"> <b>Gestión de Proyectos</b> </h4>
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
                <h4 className="info-title"> <b>Capacitaciones</b> </h4>
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
                <h4 className="info-title"> <b>Organización de eventos</b>  </h4>
                <p>
                  Desarrollo de la logística, captación de Auspicios, manejo financiero, contable y legal
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
  )
}