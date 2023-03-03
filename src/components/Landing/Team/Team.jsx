// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Container,
    Row,
    Col
} from "reactstrap";

import sofie from "assets/img/faces/joe-gardner-2.jpg"

import Alexis from "../../../assets/img/TeamMembers/Alexis.jpg"
import Augusto from "../../../assets/img/TeamMembers/Augusto.jpg"
import Lucas from "../../../assets/img/TeamMembers/Lucas.jpg"
import Santiago from "../../../assets/img/TeamMembers/Santiago.jpg"
import Tomas from "../../../assets/img/TeamMembers/Tomas.jpg"

export default function Team() {
    return (
        <div className="section section-dark text-center">
            <Container>
                <h2 className="title"> El equipo</h2>
                <Row>
                    <TeamMember name="Alexis Parada" puesto="Co Director Ejecutivo" img={Alexis} linkedin="https://www.linkedin.com/in/alexis-parada-beltran-911a03170/"/>
                    <TeamMember name="Lucas O'Donnell" puesto="Cofundador y Director Ejecutivo" img={Lucas} linkedin="https://www.linkedin.com/in/lucas-o-donnell-riba-6289791aa/"/>
                    <TeamMember name="Tomas Garignani" puesto="Cofundador y Director Ejecutivo" img={Tomas} linkedin="https://www.linkedin.com/in/tomas-garignani-a91312219/"/>
                    <TeamMember name="Santiago Russó" puesto="" img={Santiago} linkedin="https://www.linkedin.com/in/santiagorusso/"/>
                    <TeamMember name="Augusto Antonelli" puesto="Director de proyecto" img={Augusto} linkedin="https://www.linkedin.com/in/augusto-nevio-antonelli-pol/" />
                </Row>
            </Container>
        </div>
    )
}



function TeamMember({ name, puesto, img, linkedin }) {
    return (<Col>
        <Card className="card-profile card-plain">
            <div className="card-avatar">
                <img alt="..." src={img} />
            </div>
            <CardBody>
                <div className="author">
                    <CardTitle tag="h4">{name}</CardTitle>
                    {/* <h6 className="card-category">{puesto}</h6> */}
                </div>
                {/* <p className="card-description text-center">
                    A group becomes a team when each member is sure enough of
                    himself and his contribution to praise the skill of the
                    others. No one can whistle a symphony. It takes an
                    orchestra to play it.
                </p> */}
            </CardBody>
            <CardFooter className="text-center">
                {/* <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fa fa-twitter" />
                </Button> */}
                {/* <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fa fa-google-plus" />
                </Button> */}
                <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href={linkedin}
                    
                >
                    <i className="fa fa-linkedin" />
                </Button>
            </CardFooter>
        </Card>
    </Col>)
}