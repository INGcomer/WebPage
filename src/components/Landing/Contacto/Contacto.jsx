import {
    Button,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

export default function Logos_carrusel() {
    return (
        <div className="section landing-section" id="Contacto">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="text-center">Contactanos</h2>
              <Form className="contact-form" action="mailto:contacto@ingcomer.com" method="post" enctype="text/plain">
                <Row>
                  <Col md="6">
                    <label>Nombre</label>
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
                <label>Mensaje</label>
                <Input
                  placeholder=""
                  type="textarea"
                  rows="4"
                />
                <Row>
                  <Col className="ml-auto mr-auto" md="4">
                    <Button className="btn-fill" color="danger" size="lg" type="submit">
                      Enviar mensaje
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }